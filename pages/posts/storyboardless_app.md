---
title: Storyboardless iOS Apps 
date: 2022/5/17
description: The Difinitive Guide
tag: Swift, Xcode
author: Dalton
---

# Storyboardless iOS App

There are many complexities associated with Xcode projects. One that plagued me at the onset of my Swift and iOS development journey was the Storyboard. After I finally understood what storyboards do, I decided I preferred a "storyboardless" workflow. Programmatically developing views and transitions seemed like a better way for me to more deeply understand iOS development. 

I struggled greatly when removing the `Main.storyboard` file from my initial projects. I had no idea where to look when my builds failed. Recently, I found an excellent [guide](https://gist.github.com/Geri-Borbas/9f4fa0a9ab6552151bdf408729a4cd11) on how to properly remove all references to the `Main.storyboard` file within a new project. I'm adding the instructions here for quick reference. 

1. Remove `Main.storyboard` file from the bundle.
2. Remove `main` from *Target/General/Main Interface*
3. Remove `Main` from `Info.plist` at `Application Scene Manifest/Scene Configuration/Application Session Role/Default Configuration`.
4. Instantiate `window` with first view controller in `SceneDelegate`.

Replace this method:
```Swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    // Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.
    // If using a storyboard, the `window` property will automatically be initialized and attached to the scene.
    // This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

With this:
```Swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    if let windowScene = scene as? UIWindowScene {
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = ViewController()
        self.window = window
        window.makeKeyAndVisible()
    }
}
```