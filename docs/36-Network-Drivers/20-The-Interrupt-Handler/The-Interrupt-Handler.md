---
id: The-Interrupt-Handler
title: The Interrupt Handler
sidebar_label: The Interrupt Handler
---

## Interrupts Events

Two main events are handled with Interrupts:
- New packet has arrived
- Transmission of an outgoing packet is complete

Other events:
- signal errors - tx FIFO Overflow, Rx FIFO overflow etc
- link status changes - Link up, Link Down

## Status Register
- Interrupt status register tells more information about the interrupt event


dev_kfree_skb(struct sk_buff *skb);
dev_kfree_skb_irq(struct sk_buff *skb);
dev_kfree_skb_any(struct sk_buff *skb);