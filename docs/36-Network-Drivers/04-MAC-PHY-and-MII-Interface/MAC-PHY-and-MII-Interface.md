---
id: MAC-PHY-and-MII-Interface
title: MAC PHY and MII Interface
sidebar_label: MAC PHY and MII Interface
---

## Ethernet Interface Block Diagram

![Ethernet Interface Block Diagram](../../assets/36-ethernet-interface-daigram2.png)

## Ethernet MAC Block Diagram

![Network Models](../../assets/36-ethernet-mac-block-diagram.jpg)


## MAC Controller aka Ethernet Controller

An `Ethernet controller` or `Ethernet Media Access Controller` is hardware responsible for interaction with the wired, optical or wireless transmission medium. Transmission medium is implemented by the PHY Device.

MAC controller is majorly implemented in Hardware.

> In Software The MAC sublayer and the logical link control (LLC) sublayer together make up the data link layer.

### Functions of Ethernet MAC
- Receive/transmit normal frames
- half-duplex retransmission and backoff functions
- append/check FCS
- interframe gap enforcement
- discard malformed frames
- prepend(tx)/remove(rx) preamble
- SFD (start frame delimiter), and padding
- half-duplex compatibility: append(tx)/remove(rx) MAC address

## Ethernet PHY

![ethernet-phy](../../assets/36-ethernet-phy.png)

- Physical layer or layer 1 is the first and lowest layer
- Implemented as Phy Device (Hardware)
- Also called `transreceiver device`
- Can also connect to optionally to optical fibre transreceiver
- Generally needs external clock input for its functioning
- Status LEDs over GPIOs
- Implements MII, RMII, GMII, RGMII interfaces towards MAC Controller
- Defines the means of transmitting raw bits over medium

### Major Functions of PHY Layer
- Autonegotiation
  - Bit Rate
  - Duplex Mode
- Bitstream Tx/Rx from MAC
- Modulation
- FEC - Forward error correction
- Carrier sense and collision detection
- Bit-by-bit or symbol-by-symbol delivery over PHY Medium
- Standardized interface to a physical transmission medium
- Specification for connectors and cables
- Electrical specification of transmission line signal level and impedance
- Bit synchronization in synchronous serial communication
- Start-stop signalling and flow control in asynchronous serial communication
- Circuit switching
- Multiplexing
- Equalization filtering, training sequences, pulse shaping and other signal processing of physical signals

### Ethernet physical layer Include
- 10BASE-T 
- 10BASE2 
- 10BASE5 
- 100BASE-TX 
- 100BASE-FX 
- 100BASE-T 
- 1000BASE-T 
- 1000BASE-SX

## Ethernet Driver

Ethernet drivers is a software programs that provide hardware-software interaction between the operating system and its local area network (LAN) port

### Ethernet Driver Functions
- It transmits and receives the ethernet frames
- Impements Ring Buffers
  - Tx Ring Buffers
  - Rx Ring Buffers
- Controls the DMA Operation between MAC and Ring Buffers
- Receives Rx Pacakets from Rx Ring Buffers.
- Delivers Rx packets to higher layer (Linux Bridge)
- Receives Tx packets from higher layer (Linux Bridge)
- Delivers Tx packets to Tx Ring Buffers
- It controls the MAC sublayer (hardware) over IO Interface
- It controls the PHY sublayer (hardware) Over MDIO Interface
- Collects MAC and PHY stats and status
- Exposes MAC and PHY stats and status to the application

## Interfaces between a MAC and a PHY
- Media Independent Interfaces are implemented between MAC and a PHY
- Ethernet industry standard defined in IEEE 802.3
- Consists of `data interface` and `management interface` between a MAC and a PHY
- Data interface consists of 
  - Transmitter Channel
  - Receiver Channel
- Each channel has its own clock, data, and control signals
- With the management interface, upper layers can monitor and control the PHY

## MII (Media Independent Interface)
- Standard interface, standardized by IEEE 802.3u 
- Connect a Fast Ethernet (i.e., 100 Mbit/s) (MAC) block to a PHY chip.

> **`Media independent:`** Different media (twisted pair, fiber optic etc) can be used without redesigning or replacing the MAC hardware

### Management Data Input/Output (MDIO)
-  Two wire serial bus interface, subset of the MII
-  Used to transfer management information between MAC and PHY
-  PHY sets initial settings via autonegotiation
-  MDIO is used to override the default PHY settings


## RMII (Reduced media-independent interface)
## GMII (gigabit media-independent interface)
## RGMII (reduced gigabit media-independent interface)
## SGMII (serial gigabit media-independent interface)
## HSGMII (high serial gigabit media-independent interface)
## QSGMII (quad serial gigabit media-independent interface)
## XGMII (10-gigabit media-independent interface)


