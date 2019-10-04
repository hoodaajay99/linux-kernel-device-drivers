---
id: Packet-Transmission
title: Packet Transmission
sidebar_label: Packet Transmission
---

- Transmission refers to the act of sending a packet over a network link
- Kernel calls `hard_start_transmit` method to put the data on an outgoing queue.
- Each packet handled by the kernel is contained in a socket buffer structure `(struct sk_buff)`
- The socket buffer is passed to `hard_start_xmit`

## hard_start_xmit Function

```c
int mydev_tx(struct sk_buff *skb, struct net_device *dev)
```
- `skb->data` points to data
- `skb->len` is the length

```c
int snull_tx(struct sk_buff *skb, struct net_device *dev)
{
    int len;
    char *data, shortpkt[ETH_ZLEN];

    struct snull_priv *priv = netdev_priv(dev);

    data = skb->data;
    len = skb->len;

    if (len < ETH_ZLEN) {
        memset(shortpkt, 0, ETH_ZLEN);
        memcpy(shortpkt, skb->data, skb->len);
        len = ETH_ZLEN;
        data = shortpkt;
    }

    dev->trans_start = jiffies; /* save the timestamp */
    /* Remember the skb, so we can free it at interrupt time */
    priv->skb = skb;

    /* actual deliver of data is device-specific, and not shown here */
    snull_hw_tx(data, len, dev);
    return 0; /* Our simple device can not fail */
}
```
- The transmission function, thus, just performs some sanity checks on the packet and
transmits the data through the hardware-related function.

## hard_start_xmit Function - Return values

| Return Value | Status | Description |
|:-:|:-:|:-:|
| 0 | Success | underlying hardware has successfully transmitted the packet |
| non-zero | Failure | Tx, Kernel will attemp again |

Reasons for Failure:
- Device/Media disconnected
- Ring buffers full (Overflow)

### Ring Buffers
- Modern Network Drivers implement `Tx Ring Buffers` for queing the packets
- DMA Engine transfers the packets in `Tx Ring Buffers` out to Hardware.
- Tx Interrupt is generated for every packet transmitted.

### Transmission Concurrency

The hard_start_xmit function is protected from concurrent calls by a `spinlock (xmit_lock)` in the `net_device` structure.

### Transmission Flow Control

- `Tx Ring Buffer` Queue may get full.
- Driver can indicate to the kernel to stop and start the transmit Queue
- Following Functions are used:
  - netif_stop_queue
  - netif_wake_queue

### Disable Transmission
- `netif_tx_disable`
- This function behaves much like `netif_stop_queue`, but it also ensures that, when it returns, your `hard_start_xmit` method is not running on another CPU. 
- The queue can be restarted with netif_wake_queue, as usual.

### Transmission Timeouts
- Transmission Timeouts can happen in the system, and cause `transmission lockups`
- Networking system identifies and handles Timeouts.
- Driver has to only set the `watchdog_timeo`
