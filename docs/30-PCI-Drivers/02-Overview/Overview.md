---
id: Overview
title: Overview
sidebar_label: Overview
---

## Peripheral Component Interconnect (PCI)

Peripheral Component Interconnect (PCI) is an `interconnection system` between a processor and attached PCI devices.

- Part of PCI Specification Standard
- 

### PCI Interconnect Block Diagram

![PCI Devices](../../assets/30-pci-interface-block-diagram.png)

### PCI Local Bus

- The `PCI local bus` is a high-performance bus designed for high-speed data transfer
- It interconnects Peripheral Devices with host processor and main memory
- Provides mapping and access between "Host Address Domain" and "PCI Address Domain"

### PCI Host Bridge
- Connects the host processor, main memory, and the PCI bus itself
- Allows access to Host Memory from PCI Peripheral Devices (eg. for DMA operation)

### PCI Bus Bridge

- Connects additional PCI Buses for more PCI devices
- Other bus bridges, such as SCSI or USB, can be connected via PCI Bus Bridge

> Every PCI device has a unique `vendor ID` and `device ID`. Multiple devices of the same kind are further identified by their unique device numbers on the bus where they reside.


## PCI Address Domain





## The PCI Interface/Specification

PCI Interface is a set of standardised Specification