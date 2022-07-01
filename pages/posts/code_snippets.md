---
title: Code Snippets In Xcode
date: 2022/6/22
description: Improve development efficency
tag: Swift, Xcode
author: Dalton
---

# Code Snippets In Xcode

I recently learned about a cool feature in Xcode — Code Snippets. These snippets work in much the same way a [GitHub Gist](https://gist.github.com/discover) does. It allows you to write some boilerplate code and save it in your instance of Xcode for reuse later. It’s a straightforward concept that can be a powerful time saving tool. 

Here’s how to create one: 

1. Type out the code you want to turn into a snippet
2. Select the code and right click 
3. Select “Create Code Snippet”
4. Follow the instructions presented by Xcode
5. Save the snippet

The next time you want to use the snippet in your development process, you can click on the plus sign in the Xcode IDE window and search for your snippet by name. If you assign a completion when creating a code snippet, you can take advantage of Xcode's autocompletion by simply typing the completion name in the editor window. Finally, you can also add placeholder tokens in your snippets by placing the placeholder name in between `<#` and `#>` (i.e. `<#name#>`). 

In learning about this concept, I did some research and linked a couple of useful blog posts below. 

1. [How to create a code snippet in Xcode](https://sarunw.com/posts/how-to-create-code-snippets-in-xcode/#what-is-code-snippet%3F)
2. [Helpful iOS and Xcode Code Snippets](https://betterprogramming.pub/helpful-code-snippets-for-ios-21aa5ef894de)

Additionally, I’m adding some of my favorite snippets to this post!

## Snippets 

Creating a Storyboardless application in Xcode is something I’ve posted about before (link). Naturally, this snippet for a Storyboardless AppDelegate made a lot of sense to save in my instance of Xcode: 
```swift
var window: UIWindow?

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
	window = UIWindow(frame: UIScreen.main.bounds)
	window?.makeKeyAndVisible()
	window?.backgroundColor = .systemBackground
	window?.rootViewController = ViewController()

	return true
}
```

Boilerplate definitions for UIKit Views are always a hassle to write out, so here’s a snippet for that: 
```swift
import Foundation
import UIKit

class NewView: UIView {
	override init(frame: CGRect) {
		super.init(frame: frame)
		style()
		layout()
	}

	required init?(coder: NSCoder) {
		fatalError(“init(coder:) has not been implemented”)
	}

	override var intrinsicContentSize: CGSize {
		return CGSize(width: 200, height: 200)
	}
}

extension NewView {
	func style() {
		translatesAutoresizingMaskIntoConstraints = false
	}

	func layout() {
	}
}
```

Activate Constraints Array:
```swift
NSLayoutConstraint.activate([

])
```

Create a new empty View Controller with an empty stack view, UILabel and simple layout constraints:
``` swift
import Foundation
import UIKit

class DummyViewController: UIViewController {
    
    let stackView = UIStackView()
    let label = UILabel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        style()
        layout()
    }
}

extension DummyViewController {
    func style() {
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.spacing = 20
        
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = "Welcome"
        label.font = UIFont.preferredFont(forTextStyle: .title1)
    }
    
    func layout() {
        stackView.addArrangedSubview(label)
        
        view.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            stackView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
        ])
    }
}
```

Hopefully you find this informative and useful! 
