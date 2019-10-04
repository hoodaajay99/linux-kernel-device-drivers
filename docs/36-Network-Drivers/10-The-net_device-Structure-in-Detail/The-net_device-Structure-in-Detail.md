---
id: The-net_device-Structure-in-Detail
title: The net_device Structure in Detail
sidebar_label: The net_device Structure in Detail
---


## Global Information

- char name[IFNAMSIZ];
The name of the device

- unsigned long state;
Device state. The field includes several flags. Utility functions used to manipulate flags

struct net_device *next;
- Pointer to the next device in the global linked list.

int (*init)(struct net_device *dev);
- If this pointer is set, the function is called by register_netdev to complete the initialization of the net_device structure. 

## Hardware Information

- low-level hardware information
- most modern drivers do make use of them

unsigned long rmem_end;
unsigned long rmem_start;
unsigned long mem_end;
unsigned long mem_start;

- Tx (mem_) and Rx (rmem_) addresses of shared memory

unsigned long base_addr;
- I/O base address of the network interface

unsigned char irq;
- The assigned interrupt number.
- This value can usually be set at boot or load time and modified later using ifconfig.

unsigned char if_port;
- The port in use on multiport devices.

unsigned char dma;
- The DMA channel allocated by the device.

### Interface Information

- Most of the information about the interface is correctly set up by the `ether_setup` function.


Some non-Ethernet interfaces can use helper functions similar to ether_setup.

```c
void ltalk_setup(struct net_device *dev); // LocalTalk device
void fc_setup(struct net_device *dev); // fiber-channel devices
void fddi_setup(struct net_device *dev); // Fiber Distributed Data Interface (FDDI) 
void hippi_setup(struct net_device *dev); // High-Performance Parallel Interface (HIPPI) 
void tr_setup(struct net_device *dev); // token ring network interfaces
```

Most devices are covered by one of these classes. If yours is something radically new
and different, however, you need to assign the following fields by hand:

```c
unsigned short hard_header_len; //packet before the IP header
unsigned mtu;  // 1500 for ethernet
unsigned long tx_queue_len; // 1000 by ether_setup
unsigned short type; // hardware type, used by ARP
unsigned char addr_len; //Hardware (MAC) address length
unsigned char broadcast[MAX_ADDR_LEN]; // broadcast device hardware addresses
unsigned char dev_addr[MAX_ADDR_LEN]; // device hardware addresses
unsigned short flags; // IFF_UP,  IFF_NOARP, IFF_PROMISC, IFF_MULTICAST, IFF_RUNNING
int features;
```

| Flags | Description |
|:-:|:-:|
| IFF_UP | interface is active and ready to transfer packets. |
| IFF_NOARP | interface can’t perform ARP |
| IFF_PROMISC | activate promiscuous operation |
| IFF_MULTICAST | capable of multicast transmission | 
| IFF_RUNNING | Interface Running |


| Features | Description |
|:-:|:-:|
| NETIF_F_SG, NETIF_F_FRAGLIST | Scatter/gather I/O. Driver needs to implement fragmentation |
| NETIF_F_IP_CSUM, _NO_CSUM, _HW_CSUM | Control checksum calculation |
| NETIF_F_HW_VLAN_TX, _VLAN_RX, _VLAN_FILTER | support for 802.1q VLAN packets |

### The Device Methods

#### Fundamental Methods (Required)

`int (*open)(struct net_device *dev);`
- Opens the interface, whenever ifconfig activates it
- Register any system resource it needs (I/O ports, IRQ, DMA etc)

`int (*stop)(struct net_device *dev);`
- Stops the interface.
- Release resource allocated at open time.

`int (*hard_start_xmit) (struct sk_buff *skb, struct net_device *dev);`
- Method that initiates the transmission of a packet.
- The full packet (protocol headers and all) is contained in a socket buffer (sk_buff) structure.

`int (*hard_header) (struct sk_buff *skb, struct net_device *dev, unsigned short type, void *daddr, void *saddr, unsigned len);`
- builds the hardware header from the source and destination hardware addresses

`void (*tx_timeout)(struct net_device *dev);`
- Method called by the networking code when a packet transmission fails

`struct net_device_stats *(*get_stats)(struct net_device *dev);`
- when `ifconfig` or `netstat -i` is run to get stats

`int (*set_config)(struct net_device *dev, struct ifmap *map);`
- Changes the interface configuration.

```c
int weight;`
int (*poll)(struct net_device *dev; int *quota);
void (*poll_controller)(struct net_device *dev);
```
Method provided by NAPI-compliant drivers to operate the interface in a polled
mode, with interrupts disabled.

`int (*do_ioctl)(struct net_device *dev, struct ifreq *ifr, int cmd);`
- Performs interface-specific ioctl commands.

`void (*set_multicast_list)(struct net_device *dev);`

`int (*set_mac_address)(struct net_device *dev, void *addr);`

`int (*change_mtu)(struct net_device *dev, int new_mtu);`

### Utility Fields

`unsigned long trans_start;`
`unsigned long last_rx;`
- Fields that hold a jiffies value.

`int watchdog_timeo;`
`void *priv;`

`struct dev_mc_list *mc_list;`
`int mc_count;`

`spinlock_t xmit_lock;`
`int xmit_lock_owner;`









