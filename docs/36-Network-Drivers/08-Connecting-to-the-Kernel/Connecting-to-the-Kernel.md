---
id: Connecting-to-the-Kernel
title: Connecting to the Kernel
sidebar_label: Connecting to the Kernel
---


## Overview
- Kernel offers generalized support for Ethernet devices
- Network derivers are placed in `drivers/net`
-  is different from char and block drivers
- major and minor numbers for network interfaces are not used

### Device Registration (Module Loading)
- Network driver is registered by its module initialization function
- registeration is different than `char` and `block` drivers
- major and minor numbers are not allocated
- On Insmod, driver probes for 
  -  its devices
  -  IO Ports
  -  IRQ Line
- For each device `struct net_device` is allocated, which is defined in `<linux/netdevice.h>`
- Drivers inserts `struct net_device` into Global list of Network Devices
- Each net_device contains contains a `kobject` (reference-counted) and exported via `sysfs`.
- `alloc_netdev` allocated `struct net_device`

### Allocate Network device "struct net_device"

```c
struct net_device *alloc_netdev(int sizeof_priv, const char *name, void (*setup)(struct net_device *));

myDev = alloc_netdev(sizeof(struct myDev_priv), "eth%d", mydev_init);

```
- `sizeof_priv` is the size of the driver’s “private data” area
- `name` is the name of this interface, as is seen by user space, eth0
- `setup` is a pointer to an initialization function

Following Helper functions can also be used:

```c
struct net_device *alloc_etherdev(int sizeof_priv);
```
- This function allocates a network device using `eth%d` for the name argument.
- It provides its own initialization function (ether_setup) 

### Register Network device "struct net_device"

```c
result = register_netdev(&myDev)
```

- As soon as you call register_netdev, your driver may be
called to operate on the device.
- You should not register the device until everything has been completely initialized


## Initializing Each Device
- `struct net_device` should always be initialized before calling `register_netdev`
- Linux provides `ether_setup` helper function

```c
ether_setup(myDev); /* assign some of the fields */
dev->open = myDev_open;
dev->stop = myDev_release;
dev->set_config = myDev_config;
dev->hard_start_xmit = myDev_tx;
dev->do_ioctl = myDev_ioctl;
dev->get_stats = myDev_stats;
dev->rebuild_header = myDev_rebuild_header;
dev->hard_header = myDev_header;
dev->tx_timeout = myDev_tx_timeout; // transmission timeouts
dev->watchdog_timeo = timeout; // transmission timeouts
/* keep the default flags, just add NOARP */
dev->features |= NETIF_F_NO_CSUM;
dev->hard_header_cache = NULL; /* Disable caching
```

> When `alloc_etherdev` is used, `ether_setup` is not required, because `alloc_etherdev` calls `ether_setup` internally


### Useful Functions 

- get access to the private data pointer

```c
struct myDev_priv *priv = netdev_priv(dev);

struct myDev_priv {
struct net_device_stats stats;
int status;
struct myDev_packet *ppool;
struct myDev_packet *rx_queue; /* List of incoming packets */
int rx_int_enabled;
int tx_packetlen;
u8 *tx_packetdata;
struct sk_buff *skb;
spinlock_t lock;
};

```
- `struct net_device_stats stats` Network stats

The following lines in snull_init allocate and initialize dev->priv:

```c
priv = netdev_priv(dev);
memset(priv, 0, sizeof(struct snull_priv));
spin_lock_init(&priv->lock);
snull_rx_ints(dev, 1); /* enable receive interrupts */
```

## Module Unloading
- unregisters the interfaces - unregister_netdev
- internal cleanup - my_cleanup
- releases the net_device structure back to the system - free_netdev

```c
unregister_netdev(&myDev);
my_cleanup(&myDev);
free_netdev(&myDev);
```

> Note that our internal cleanup (done in my_cleanup) cannot happen until the
device has been unregistered. It must, however, happen before we return the net_device structure to the system; once we have called free_netdev, we cannot make any further references to the device or our private area



