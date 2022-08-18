---
title: Protocols in Swift
date: 2022/8/17
description: Flexibility and Maintainability
tag: Swift
author: Dalton
---

# Protocols in Swift

Swift is a powerful programming language that has many features that make it attractive to developers. One of these features is protocols. Protocols allow developers to create abstractions that can be used to define behavior that can be implemented by types. This allows for a great deal of flexibility in code design and implementation. 

Protocols are similar to interfaces in other programming languages. They define a set of methods, properties, and other requirements that a type must satisfy in order to be considered conforming to the protocol. Protocols can be used to define behavior that can be implemented by value types, reference types, and even protocols themselves. 

In this article, we'll discuss what protocols are and how to use them in Swift. We'll also take a look at how protocol extensions can be used to provide default behavior for types that conform to a protocol. And finally, we'll see how the protocol delegate pattern can be used to create loosely coupled code.

## Defining Protocols in Swift

A protocol defines a set of requirements that a type must satisfy. Protocols can be used to define contracts between types, and can be extended to provide default implementation of methods and properties.

To define a protocol in Swift, you use the `protocol` keyword followed by the protocol's name. Protocols can be defined in the global scope or within a type's definition.

For example, the following protocol defines a contract for a type that represents a vehicle:

```swift
protocol Vehicle {
    var numberOfWheels: Int { get }
    var color: String { get set }
    
    func drive()
}
```

The protocol defines two properties, `numberOfWheels` and `color`, and one method, `drive()`. Any type that conforms to the `Vehicle` protocol must satisfy these requirements.

## How to Use Protocol Extensions in Swift

Protocol extensions allow you to provide default implementation of methods and properties. Protocol extensions are very useful when you want to provide default behavior for types that conform to a protocol.

For example, you could use a protocol extension to provide a default implementation of the `drive()` method:

```swift
extension Vehicle {
    func drive() {
        print("Driving")
    }
}
```

Now, any type that conforms to the `Vehicle` protocol will have a `drive()` method with the default behavior.

## Implementing the Protocol Delegate Pattern in Swift

The protocol delegate pattern is a common design pattern that is used to decouple types. The protocol delegate pattern is used when one type needs to notify another type of events that have occurred. The protocol delegate pattern is often used in conjunction with protocols.

The protocol delegate pattern involves creating a protocol that defines the methods that a delegate object must implement, and then assigning that delegate object to a property on another object. The protocol delegate pattern is useful because:

- It helps you manage the responsibilities of your objects by clearly defining their duties.
- It makes your code more flexible and reusable because you can swap out delegate objects as needed.
- It promotes good software design principles such as the single responsibility principle and separation of concerns.

For example, consider a `TextField` type that needs to notify a `ViewController` type when the user enters text. The `TextField` type can define a protocol that the `ViewController` type can conform to:

```swift
protocol TextFieldDelegate: AnyObject {
    func textFieldDidChange(_ textField: TextField)
}
```

The `TextField` type can then have a property that conforms to the `TextFieldDelegate` protocol:

```swift
class TextField {
    weak var delegate: TextFieldDelegate?
    
    func start() {
        // Perform some work
        
        // Call the delegate's textFieldDidChange method
        delegate?.textFieldDidChange(self)
    }
}
```

And the `ViewController` can conform to the `TextFieldDelegate` protocol:

```swift
class ViewController: TextFieldDelegate {
    //...
    
    func textFieldDidChange(textField: TextField) {
        // Handle the event.
    }
}
```

Now, when the user enters text in the `TextField`, the `textFieldDidChange(textField: TextField)` method will be called on the `ViewController`. This allows the `TextField` and `ViewController` types to be decoupled, and the `ViewController` can be reused in other contexts.

## Summary

In this article, we've discussed what protocols are and how to use them in Swift. We've seen how protocol extensions can be used to provide default behavior for types that conform to a protocol. And we've looked at how the protocol delegate pattern can be used to create loosely coupled code. 

Protocols are a powerful feature of Swift that can be used to create abstractions and define behavior that can be implemented by types. Protocol oriented programming can lead to more testable and maintainable code. And protocol extensions and the protocol delegate pattern are two powerful tools that can be used to make your code more flexible and extensible.