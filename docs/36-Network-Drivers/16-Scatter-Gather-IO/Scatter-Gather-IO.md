---
id: Scatter-Gather-IO
title: Scatter Gather IO
sidebar_label: Scatter Gather IO
---

## Scatter Gather aka Zero Copy Transmission

- Packet is formed of many parts
  - User Space Data
  - TCP Header
  - UDP Header
  - Ethernet Header
- Creating Packet may require Fair amount of data copying.
- Scatter/gather I/O enables “zero-copy” transmission
- Network interface can perform scatter/gather I/O
- “shared info” `skb_shinfo` field within the skb indicated fragments
- Each fragment is page offset for following:
  - User Space Data
  - TCP Header
  - UDP Header
  - Ethernet Header
- Your driver should loop through the fragments, mapping each for a DMA transfer and not forgetting the first fragment, which is pointed to by the skb directly.
 
```c
struct skb_frag_struct {
    struct page *page;
    __u16 page_offset;
    __u16 size;
}
```
- Non-Fragmented packets are transmitted as below:


```c
if (skb_shinfo(skb)->nr_frags == 0) {
    /* Just use skb->data and skb->len as usual */
}
```
- Fragmented packets are transmitted as below:
```c
if (skb_shinfo(skb)->nr_frags > 0) {
    /* Each fragment is page offset */
    /* For each fragment, map the page address to one Descriptor */
}
```

> `skb` holding the packet data should be freed after successful transmission by calling `dev_kfree_skb`. It should also be freed in case of packet drop due to any error conditions. 

