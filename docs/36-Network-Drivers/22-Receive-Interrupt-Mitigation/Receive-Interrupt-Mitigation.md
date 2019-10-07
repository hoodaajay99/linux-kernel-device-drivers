---
id: Receive-Interrupt-Mitigation
title: Receive Interrupt Mitigation and NAPI
sidebar_label: Receive Interrupt Mitigation
---

## NAPI - Block Diagram 1

![alt](../../assets/36-22-Receive-Interrupt-Mitigation-napi-01.png)


## NAPI - Block Diagram 2

![alt](../../assets/36-22-Receive-Interrupt-Mitigation-napi-02.png)


## NAPI - Block Diagram 3

![alt](../../assets/36-22-Receive-Interrupt-Mitigation-napi-03.png)

## Problem with Interrupt based Packet Reception 
- The processor is interrupted for every packet received by your interface. 
- High-bandwidth interfaces, however, can receive thousands of packets per second. 
- With that sort of interrupt load, the overall performance of the system can suffer.

## Solution - NAPI (Interrupt + Polling)
- PHY receives the packet from medium.
- As the ethernet frame (byte stream) is being received by PHY device, it pushes the byte stream to MAC Device (Rx0 .. RxN Data + Clock lines)
- 

