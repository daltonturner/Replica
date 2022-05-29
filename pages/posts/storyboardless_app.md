---
title: Removing Storyboards for Programmatic Development 
date: 2022/5/17
description: The Difinitive Guide
tag: Swift, Xcode
author: Dalton
---

# Storyboardless Apps

There are many complexities associated with Xcode projects. One that plagued me at the onset of my Swift and iOS development journey was the Storyboard. After I finally understood what storyboards do, I decided I preferred a "storyboardless" workflow. Programmatically developing views and transitions seemed like a better way for me to more deeply understand iOS development. 

I struggled when removing the `Main.storyboard` file from my initial projects. I had no idea where to look when my builds failed. Recently, I found an excellent [guide](https://pavankataria.medium.com/how-to-programmatically-setup-your-app-with-scene-delegate-in-swift-b0aab1949b) on how to properly remove all references to the `Main.storyboard` file within a new project. I'm adding the instructions here for quick reference. 

1. Remove `Main.storyboard` file from the bundle.
2. Remove `main` from *Target/General/Main Interface*
3. Remove `Main` from `Info.plist` at `Application Scene Manifest/Scene Configuration/Application Session Role/Default Configuration`.
4. Instantiate `window` with first view controller in `SceneDelegate`.

Replace this method:
```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    // Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.
    // If using a storyboard, the `window` property will automatically be initialized and attached to the scene.
    // This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).
    guard let _ = (scene as? UIWindowScene) else { return }
}
```

With this:
```swift
func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    /// 1. Capture the scene
    guard let windowScene = (scene as? UIWindowScene) else { return }

    /// 2. Create a new UIWindow using the windowScene constructor which takes in a window scene.
    let window = UIWindow(windowScene: windowScene)

    /// 3. Create a view hierarchy programmatically
    let viewController = ArticleListViewController()
    let navigation = UINavigationController(rootViewController: viewController)

    /// 4. Set the root view controller of the window with your view controller
    window.rootViewController = navigation

    /// 5. Set the window and call makeKeyAndVisible()
    self.window = window
    window.makeKeyAndVisible()
}
```
