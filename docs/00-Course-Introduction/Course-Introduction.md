---
id: course-introduction
title: Course Introduction
sidebar_label: Course Introduction
---

## Introduction to Linux
- Linux Definition
- What is Operating System
- Unix and its History
- History of Linux
- Benefits of Linux
- Differences Between Unix and Linux
- The Free Software Foundation
- GNU GPL License

## Linux Distributions
- What is a Linux Distribution
- Distributions Overview
- Choosing a Linux Distribution

## Introduction to Device Drivers
- Device Driver and Role
- Linux Kernel Overview
- Loadable Modules
- Classes of Devices and Modules
- Security Issues
- Linux Kernel Versions

## Building and Running Modules
- Setting Up Your System
- Using Docker
- Linux Kernel Modules LKM
- Hello World Module
- Kernel Modules Versus Applications
- Compiling Modules
- Loading and Unloading Modules
- The Kernel Symbol Table

## Modules In Detail
- Module Loading and Initialization
- Module Unloading and Cleanup
- Module Parameters
- Probing Modules

## Character Drivers
- Overview
- Major and Minor Numbers
- Char Device Registration
- File Operations
- Open and Close Operations
- Read and Write Operations

## Debugging in Linux Kernel
- Debug flags in Linux Kernel
- Debugging using printk
- Using the proc Filesystem
- The ioctl Method
- Watching Application Behavior
- System Faults
- Using gdb
- The kdb Kernel Debugger
- Linux Trace Toolkit

## Concurrency and RaceConditions
- Symmetric multiprocessing aka SMP systems
- Concurrency and Its Management
- Semaphores and Mutexes
- Completions
- Spinlocks
- Atomic Variables
- Bit Operations
- seqlocks
- Read-Copy-Update

## Advanced Char Driver Operations
- ioctl
- Blocking Input Output
- Advanced Sleeping
- poll and select
- Interaction with read and write
- Asynchronous Notification
- Seeking a Device
- Access Control on a Device File

## Time, Delays and Deferred Work
- Measuring Time Lapses
- Knowing the Current Time
- Delaying Execution
- Kernel Timers
- Tasklets
- Workqueues

## Memory Allocation
- Overview
- kmalloc and kfree 
- Lookaside Caches
- Memory Pools
- get_free_page and Friends
- vmalloc and Friends
- Per-CPU Variables
- Obtaining Large Buffers

## Communicating with Hardware
- IO Ports and IO Memory
- Using IO Ports
- Using IO Memory

## Interrupt Handling
- Interrupt Overview
- Installing an Interrupt Handler
- Implementing a Handler
- Enabling and Disabling Interrupts
- Top and Bottom Halves
- Interrupt Sharing
- Interrupt Driven IO

## Data Types in the Kernel
- Standard C Types
- Interface Specific Types
- Portability Issues
- Linked Lists

## PCI Drivers
- Overview
- The PCI Interface
- Boot Time Configuration
- PCI Driver
- PCI Probing
- Accessing PCI Configuration Space
- Accessing the IO and Memory Spaces
- PCI Interrupts

## The Linux Device Model
- Overview
- Kobjects Ksets and Subsystems
- Low-Level Sysfs Operations
- Hotplug Event Generation
- Buses Devices and Drivers
- Device Classes
- Putting It All Together
- Hotplug and Dynamic Devices

## Memory Mappingand DMA
- Overview
- Memory Management in Linux
- Page Tables
- The Process Memory Map
- The mmap Device Operation
- Performing Direct IO
- Direct Memory Access
- The Generic DMA Layer

## Network Drivers
- Overview
- MAC PHY and MII Interface 
- Writing Network Driver
- Connecting to the Kernel
- The net_device Structure in Detail
- Opening and Closing
- Packet Transmission
- Scatter Gather IO
- Packet Reception
- The Interrupt Handler
- Receive Interrupt Mitigation
- Changes in Link State
- The Socket Buffers
- MAC Address Resolution
- Custom ioctl Commands
- Network Statistics
- Multicast Traffic
- Network Tools

## Conclusion
- References
- Further Reading