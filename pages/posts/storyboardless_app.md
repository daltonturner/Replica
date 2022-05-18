---
title: Storyboardless iOS Apps 
date: 2022/5/17
description: The Difinitive Guide
tag: Swift, Xcode
author: Dalton
---

# Storyboardless iOS App

There are many complexities associated with Xcode projects. One that plagued me at the onset of my Swift and iOS development journey was the Storyboard. After I finally understood what storyboards do, I decided I preferred a "storyboardless" workflow. Programmatically developing views and transitions seemed like a better way for me to more deeply understand iOS development. 

I struggled greatly when removing the `Main.storyboard` file from my initial projects. I had no idea where to look when my builds failed. Recently, I found an excellent guide on how to properly remove all references to the `Main.storyboard` file within a new project. I'm embedding it within this post for quick access.

<script src="https://gist.github.com/daltonturner/6c9c40e862943e52f3bcea3f9a96d719.js"></script>