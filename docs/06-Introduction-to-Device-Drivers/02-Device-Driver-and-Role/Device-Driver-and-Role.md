---
id: Device-Driver-and-Role
title: Device Driver and Role
sidebar_label: Device Driver and Role
---

## What is a Device Driver

### Device

Device is a physical hardware that provides one or more computing functions within a computer system.

Typical hardware includes a `computer mouse`, `speakers`, `printer` and `microphone`

### Device driver

Device driver is a computer program that operates or controls a particular type of device.

Example: `Audio driver` controls the output to the speakers, providing functions like `play, pause, Volume UP and Volume DOWN`.

## Features of a Device driver

- Device Drivers provides abstraction between a hardware device and the applications or operating systems that use it
- Programmers can write higher-level application code independently of whatever specific hardware the end-user is using
- Device Drivers expose `well defined interfaces or APIs` for OS/Applications
- Device drivers support `portability of the applications across machines`.
- Device drivers support `portability of the applications across operating systems`.

## Types of Device Drivers

### Architecture-specific

- `Architecture-specific Driver` manages the device that is integrated into the processor architecture
- Examples include:
  - On-chip memory
  - Memory management units (MMUs)
  - Floating-point hardware

### Generic

- `A generic driver` manages hardware that is __located on the board__ and not integrated onto the master processor.
- Examples include: 
  - Board buses (I2C, PCI, PCMCIA, etc)
  - off-chip memory (controllers, level 2+ cache, Flash, etc.)
  - off-chip I/O (Ethernet, RS-232, display, mouse, etc.)