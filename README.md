# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `1.`
  ### `This file is created for the notes while learning how to use react`
  `useEffect`
   In a simple Languages, useEffect is the method of performing the task that has sideEffect on the function or element
   

  `CODE: `
  ![useEffect](./src/image/useeffect.jpg)

  In the above code useEffect is being used when the webpage get rendered

`the alert method is getting called when the page is refreshed`
### Similarly the console.log which is called independently inside the component is called first and useeffect is get called
* first independent console 
* second useEffect console 


![appcpde](./src/image/app-cpde.jpg)

`-------------------------------------------------------------------------------`
![console-msg](./src/image/console-msg.jpg)

### `2.`

![returning_from_useEffect](./src/image/return_from_useEffect.jpg)

* In this, useState is used to updated the value and useEffect is used to console when the resourceType is clicked/changed


![returning_from_useEffect](./src/image/console-return-from-useEffect.jpg)

*  Here return function inside useEffect is used to clear up the code when the useEffect is being called as shown in the console msg above.
### In conclusion:
* The callback function inside useEffect is executed after the initial render and after every subsequent re-render by default. If you want to run the effect only once, you can pass an empty array ([]) as the second parameter. This effectively tells React that the effect has no dependencies,so it doesn't need to re-run.

* If you provide a dependencies array, the effect will only be re-run if any of the dependencies change. React will compare the current dependencies with the previous ones and determine if the effect should run again.

* Inside the effect callback, you can perform any asynchronous or synchronous operations. You can also return a cleanup function, which will be executed before the component is unmounted or re-rendered. The cleanup function is useful for cleaning up any resources, event listeners, or subscriptions created by the effect.

### Here are some scenarios when you might want to use the useEffect hook:

* Fetching data: When you need to fetch data from an API or perform an asynchronous operation, you can use useEffect to initiate the request and handle the response.

* Subscribing to events: If you need to listen for events like mouse clicks, keyboard input, or scroll events, you can use useEffect to set up event listeners and clean them up when the component unmounts.

* Modifying the DOM: When you need to interact with the DOM directly, such as manipulating elements, changing styles, or adding event listeners, you can use useEffect to perform these operations.

* Setting up timers: If you want to schedule a task to run after a specific interval or at a particular time, you can use useEffect to set up timers, such as setTimeout or setInterval, and clear them when the component unmounts.

* Subscribing to data or state changes: When you want to respond to changes in data or state, you can use useEffect with dependencies. By specifying dependencies, you can trigger the effect whenever the dependencies change.

It's important to note that useEffect runs after every render by default. However, you can provide a dependency array as the second argument to control when the effect should run. This array contains values that the effect depends on, and if any of those values change, the effect will be re-run.

### useContext

The `useContext` hook in React allows you to access the value of a context in a functional component. Context provides a way to share data between components without having to pass props manually at every level of the component tree.

* To use useContext, you need to follow these steps:

1. Create a context using the React.createContext function. This function returns a context object that consists of two components: Provider and Consumer.

```
// Create a context
 const MyContext = React.createContext();
 ```

2. Wrap the parent component or any ancestor component that wants to share the data with its child components using the Provider component. The Provider component accepts a value prop which specifies the value you want to share.

```
// Wrap the parent component with the Provider
<MyContext.Provider value={/* value to be shared */}>
  {/* Child components */}
</MyContext.Provider>
```
3. In any child component that wants to access the shared value, import the context object and use the useContext hook to access the value.

```
import React, { useContext } from 'react';

// Inside a child component
const MyComponent = () => {
  const contextValue = useContext(MyContext);

  // Use the context value in your component
  // ...
};
```
* The useContext hook takes the context object as an argument and returns the current value provided by the nearest MyContext.Provider up the component tree. It automatically subscribes the component to context updates, so whenever the value of the context changes, the component will re-render.

* It's important to note that useContext can only be used within the body of a functional component or another custom hook. It cannot be used in regular JavaScript functions or class components. Also, make sure the Provider component is higher up in the component tree than the components that consume the context.

* By using useContext, you can access the shared data without passing props through intermediate components, making your code cleaner and more efficient.
* By using useContext, you can access the shared data without passing props through intermediate components, making your code cleaner and more efficient.


### Theories:

`Functional Programming Parts`

* First-class function/citizen/object means that functions are treated just like any other data types.

1. Assign function to variable

2. Pass function as argument (This is concept which allows us to write higher-order functions that take function as argument to customize)

3. Return functions from other functions

4. Store functions in data structures: You can store functions in data structures like lists, arrays, or dictionaries. This enables you to create collections of functions and manipulate them in various ways.(source: programmingwithmosh, composing and piping)
* Composing: Default behaviour of functions pass as parameter inside function left to righr

* Pipe: Behavior of functions pass as parameter right to left

* Examples of composing and pipe


### composing

```
const tranform = compose(wrapInDiv,toLowerCase,trim) #passing function as parameter inside compose
```


### pipe

```
const tranform = pipe(trim,toLowerCase,wrapInDiv) 

```


### Higher order functions
* Higher-order function is the function that either takes one or more functions as argumentes or returns a function as its result 
Examples:

1. map:
```
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

```
2. filter:
```
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
```

3. forEach:The forEach function takes an array and a callback function as arguments. It iterates over each element of the array and applies the callback function.

```
const colors = ['red', 'green', 'blue'];

colors.forEach(color => console.log(color));
// Outputs:
// red
// green
// blue

```