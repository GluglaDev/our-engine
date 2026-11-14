# OUR Engine

### Independent Web Rendering Engine

**A different approach to the web. Built with Rust.**

OUR Engine is an experimental project exploring an independent approach to web-content rendering. The long-term direction is a rendering engine implemented in Rust without embedding Chromium, WebKit, Gecko or a WebView.

> **Project status: experimental.** The current prototype is an early-stage renderer. It does not provide full modern-web compatibility and is not a replacement for established browsers.

## What this repository contains

This is the public-facing project repository. It hosts:

- the OUR Engine project website;
- public development roadmap and project information;
- selected documentation and supporting resources.

The proprietary rendering core is **not** included in this repository. Public availability of this website and its documentation does not grant rights to unpublished engine code.

## Current prototype

The separate experimental Rust prototype currently explores:

- HTTP/HTTPS resource fetching;
- HTML parsing with `html5ever`;
- a simplified DOM representation;
- basic, custom CSS parsing and layout;
- initial CSS box-model calculations;
- text rasterization with `fontdue`;
- window and framebuffer drawing with `minifb`.

These are limited foundations, not claims of standards compliance. CSS coverage, layout behavior, text handling and compatibility remain incomplete and are being tested incrementally.

## Technology

| Area | Current technology |
|---|---|
| Implementation language | Rust |
| HTML parser | `html5ever` |
| DOM representation | Simplified project-specific representation |
| CSS and layout | Experimental custom implementation |
| Text rasterization | `fontdue` |
| Window and framebuffer | `minifb` |
| HTTP/HTTPS | `ureq` |

Supporting libraries are not embedded browser engines.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the current development direction. The roadmap is directional, not a delivery schedule or a promise of compatibility.

## Project website

The static project website is published with GitHub Pages:

- [OUR Engine website](https://glugladev.github.io/our-engine/)

The website becomes available after GitHub Pages is enabled and its first deployment completes.

## Project model and licensing

OUR Engine follows a partially open development model. Selected documentation, website resources and future supporting tools may be published publicly. The core renderer and selected components may remain proprietary.

Each published code component will receive explicit licensing terms before contributions or redistribution are invited. Unless a file or directory says otherwise, this repository currently has no open-source license; do not assume that public visibility grants reuse rights.

## Support

Voluntary sponsorship options will be announced when the project has active and verified receiving accounts. No payment is collected by this repository or its website at this stage.

## Contributing and contact

The project is in an early stage. For now, use GitHub Issues for focused bug reports or suggestions. Please do not submit confidential information, credentials, private keys or security-sensitive details in public issues.

---

**OUR Engine — Independent. Experimental. Built with Rust.**
