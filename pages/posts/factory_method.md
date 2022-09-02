---
title: Factory Pattern in Swift
date: 2022/9/2
description: Abstract object creation
tag: Swift
author: Dalton
---

# Factory Pattern in Swift

In this post we discuss why the Factory Pattern is useful. We also provide some pattern examples written in Swift.

The Factory Pattern is a popular design pattern in software development. Many applications use this pattern to abstract the creation of objects. The Factory Pattern helps enforce the Object Oriented Programming (OOP) Principle of Encapsulation.

## Motivation

This pattern is particularly useful in the following situations:

* Simplifying convoluted object creation
* Creating expressive initialization method names
    * Can do through initializer overloading, but `init` is mandated in Swift
* Outsourcing object creation
    * Via a function (Factory Method)
    * Via a class (Factory)

## Factory Methods

A factory method is a method that creates objects. 

For example, consider a class that needs to create objects of various shapes. The class can use a factory method to create the objects. The factory method can take parameters that specify the type of object to create. The class can then use the object without knowing the details of its implementation. 

The `Shape` class below has a `static` factory method named `createShape()`. The method takes a `String` parameter that specifies the type of shape to create. The method returns an instance of the `Shape` class. In Swift, one can call a `static` factory method without creating an instance of the class.

```swift
class Shape {
    
    // MARK: - Properties
    
    var type: String
    
    // MARK: - Initializers
    
    init(type: String) {
        self.type = type
    }
    
    // MARK: - Factory Methods
    
    static func createShape(type: String) -> Shape {
        return Shape(type: type)
    }
}
```

## Factories
It may be preferable to outsource object creation logic to a class if a factory method is too complex.

For example, we can extract the factory method from our example above to a new `ShapeFactory` class

```swift
class Shape {
    
    // MARK: - Properties
    
    var type: String
    
    // MARK: - Initializers
    
    init(type: String) {
        self.type = type
    }
}

class ShapeFactory {
   static func createShape(type: String) -> Shape {
        return Shape(type: type)
    }
}
```

We can then call the static function `createShape()` on the `ShapeFactory` itself like so: 

```swift
let s = ShapeFactory.createShape(type: "Square")
```
## Summary

The factory pattern is a useful tool for managing object creation in Swift. You can centralize your object creation code by creating a factory class. 

The factory pattern has many benefits:

- Increased flexibility, as you can change the type of object created without having to change your code
- Improved code reuse, as you can use the same factory class to create different types of objects
- Better organization, as all your object creation code is consolidated in one place

The factory pattern is a great way to streamline object creation in Swift.
