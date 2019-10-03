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
- Standard interface, standardized by IEEE 802.3 
- Connect a MAC block to a PHY chip.
- Used with 10Mbps or 100 Mbps data rate MACs and PHY Devices
- Total 18 IO Signals are defined (7 Tx, 9 Rx and 2 MDIO/MDC)

> **`Media independent:`** Different media (twisted pair, fiber optic etc) can be used without redesigning or replacing the MAC hardware

### Management Data Input/Output (MDIO)
-  Synchronous serial data interface similar to I²C
-  MDC and MDIO can be shared among multiple PHYs
-  Used to transfer management information between MAC and PHY
-  PHY sets initial settings via autonegotiation
-  MDIO is used to override the default PHY settings

### MII set of registers

| Register  | Description |
|:-:|:-:|
| Basic Mode Configuration (#0)     | Mode? |
| Status Word (#1)                  | PHY Status |
| PHY Identification (#2, #3)       | Unique ID assigned to a PHY |
| Ability Advertisement (#4)        | Ability to be advertised during negotiation |
| Link Partner Ability (#5)         | Peer Ability after negotiation |
| Auto Negotiation Expansion (#6)   | Peer Ability after negotiation |

### MII Status Word and Descrition

| Status Bit value | Descrition |
|:-:|:-:|
| 0x7800    | Capable of 10/100 HD/FD (most common) |
| 0x0020    | Autonegotiation complete |
| 0x0010    | Remote fault |
| 0x0004    | Link established |

### MII Transmitter signals (7 Signals)

| Signal name	 | Descrition | Direction |
|:-:|:-:|:-:|
| TX_CLK            | 25 MHz: 100 Mbit/s, 2.5 MHz: 10 Mbit/s | PHY to MAC |
| TXD0 ... TXD3     | Transmit data bits        | MAC to PHY |
| TX_EN             | 1: transmission, 0: idle  | MAC to PHY |
| TX_ER             | Transmit error            | MAC to PHY |

- The remaining transmit signals are driven by the MAC synchronously on the rising edge of TX_CLK. This arrangement allows the MAC to operate without having to be aware of the link speed. 

### MII Transmitter signals (9 Signals)

| Signal name	 | Descrition | Direction |
|:-:|:-:|:-:|
| RX_CLK            | 25 MHz: 100 Mbit/s, 2.5 MHz: 10 Mbit/s | PHY to MAC |
| RXD0 ... RXD3     | Receive data bits         | PHY to MAC |
| RX_DV             | Receive Data Valid        | PHY to MAC |
| RX_ER             | Receive error             | PHY to MAC |
| CRS               | Carrier sense             | PHY to MAC |
| COL               | Collision detect          | PHY to MAC |

### MII Limitations (Too Many IO Lines)
- Requires 18 signals
- only two (MDIO and MDC) can be shared
- eight-port switch using MII would need 8 × 16 + 2 = 130 signals.

## RMII (Reduced media-independent interface)
- Reduce the number of signals required to connect a PHY to a MAC.
- Reduces cost and complexity
- Four things were changed compared to the MII standard
  - TXCLK and RXCLK are replaced by a single clock. This clock is an input to the PHY rather than an output, which allows the clock signal to be shared among all PHYs.
  - The clock frequency is doubled from 25 MHz to 50 MHz, while the data paths are narrowed from 4 bits to 2 bits.
  - RXDV and CRS signals are multiplexed into one signal.
  - The COL signal is removed.


### RMII Signals (10 Signals)

| Signal name	 | Descrition | Direction |
|:-:|:-:|:-:|
| REF_CLK       | Continuous 50 MHz                     | MAC to PHY or External   |
| | | |
| TXD0, TXD1    | Transmit data bits                    | MAC to PHY    |
| TX_EN         | 1: clock data on TXD0 and TXD1        | MAC to PHY    |
| | | |
| RXD0, RXD1    | Receive data bits                     | PHY to MAC    |
| CRS_DV        | Multiplexed on alternate clock cycles | PHY to MAC    |
| RX_ER         | Receive error                         | PHY to MAC    |
| | | |
| MDIO          | Management data                       | Bidirectional |
| MDC           | Management Clock                      | MAC to PHY    |

- MDC and MDIO can be shared among multiple PHYs
- REF_CLK derives both Tx and Rx signals
- On `multiport devices`, MDIO, MDC, and REF_CLK may be shared
- The `REF_CLK operates at 50 MHz` in both 100 Mbit/s mode and 10 Mbit/s mode
- The transmitting side (PHY or MAC) must keep all signals valid for 10 clock cycles in `10 Mbit/s mode`.
- The receiver (PHY or MAC) samples the input signals only every ten cycles in 10 Mbit/s mode.
- Signals support 5 V or 3.3 V logic (as per chip datasheets)
- Min Rise time, hold time etc supported as per chip datasheets. 

### MDIO/MDC interface
- full or half duplex mode (Get and Set)
- 10 or 100 Mbit/s mode (Get and Set)

## GMII (gigabit media-independent interface)
- speeds up to 1000 Mbit/s
- data interface clocked at 125 MHz
- separate eight-bit data paths for receive and transmit
- backwards compatible with the media-independent interface (MII) specification
- It can also operate on fall-back speeds of 10 or 100 Mbit/s
- Total 24 Pins

### Transmitter signals

| Signal name	 | Description | Direction |
|:-:|:-:|:-:|
| GTXCLK	    | Clock signal for gigabit TX signals (125 MHz) | MAC to PHY    |
| TXCLK 	    | Clock signal for 10/100 Mbit/s signals | PHY to MAC       |
| TXD[7..0]	    | Data to be transmitted                   |    MAC to PHY    |
| TXEN 	        | Transmitter enable |  MAC to PHY    |
| TXER          | Transmitter error (used to corrupt a packet) |MAC to PHY    |

### Receiver signals

| Signal name	 | Description | Direction |
|:-:|:-:|:-:|
| RXCLK     | Received clock signal (recovered from incoming received data) | PHY to MAC |
| RXD[7..0] | Received data | PHY to MAC      |
| RXDV      | Signifies data received is valid |    PHY to MAC       |
| RXER      | Signifies data received has errors |  PHY to MAC       |
| COL       | Collision detect (half-duplex connections only) | PHY to MAC       |
| CS        | Carrier sense (half-duplex connections only) |    PHY to MAC       |

- Only a Single receiver clock is used

### Management signals

| Signal name	 | Description | Direction |
|:-:|:-:|:-:|
| MDIO          | Management data                       | Bidirectional |
| MDC           | Management Clock                      | MAC to PHY    |

- The management interface controls the behavior of the PHY. 
- There are 32 addresses, each containing 16 bits. 
- The first 16 addresses have a defined usage
- Others are device specific
- These registers can be used to configure the device (say "only gigabit, full duplex", or "only full duplex") or can be used to determine the current operating mode.

## RGMII (reduced gigabit media-independent interface)

- RGMII uses half the number of data pins as used in the GMII interface
- Data is clocked on rising and falling edges for 1000 Mbit/s
- Data is clocked on rising edges only for 10/100 Mbit/s.
- Carrier-sense and collision-indication are removed
- Only 12 pins
- Clock signal always provided by MAC for 10/100/1000 Mbps operation
- The RX_CTL signal carries RXDV (data valid) on the rising edge, and (RXDV xor RXER) on the falling edge
- The TX_CTL signal likewise carries TXEN on rising edge and (TXEN xor TXER) on the falling edge.

### RGMII signals

| Signal name	 | Description | Direction |
|:-:|:-:|:-:|
| TXC       | Clock signal                                        | MAC to PHY |
| TXD[3..0] | Data to be transmitted                              | MAC to PHY |
| TX_CTL    | Multiplexing: Tx enable and Tx error                | MAC to PHY |
| RXC       | Received clock signal (recovered from incoming received data)| PHY to MAC |
| RXD[3..0]	| Received data	                                      | PHY to MAC |
| RX_CTL    | Multiplexing: Rx Data valid and Rx error            | PHY to MAC |
| MDC       | Management interface clock                          | MAC to PHY |
| MDIO      | Management interface I/O	                          | Bidirectional |



## SGMII (serial gigabit media-independent interface)

The serial gigabit media-independent interface (SGMII) is a variant of MII, a standard interface used to connect an Ethernet MAC block to a PHY. It is used for Gigabit Ethernet but can also carry 10/100 Mbit/s Ethernet.

- Also called SerDes
- low-power and low pin-count serial 8b/10b-coded interface
- 625 MHz clock frequency DDR for TX and RX data and TX and RX clocks
- Speeds of 10/100/1000 Mbit/s Ethernet

## HSGMII (high serial gigabit media-independent interface)
- bandwidth of 2.5Gbps

## QSGMII (quad serial gigabit media-independent interface)
- Combining four SGMII lines into a 5 Gbit/s interface
- uses low-voltage differential signaling (LVDS) for the TX and RX data, and
- Uses a single LVDS clock signal.
- QSGMII uses significantly fewer signal lines than four SGMII busses

## XGMII (10-gigabit media-independent interface)
- full duplex 10 Gigabit Ethernet (10GbE) ports
- composed from two 32-bit datapaths (Rx & Tx) and 
- two four-bit control flows (Rxc and Txc)
- operating at 156.25 MHz DDR (312.5 MT/s).
- Typically used for on-chip connections
- in chip-to-chip usage mostly replaced by XAUI.


