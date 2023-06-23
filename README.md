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