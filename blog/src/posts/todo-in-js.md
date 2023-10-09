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

Now we need to add some functionality to the button. We want to create a list where we will store all of our todos. Also we want whenever we click on the Add button to add whats inside the newTodo in the list
