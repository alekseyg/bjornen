---
title: E Doxstorage
description: Online document storage tool in the vein of Dropbox or Box.com, with a separate WordPress marketing site.
technologies:
  - Ruby on Rails
  - MySQL
  - jQuery
  - Adobe Flash
  - Authorize.Net
  - WordPress
year: 2010
desktopImage: ../../assets/portfolio/e-doxstorage/desktop-1.png
additionalDesktopImages:
  - ../../assets/portfolio/e-doxstorage/desktop-2.png
  - ../../assets/portfolio/e-doxstorage/desktop-3.png
---

An online document storage/viewing tool in the vein of Dropbox or Box.com. The app was built on Ruby on Rails and MySQL with payments running through Authorize.Net, while the marketing site was built on WordPress. Multi-file uploads predated HTML5's support for it, so I wired up an Adobe Flash uploader to handle selecting and uploading batches of files at once. On the viewing side, we pulled in a mix of tools to render PDFs and other formats that browsers couldn't natively display, plus server-side processing to generate previews and run OCR so users could search across their documents. The JavaScript leaned on jQuery along with a few of my own polyfills — including [Fiks.html5](/blog/emulating-html-5-support-in-current-browsers/), and both sites shared a custom CSS theme written from scratch.
