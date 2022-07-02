---
title: Networking in Swift Playgrounds with Datasette
date: 2022/7/01
description: How to create and use your own endpoint!
tag: Swift, Xcode
author: Dalton
---

# Introduction

Most app developers need to access data from a server at some point - whether it's user data, app data, or something else. Usually, this data is accessed through an API endpoint. If you've ever tried to access data from an API endpoint, you know that it can be challenging for several reason. Even if you have the URL for the endpoint, you still need to figure out how to authenticate and make sure you're sending the correct headers.

This is something I personally struggled with when I started to learn about networking with Swift in iOS development. I wanted to practice these skills in a Swift Playground with data that was interesting, predictable, and editable. Enter `Datasette`.

One way to make accessing API endpoints easier is to use `Datasette` to publish data to the web. `Datasette` is a tool that allows you to easily create and publish data-driven websites. It's open source, and it's free to use. With `Datasette`, you can take any .csv file and publish it as a JSON API. That means you can access the data using a URL, without having to worry about authentication or headers. Once you've published your .csv file to the web using `Datasette`, you can access the `Datasette` instance's underlying JSON data. This JSON API can then be used in a Swift Playground to access the data from the .csv file.

This is a great way to produce your own endpoint with data that is interesting, predictable, and editable for use in your own projects! For this post, I'll be going into detail on how to use a `Datasette` JSON API endpoint in a Swift Playground. 


## How to get set up with `Datasette`

To get started, you'll need to install `Datasette`. The easiest way to do this is using pip:

```
pip install datasette
```

Once you've installed `Datasette`, you'll need to create a .csv file that you want to publish. You can then publish your CSV file using the following command:

```
datasette publish myfile.csv
```

This will start a web server on your local machine. You can access the server by navigating to http://localhost:8001/myfile.

## Setting up a Swift Playground

Now that you've started the `Datasette` server, you can access the JSON data that's underlying the .csv file. To access the data in the `Datasette` instance from a Swift Playground, you'll need to create a new playground. You can do this by opening Xcode and selecting `File > New > Playground`.

Once the playground has been created, you'll need to import the Foundation and URLSession frameworks:

```swift
import Foundation
import URLSession
```

This URLSession framework will be used to send and receive data from the `Datasette` instance's server.

## Networking in the Playground

Now that you have the URLSession framework imported, you can use it to make network requests to the `Datasette` instance. To do this, you'll need to create a URLSession and a URLSessionDataTask.

The URLSession will handle the network request, and the URLSessionDataTask will handle the data that comes back from the request. To create these objects, add the following code to the playground:

```swift
let url = URL(string: "http://localhost:8001/myfile")!
let session = URLSession(configuration: .default)
let task = session.dataTask(with: url) { data, response, error in
    // Handle the data and response here
}
task.resume()
```
This code will send a request to the `Datasette` server, asking for the JSON data that's underlying myfile.csv.

## Handling the response

Once you've sent the request, you'll need to handle the response. The URLSessionDataTask will call the completion handler that you passed in when you created the task. This completion handler will be called with three parameters: data, response, and error. The following points are important to note: 

* The data parameter will be of type Data?, which means it may or may not contain data. If the request was successful, this parameter will contain the data that was returned from the server. If the request was unsuccessful, this parameter will be nil.

* The response parameter will be of type URLResponse?, which means it may or may not contain a response. If the request was successful, this parameter will contain the response from the server. If the request was unsuccessful, this parameter will be nil.

* The error parameter will be of type Error?, which means it may or may not contain an error. If the request was successful, this parameter will be nil. If the request was unsuccessful, this parameter will contain an error describing what went wrong.


To do handle the response, you'll need to add a few lines of code to the data task closure.

First, you'll need to check for an error. If there is an error, you can print it out and return early:

```swift
if let error = error {
    print(error)
    return
}
```

Next, you'll need to check the response. The response will be an HTTPURLResponse instance. This instance will contain the status code of the response.

If the status code is not in the 200 range, that means there was an error. You can print out the status code and return early:

```swift
let response = response as! HTTPURLResponse
if !(200..<300).contains(response.statusCode) {
    print(response.statusCode)
    return
}
```

Now that you've checked for errors, you can safely assume that the response contains the JSON data that you're looking for. To parse the JSON data, you'll need to use the Foundation framework's JSONSerialization class. This class has a method called jsonObject(with:options:) that takes in data and options, and returns a JSON object.

Use the following code to parse the JSON data, :

```swift
let json = try! JSONSerialization.jsonObject(with: data!, options: [])
```

This code will parse the JSON data and store it in a variable called json. You can then print out the json variable to see the parsed JSON data:

```swift
print(json)
```

## Conclusion

In this post, we've gone over how to use `Datasette` to publish a .csv file to the web, and how to use the resulting URL to access the datasette instance's underlying JSON data. We've also gone over how to use the JSON to access the data in a Swift Playground using URLSession.

However, this `Datasette` instance is just a local version of the server! If you'd like to deploy your instance, follow along with the `Datasette` documentation [here](https://docs.datasette.io/en/stable/). 

That's all for now! Thanks for reading!
