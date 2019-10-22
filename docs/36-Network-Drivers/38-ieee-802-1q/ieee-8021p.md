---
id: ieee-802-1p
title: IEEE 8021p - VLAN Tagging and Traffic Prioritization 
sidebar_label: IEEE 8021p Prioritization
---
## IEEE 802.1p
- Added Quality of service (QoS) at the media access control (MAC) level
- IEEE 802.1Q-2014 is the latest standard 
- The QoS technique is also known as class of service (CoS)

## Class of service (CoS)

Class of service (CoS), is a 3-bit field called the Priority Code Point (PCP) within an Ethernet frame header when using VLAN tagged frames as defined by IEEE 802.1Q.

It specifies a priority value of between 0 and 7 inclusive that can be used by QoS disciplines to differentiate traffic.

PCP value  |  Priority  |  Acronym  |  Traffic types
|:-:|:-:|:-:|:-:|
1  |  0 (lowest)  |  BK  |  Background
0  |  1 (default)  |  BE  |  Best effort
2  |  2  |  EE  |  Excellent effort
3  |  3  |  CA  |  Critical applications
4  |  4  |  VI  |  Video, < 100 ms latency and jitter
5  |  5  |  VO  |  Voice, < 10 ms latency and jitter
6  |  6  |  IC  |  Internetwork control
7  |  7 (highest)  |  NC  |  Network control

## Netrowrk QoS Implementation

### Traffic Marking
- Process of putting information inside the traffic
- Example: VLAN tagging at the input of the Network, adding Class of service (CoS) at the PCP field of a VLAN Tag.
- Marked traffic at the input if the Network is unmarked ie VLAN tag is removed.

### Traffic Classification
- The process of Classifying traffic as high/low priority based on the CoS inside VLAN tag and putting into specific Queues at the router/Bridge Level.
- Example: 
  - CoS values 6,7 may be classified as High Priority and put into a High Priority Queue. 
  - CoS values 0,1 may be classified as Low Priority and put into a Low Priority Queue. 

### Traffic Priotization
- After Classification, the process of handling the high priority traffic before the lower priority tarffic.
- Example: High pririty Queues (with CoS 6,7 etc) will be handled first.

### Traffic Shaping
- Classification and Priotization may chnage the properties of the traffic such making the constant bitrate traffic as bursty. 
- Shaping is the process of making the traffic Smooth or in another sense shape of traffic for its intended application.

## References

[https://en.wikipedia.org/wiki/IEEE_P802.1p](https://en.wikipedia.org/wiki/IEEE_P802.1p)

