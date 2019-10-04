---
id: Opening-and-Closing
title: Open and Close - Driver Functions
sidebar_label: Opening and Closing
---

- Driver probes for the interface at module load time or at kernel boot time.
- Before the interface can be used, the kernel must open and assign address to it.
- The kernel opens or closes an interface in response to the `ifconfig` command.

## Open Method
- Called in response to `ifconfig eth0 <ip>` or `ifconfig eth0 up`
- ifconfig assigns the IP by means of ioctl(SIOCSIFADDR). Handled by Kernel only.
- ifconfig sets the IFF_UP bit in dev->flag by means of ioctl(SIOCSIFFLAGS). Handled by Kernel only.
- SIOCSIFFLAGS calls the open method for the device.
- Open method is used to allocate any system resources:
  - Copy HW address from device to dev->dev_addr
  - IO Addresses
  - IRQ
  - DMA Channels etc.
  - Start the interface’s transmit queue. `void netif_start_queue(struct net_device *dev);`

## Close Method

- Called in response to `ifconfig eth0 down`
- ifconfig uses ioctl(SIOCSIFFLAGS) to `clear IFF_UP`
- Then **close** method is called.
- Stop method is used to allocate any system resources
  - `netif_stop_queue(dev);` /* can't transmit any more */
  - Disable and Release IRQ
  - Disable and Release DMA Channels

