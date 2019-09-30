---
id: Loadable-Modules
title: Loadable Modules
sidebar_label: Loadable Modules
---

## Linux Kernel Module

- Linux Kernel is monolithic kernel
- Linux Kernel functionality can be extended at runtime
- `Piece of code` that can be `added or removed` from kernel is called a module

> `Linux Kernel Modules (LKM)` are also called `Kernel Modules` or `Loadable Kernel Modules` 

## Programs used with Linux Kernel Module

### "insmod" Program

_insmod_ is a `program to dynamically insert/link` Linux Kernel Modules into the Linux Kernel.

When inserted, a linux kernel module becomes part of the kernel and its functionality can be used.

### "rmmod" Program

_rmmod_ is a `program to dynamically remove/un-link` Linux Kernel Modules from the Linux Kernel.

When removed, a linux lernel module gets un-linked from the kernel and its functionality can no longer be used.

