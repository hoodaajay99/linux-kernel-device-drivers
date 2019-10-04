---
id: Writing-Network-Driver
title: Writing Network Driver
sidebar_label: Writing Network Driver
---

## Network drivers
- Init the data structures
- Init Ring Buffers
- 
- Register Network Devices
- Receive packets asunchronously
- Transmit Packets
- Control MAC and PHY behavior
- Perform Administrative tasks
  - Setting addresses
  - Modifying transmission parameters
  - Maintaining traffic statistics
  - Maintaining error statistics

## Network drivers vs Block/Character Drivers
- /dev/xyz file don't exist for Network drivers
- Normal `read`, `write` operations don't make sense for Network drivers

