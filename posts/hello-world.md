---
title: Hello, world!
date: 2026-04-15
description: A first note — why this blog exists and what to expect.
tags:
  - notes
---

This is the first post on a new little corner of the site. Expect occasional
notes on engineering, databases, and the odd photograph.

![A frame from Kolkata — setting the tone for this blog.](/static/images/blog/hello-world/desk.jpg)

Images live under `/static/images/blog/<post-slug>/` and are referenced with an
absolute path. The `static/` directory is passed through by Eleventy unchanged
and cached aggressively by Netlify (`max-age=31536000, immutable`), so images
load fast on repeat visits without any build-time processing.

## Why now

I've wanted a writing space for a while — somewhere lower-stakes than LinkedIn
and more permanent than a thread. The setup is deliberately boring: Markdown
files, a static site generator, and Netlify.

## A bit of code

Here's a Go snippet to make sure syntax highlighting is wired up:

```go
package main

import "fmt"

func main() {
    fmt.Println("hello, world")
}
```

More soon.
