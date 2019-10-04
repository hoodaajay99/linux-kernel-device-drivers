---
id: Packet-Reception
title: Packet Reception
sidebar_label: Packet Reception
---

## Packet Reception

- `Rx Ring Buffers` are used for Data reception from media
- `sk_buff` is allocated and associated with the `Rx Descriptor`
- `DMA Engine` receives the packets and puts into the `data pointer of Rx Descriptor`
- Rx Interrupt is raised
- Interrupt handler detached the `sk_buff` from `Rx Descriptor`.
- Interrupt handler allocated another `sk_buff` and associated with `Rx Descriptor` for receving more packets.
- Interrupt handler schedule a `Bottom Half` context to process the data
- `netif_rx(skb)` is called to deliver the packet to upper layers.
- Protocol and Checksumming information is to be put into skb before deliver the packet to upper layers.

## Two Methods of Packet Reception
- Interrupt Driven
- NAPI - New API Interface (Interrupt + Polling)


