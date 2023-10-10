---
title: Simple Todo list app in Javascript
description: In this post you are gonna learn how to build a simple todo app in plain javascript.
date: '2023-10-9'
categories:
  - tutorial
  - javascript
  - html
published: true
img: https://picsum.photos/800/600
---

# Simple TODO app in JS/HTML/CSS

## 0. Prerequisites

- A code editor like vscode
- If you are using vscode i recommend to install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (this will allow live reloading of the html, but you can just refresh the browser after each change)

<details>
  <summary>Core Concepts</summary>
  In this tutorial we will cover a few JS concepts: variables, functions, methods, classes, objects, events.
  You can read more about them on  
  <a href="https://developer.mozilla.org/en-US/docs">MDN</a>
  But here is a very simple explanation of each.
  <br/>

    - Variables: used to store information that you need. you can use keywords: let | const.
        variables declare with const cannot be reasigned.

    - Functions: you can think of functions as a piece of code with one or multipe instructions that can be ran (called) when you want.
        functions can return values, if no values is returned the value will be undefined. functions can have parameters that can be used insinde.
        keyword: function | you declare a function by using function keyword followed by the name of the function, then parameters and inside curly braces you define you "steps".

    - Objects: used to store more complex data and they can be an instance of a class or just stand alone objects. Everything that's not a primitive in JS it's an object, even functions.
        you can declare them just as you would decalre a variable but you open curly braces to add more properties:

```js
const obj = {
	name: 'teo',
	age: 26
};
obj.name; //returns teo
obj.age; //return 26
```

    - Classes: They are the blueprints for objects, Classes needs to be created as object in order to use. You can think to classes and objects. A simple example of classes and objects will be:
    Class Human, and the object Teo wich is the type of Human; This is not needed for this tutorial but is good think to know about them;

```js
class Human {
	age;
	name;
	constructor(age, name) {
		this.age = age;
		this.name = name;
	}
}
const teo = new Human(25, 'teo');
```

    - Methods: Are functions that are binded to a object or class. those can be used as any other paramter from that object.

```js
class Human {
	age;
	name;
	constructor(age, name) {
		this.age = age;
		this.name = name;
	}
	run() {
		console.log('RUNNING');
	}
}
const teo = new Human(25, 'teo');
teo.run();
```

</details>

## 1. Project Setup

- Create a directory (folder) with the name of the project (name it how you want it).
- Inside this folder create three folders:

  - index.html
  - index.js
  - index.css

  **_ you can name those files whetever you want but for consistency we will name them index _**

- Inside index.html add the following code:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  	<head>
  		<meta charset="UTF-8" />
  		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  		<title>Document</title>
  	</head>

  	<body></body>
  </html>
  ```

- Import CSS and JS files by adding those two inside the head tag
  ```html
  <link rel="stylesheet" href="index.css" />
  <script defer src="index.js"></script>
  ```
  **_ defer keyword makes our script run after out html template was fully loaded _**
  **_ by importing those two file we include them in our html page _**
  **_ Now our project is ready _**

## 2. Templating

In this part we are going to create the template of out project witch will consists in the following (link are provided for each element docs if you want to read more):

- [ text input ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  - **_ We will use this element to name the new todo item _**
- [ button ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  - **_ We will use this to add the new todo into the list _**
- [ list ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

  - **_ We use the list to display all the todos _**

We need to add those elements into our html (you can add them in wathever order you like).

<details>
  <summary> Solution </summary>

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>

	<body>
		<input />
		<button>ADD</button>
		<ul>
			<li>Learn JS</li>
		</ul>
	</body>
</html>
```

**_ As you can see we added an input, a button with the "ADD" text inside of it and a list with an element in it. (that element is not necesesary but it lets us see that we rendered the list properly) _**

</details>

Open your website using live server ( in vscode on the bottom right corner there is a button with go live, that should open your website in the browser at localhost:5500/index.html ) or just open the file from file explorer.

## 2. JavaScript

In this section we will add the functionality for our app. Right now is static, is not doing anything when pressing the button.

### Create a referance to html elements we want to use.

In order to do that we will use the following built-in method: [document.getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName).
This method returns a list of elements of a specific tag. This is one of many methods of this kind. We could also use querySelector, getElementById, etc.

<details>
  <summary>Extra Info</summary>

In javascript primitive values (boolean, number, string, null, undefined, Symbol, bigint) are stores as values any other values like html elements are stored as references to that object.

</details>

Let's create a referance for each element in our template.
Since getElementsByTagName returns a list of elements, we need to create them before we get a single element from that list (since the html contains only one input, button, ul the element we are looking for is the first one for each list, at position 0).

<details>
  <summary>Solution</summary>

```js
const inputList = document.getElementsByTagName('input');
const buttonList = document.getElementsByTagName('button');
const ulList = document.getElementsByTagName('ul');

const inputRef = inputList[0];
const buttonRef = buttonList[0];
const ulRef = ulList[0];
```

**_ You can use `console.log(inputRef, buttonRef, ulRef)` to check if you got the referances to those elements _**

</details>

Next we will crete a variable to store the name of a new todo we want to add to the list.
That variable should be updated everytime we change the text in our input.

```js
let newTodo = '';
```

Everytime you interact with an element, that element will emit a new event, you can think of events as signals that you can listen to. Here you can learn more about events [ Events ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).
Everytime you write something inside the input text box, it emits some events. We will use "input" event for our example.
You can register an event handler function using builtin method: addEventListener [ ReadMore ](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
An event handler is just a function that takes an event as parameter;
Usage of addEventListener:

```js
element.addEventListener('event', handleFunction);
```

<details>
  <summary>Solution</summary>

```js
function handleInput(e) {
	console.log(e);
}

inputRef.addEventListener('input', handleInput);
```

**_ Lets create handleInput function that has one paramater e (Event) and console.log the event. Using add event listener we can run this function everytime the event input is triggered _**
**_ the event is contains a lot properties, for now we will focus on target that represent the element referance from where the event was fired, inside this target we get another propery called value that represents current value inside the input _**

We will change this function to update newTodo with the input value;

```js
function handleInput(e) {
	newTodo = e.target.value;
	console.log(newTodo);
}
```

We can keep the console log so we can see how the value changes overtime.

</details>

Now we need to add some functionality to the button. We want to create a list where we will store all of our todos. Also we want whenever we click on the Add button to add whats inside the newTodo in the list. We can achive this in a similar way we did at the input part.

<details>
  <summary>Solution</summary>

Create an emprty array of todos.

```js
const todoList = [];
```

You might be wondering why we can still add elements to this array even tho we used const instead of let. when you decalre an object using const it's referance is imutable, the values still can be changed.

Create a function to handle click event

```js
function handleClick() {
	todoList.push(newTodo);
	newTodo = '';
	console.log(todoList); //For testing
}

buttonRef.addEventListener('click', handleClick);
```

in this example we didn't pass the event to handleClick's parameters because we didn't need any info from inside the click event we only need the text that is store inside newTodo.
We use the array's method push to add new element to the list. Also we want to remove what's inside the newTodo since we already added that todo into the list.

Now we can see that everytime we click on the add button we add them to the todoList.

</details>

Now we need our changes inside the todoList array to reflect the html list.

- First we need to create a new li element whenever we want to add a new todo inside the list.
- We can create a new li element in javascript using another built-in method: [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).
- Then we can append this new element using our referance to the list and another method: [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild).
- We also need to add the newTodo name as content inside the li element we create. WE can do this multiple ways: textContent, innerText, innerHml.
- We also want to clear the input box after we add the todo.
- BONUS: you can add an if to this function to prevent appending empty todo names;

<details>
  <summary>Solution</summary>

```js
function handleClick() {
	todoList.push(newTodo);
	const newLi = document.createElement('li');
	newLi.textContent = newTodo;
	ulRef.appendChild(newLi);
	inputRef.value = '';
	newTodo = '';
}
```

</details>

# Congrats

### You just built you first real web-app using javascript.

In the next post you will learn how to setup a server and serve this html file.
