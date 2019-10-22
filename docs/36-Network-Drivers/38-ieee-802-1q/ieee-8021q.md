---
id: ieee-802-1q
title: IEEE 8021q - VLAN
sidebar_label: IEEE 8021q VLAN
---
## IEEE 802.1Q
-  Networking standard that supports virtual LANs (VLANs) on an IEEE 802.3 Ethernet network.
-  The standard defines:
   -  VLAN tagging for Ethernet frames 
   -  Procedures on bridges and switches in handling such frames.
   -  Provisions for a quality-of-service prioritization defined in IEEE 802.1p)

## Frame Format - 802.1Q tag in an Ethernet frame

![alt](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ethernet_802.1Q_Insert.svg/1992px-Ethernet_802.1Q_Insert.svg.png)

### Description

- 802.1Q adds a 32-bit field between the source MAC address and the EtherType fields of the original frame.
- minimum frame size is extended from 64 to 68 bytes
- maximum frame size is extended from 1,518 bytes to 1,522 bytes.

| Fields | bytes | UnTagged | 8021q Tagged |
|:-:|:-:|:-:|:-:|
| Preamble | 8 Bytes | 7 Bytes + 1 Byte SFD (Start Frame Delimiter) | 7 Bytes + 1 Byte SFD (Start Frame Delimiter) |
| Destinatio MAC | 6 Bytes | DA | DA |
| Source MAC | 6 Bytes | SA | SA |
| 8021q VLAN Tag | 2 Bytes | NA | 8021q VLAN Tag | 
| EtherType | 1 Bytes | IP, FrameRelay etc | IP, FrameRelay etc |
| Payload | Variable Size | Payload | Payload |
| CRC/FCS | 4 Bytes | Checksum | Checksum |
| IFG | 12 Bytes | Inter Frame Gap | Inter Frame Gap |

### 802.1Q tag format

| Field | Size | Description | 
|:-:|:-:|:-:|
| TPID | 16 Bits | Tag Protocol Identifier (0x8100) |
| TCI | 16 Bits | Tag Control Information (PCP, DEI, VID) |

| Field | Size | Description | 
|:-:|:-:|:-:|
| PCP | 3 Bits | Priority code point: Refers to IEEE 802.1p class of service |
| DEI | 1 Bit  | Drop eligible indicator: frames eligible to be dropped in the presence of congestion |
| VID | 12 Bit  | VLAN identifier: 12 bit VID (4,094 VLANs). 0x000 and 0xFFF are reserved.  |


> Because inserting the VLAN tag changes the frame, 802.1Q encapsulation forces a recalculation of the original frame check sequence field in the Ethernet trailer.

## Double tagging

![alt](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/TCPIP_802.1ad_DoubleTag.svg/1992px-TCPIP_802.1ad_DoubleTag.svg.png)

### Description
- IEEE 802.1ad introduced the concept of double tagging
- S-TAG (service tag) comes first, followed by the inner C-TAG (customer tag)
- Allowing ISP to use VLANs internally while mixing traffic from clients that are already VLAN tagged.
- 802.1ad specifies a TPID of 0x88a8 for service-provider outer S-TAG.

## References

[https://en.wikipedia.org/wiki/IEEE_802.1Q](https://en.wikipedia.org/wiki/IEEE_802.1Q)

