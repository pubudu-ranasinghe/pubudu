---
path: "/01-build-react-context-store"
date: "2019-11-04"
title: "Build a redux-like Store with React Context+Hooks"
subtitle: "And add authentication along with routing to your app"
color: "#09D3AC"
---

On a fine Saturday morning you wake up with a brilliant idea for your next side project. You have been thinking about it all week and now you're ready to dive in. Anyway you wanted to experiment with all that hot new tech and frameworks you have been missing out in your boring day job.

You have the idea roughly sketched out for a frontend application using all the latest and greatest features of React(Context, hooks etc etc) along with a serverless backend(Maybe using Cloudflare Workers?) You open your favorite editor with a shiny new Create React App running ready to be The Next Big Thing. And bam! few hours in to development you realize you actually haven't done anything but ended up with dozens of tutorial tabs and docs open only to be confused and frustrated with all these new features and jargon.

That's exactly where I was when I decided to write this guide to help myself organize my learning and hopefully share that knowledge with a frustrated dev like me. In this guide I'm going to start with basics of both Context and Hooks and gradually integrate them with each other to create a simple but functional state manager like Redux.

> [TL;DR Just show me the code](https://github.com/pubudu-ranasinghe/react-context-example)

## State Management in React

So let's go back a little and define my requirements. I want to setup a React application,

- Use Context and Hooks for global state management
- Implement authentication using global state
- Configure routing with public and private routes

If you have these three in place rest of the app is pretty much usual react business.

Working with global state using [Redux](https://redux.js.org/) is fairly straightforward. You implement a store with some initial value, write reducers that will help you update the store, write actions and action creators used to dispatch updates to store. Then you simply connect any component in your application to the store to be able to use the global state or make updates.

We are going to see how we can achieve something similar using Context and Hooks. Our plan would be,

- Implement simple state management using Hooks
- Convert this state to be a global state using React Context
- Abstract away the Hooks+Context logic into a nice reusable API similar to Redux with a store, reducers and actions
- Use the created store to implement simple authentication along with Routing

Let’s start with [Create React App](https://create-react-app.dev/) and experiment a little.

```
npx create-react-app react-context-example
cd react-context-example
yarn start
```

We will start with a very simple Todo application which has three components as follows.

![alt](https://miro.medium.com/max/900/1*mUkApnIEmC1GxxaejYwijA.png)
![alt](https://miro.medium.com/max/1591/1*EGlraFkuLFetiVQC8ARmqA.png)

Let’s add the following components.

`gist:pubudu-ranasinghe/df3f7946f93c78883e2e6376903a6596`
<div class="caption">components/Items.js</div>

`gist:pubudu-ranasinghe/c2c20334776650a57c737523d3077e75`
<div class="caption">App.css to make it look nice :)</div>

`gist:pubudu-ranasinghe/9df053a0dd9e5504c50acd73487889df`
<div class="caption">App.js</div>

Next we want to introduce a state to store the list of todos and be able to add and remove todo items.

## State Using Hooks

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Previously we would have converted `App` component into a class component and introduced state to the class. But with react hooks we can keep it as a functional component and introduce state using the `useState` hook. A very nice introduction to hooks can be found in [hooks documentation](https://reactjs.org/docs/hooks-overview.html).

Let’s update `App.js` as follows.

`gist:pubudu-ranasinghe/48aefaca21ca648f3ff3da448977fe69`

Here we have declared an array of items as a state variable using the `useState` hook. It takes the initial state as a parameter and returns two values, first which is the state itself and second, a function to update the state. Note that unlike `setState` in class components that you may be used to, hooks state update method does not merge existing data. Therefore we have to take care of merging before passing the updated state. For this we define two functions `handleAddItem, handleRemoveItem` to add and remove items. Also note that these functions are passed down into our child components `NewItem` and `ItemList` as props. Now we have a basic but functional todo list. You can go ahead and introduce another state hook into `NewItem` component to capture the text input by user.

`gist:pubudu-ranasinghe/77926f57060108410f1e6450c04a0424`

As you can see using hooks make our code a little bit cleaner and makes us avoid class components and life cycle hooks we may need to be concerned about. Moving forward with our goal of creating a redux like store, this let’s us abstract away state management logic and make it reusable. Specially `useReducer` hook which we will take a look at in a moment allows us to wrap this in a nice API.

## Using React Context

Now let’s explore what react context is. React describes context as,

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

This is exactly what we need for global state management. You start with a top level component that uses context to store global state. Then anywhere within your component tree you can access and/or make updates to this state. This is pretty much the basic idea behind global state managers like redux.

Remember we had to pass down the `handleAddItem` and `handleRemoveItem` methods as props to child components? Let’s refactor this to be obtained from the context without having to drill down the props.

Using react context is pretty easy. It takes the following form. First you create a context with a call to `React.createContext()` This takes an optional initial value as an argument. Then you need to provide the context somewhere in your component tree using `Context.Provider` so that components below that will have access to it. Then wherever you want to use the context, use `Context.Consumer` which will have access to the value.

```
const MyContext = React.createContext(/* initialValue /*)
<MyContext.Provider value={/* value*/}>
  <MyContext.Consumer>
    { value => /* components can access the value object */ }
  </MyContext.Consumer>
</MyContext.Provider>
```

> A good explanation of React Context is available in the [documentation](https://reactjs.org/docs/context.html)

Lets start with creating a new context for our todos in `contexts/TodoContext.js`

`gist:pubudu-ranasinghe/21a30d60f9fbe79c2ea0aa8a80e4f299`

Update the `App` component as follows to provide the `TodoContext` to our component tree.

`gist:pubudu-ranasinghe/8427dbae2c713ff0089c3f773f080445`
<div class="caption">App.js</div>

Next we can use the `TodoContext.Consumer` within our child components and have access to the state value passed to `TodoContext.Provider`

`gist:pubudu-ranasinghe/f2a4949d759377a833a65afa71baf575`
<div class="caption">Items.js</div>

You may notice that we are repeating the `TodoContext.Consumer` wrapper everywhere we need to consume the context value. We can refactor this using the `useContext()` hook and make it less verbose.

`gist:pubudu-ranasinghe/66c0b15127584d8f0326b7955159b5e3`
<div class="caption">Updated Items.js to use useContext</div>

At the moment we are storing our global state in the `App` component. This is not a very desirable behavior specially as our todo state grows in complexity and it’s not exactly the responsibility of `App` component to hold the global state. So let’s move it to our already created `TodoContext`

`gist:pubudu-ranasinghe/064f080bb433f86a3c2f69e683344637`
<div class="caption">contexts/TodoContext.js</div>

We are exporting two functions here. One is a the `TodoProvider` component which is actually a higher order component wrapping the `TodoContext.Provider` along with a state. This becomes our global store and we need to update `App` component as follows.

`gist:pubudu-ranasinghe/a66fb1c3edc52b0e16f07ae1dacd7fdc`
<div class="caption">Our App.js is a lot more simplified and does not have todo logic in it.</div>

The second export is simply a [custom hook](https://reactjs.org/docs/hooks-custom.html) wrapping the `useContext` hook which already has `TodoContext` passed into it. In `Items.js` you need to import useTodoContext and replace,

```
const todoContext = useContext(TodoContext);
```

with

```
const todoContext = useTodoContext();
```

That’s it! Now we pretty much have a neat global store built with React Context and Hooks. Following the same pattern you can create new *ContextProviders*, wrap your application with it and then use a custom useContext hooks anywhere in your component hierarchy to use it as a store. Feel free to take a break at this point ☕

## Adding Reducers and Actions

> The following sections are heavily inspired by Redux. If you are not familiar with redux please checkout the [documentation first.](https://redux.js.org/introduction/getting-started)

Our state update logic is defined as functions in `TodoProvider` and each of these functions are stored as references in the state itself which can be accessed by consuming components to update the state. Following the redux pattern, we can introduce *Actions* and *Reducers* to our state manager. We can have actions that describe what happens to our state and a reducer which will handle state changes corresponding to the said actions.

Let’s start with creating the actions `ADD_TODO, REMOVE_TODO and CLEAR_ALL.` For now I’m going to add all the actions and the reducer inside the `TodoContext.js` file itself. If this gets too large feel free to split your code into separate files.

`gist:pubudu-ranasinghe/e8f3037ce03fb694dd5830e7a502e832`
<div class="caption">Updated TodoContext.js with actions and reducer</div>

First I have created a few actions and corresponding action creators, pretty similar to redux. Then we have the reducer which is again a simple pure function which takes state and action as arguments and return the updated state.

Then inside our `TodoProvider` we are changing the `useState` hook to `useReducer` hook. It accepts a reducer and an initial state(unlike in redux where we pass the initial state to the reducer, it’s recommended to pass initial state into `useReducer` hook). The two values returned by `useReducer` is the state itself and a dispatch function which we can use to dispatch our actions. Since our consumer components would want to use the dispatch function we pass it as a value in `TodoProvider`. Now we are all set to use the state and dispatch actions from our consumer components.

`gist:pubudu-ranasinghe/1062f79495c96d4139d497dc6715db8f`
<div class="caption">Updated Items.js to use actions and dipatcher</div>

Notice how I have destructured the dispatch method from `useTodoContext()` and used it to dispatch an action of adding a todo. Similarly we use state value and dipatch along with relevant actions to list todos and remove todos.

## Implement Authentication Using Context+Hooks Store

Now that we have a usable global store implementation, let’s go back to our main requirement and implement authentication. We need to have a separate context to store the authentication details. So our global state would look something like this.

```
{
  auth: {
    isLoggedIn: true,
    name: "John",
    error: null,
  },
  todos: []
}
```

We need to have routing configured with base route `/` displaying a login page and a protected route `/todos` which will display a Todos page if user is logged in. We can update our component hierarchy as follows. `Todos` component will handle all todos and live in `/todo` route which will be a private route. If user is not logged in he will be redirected to `/` route which will render the `Login` component.

![alt](https://miro.medium.com/max/900/1*Mf8IT0ldqkfhQMdq1EUdOQ.png)

First add [react-router](https://reacttraining.com/react-router/web/guides/quick-start) and set up the components.

```
yarn add react-router-dom
```

`gist:pubudu-ranasinghe/9aee8f14caf6b40e076ba9a726a0e04e`
<div class="caption">components/Todos.js</div>

`gist:pubudu-ranasinghe/5519be3daff0ef9359932493434c5992`
<div class="caption">components/Login.js</div>

`gist:pubudu-ranasinghe/d4e9c13f7312886299a6354ab648fedf`
<div class="caption">App.js</div>

`gist:pubudu-ranasinghe/8a3dd4c9e37bc81eee258df40c27a248`
<div class="caption">api/auth.js</div>

We can follow the same pattern we used for `TodoContext` to create `AuthContext` for authentication which is pretty straightforward and self explanatory.

`gist:pubudu-ranasinghe/b3c4a6a33c7e2b663b51d51144899362`
<div class="caption">contexts/AuthContext.js</div>

Before we use the `AuthContext` we need to make sure we are providing it at the top of our application. So let’s wrap the entire app with `AuthProvider`. Meanwhile I’m going to enhance our `Greeting` component as well to use the auth state and display a greeting and a logout button.

`gist:pubudu-ranasinghe/231b749aa7e9aefbdd3556e89c6e753d`
<div class="caption">App.js</div>

## Add Login Functionality

Now that we have auth store configured we can start building the functionality of `Login` page. Inside the login page we need to use the store to check whether the user is already logged in and if so, redirect him to the `Todos` page. If not, we display the login form and on submit we call our mocked login API. If the login is success we can dispatch the `loginSuccess` action or else dispatch `loginFail` action.

`gist:pubudu-ranasinghe/231b749aa7e9aefbdd3556e89c6e753d`

## Protect the Routes

Next let us make the `/todos` route private so that only a logged in user can access it. Anyone else will need to be redirected back to the login page. We can do this by simply wrapping the react-router `Route` component with a higher order component and using the `AuthContext` inside it to decide whether to render the route or redirect to login page.

`gist:pubudu-ranasinghe/fb9e5996bc948b21a0e6e004f800983c`
<div class="caption">components/PrivateRoute.js</div>

Now we can simply use `PrivateRoute` instead of `Route` to make any route inaccessible to logged out users.

----

<br>

And we are done! 🙌

We learnt how to build a redux like store gradually, using context and hooks and you can use this as a simple and lightweight alternative to redux in your next project. As next steps you can try experimenting with store middleware, checkout how to combine contexts(something like redux `combineReducers()`) as well as checkout the [other hooks](https://reactjs.org/docs/hooks-reference.html) provided by react.
