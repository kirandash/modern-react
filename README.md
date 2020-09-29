# Modern React

## 1. React Overview
### 1.1 Intro to React
1. **What is React?**
    - https://reactjs.org/
    - **Off. Definition** "React is a JS library for building user interfaces."
    - Popular, powerful front-end library/framework. (Most popular as of 2020)
    - Developed and sponsored by Facebook.
2. **What does React do?**
    - React makes it easy to make reusable **"view components"**
    - Components encapsulate logic and HTML into a class (also CSS sometimes)
    - Thus makes it easier to build modular apps.
3. **Separation of concerns** with React:
    - Traditional separation of concerns were technology based: HTML, CSS, JS
    - With React: Separation of concerns are made based on functinality based. Ex: 
        - Button component (HTML + CSS + JS)
        - Date Picker component (HTML + CSS + JS)
        - Modal component (HTML + CSS + JS)
        - List component
        - List item component
        - Media component

### 1.2 Is React a Framework or library?
1. **What is a FE Framework?**
    - Large JS libraries
    - Provides "blueprint" for apps
    - "Opinionated"
        - Framework tells you how you should design the app. Ex: file naming conventions, syntaxes, folder structures etc.
    - Often provide a way to reuse code
    - Often provide templating of HTML
2. Popular FE Frameworks:
    - Angular
    - Ember
    - Vue
    - React ?
3. **Angular vs React**
    - **Angular**:
        - Angular is a true ecosystem. It provides a lot of features out of the box. Ex:
            - Templating
            - CLI
            - Animations
            - Routers
            - Testing
        - Bcoz of the heavily loaded features: Angular is **heavy**.
    - **React**:
        - React on the other hand is **light weight**.
        - React provides less features out of the box.
        - We can use external tools with our application. React with external components/tools can be extremely powerful. Ex:
            - Redux
            - Router etc.
4. **React: Library or Framework?**
    - React is a library of it's own
    - Very few people use React on it's own
    - React is usually combined w/ things like React Router, Webpack etc.
    - The standard "React Ecosystem" is a framework.
    - Next.js is an actual framework built around React.

### 1.3 Introducing Components
1. **Components**:
    - Doc: https://reactjs.org/docs/components-and-props.html
    - **Off Definition**: Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
    - The building blocks of React.
    - Pieces of UI and view logic.
    - Components are classes/functions that know how to render themselves into HTML.
2. Online React editor: https://codesandbox.io/

### 1.4 Setting Up Server
1. In future, we will use create-react-app, which has built-in server. But for now, since we will build everything from scratch, we will use a server extension for vs code: **Live Server** by Ritwick Dey.
2. Once installed, 
    - Run server from editor: select the file, r click and run: open file with server. R click file ---> Stop the server
    - Run server from CLI using python: navigate to directory. `pythton3 -m http.server`

### 1.5 First React Component - using Class based component
1. Will create a class based component
2. Docs: https://reactjs.org/docs/components-and-props.html
3. Note: Traditionally, class based component were considered more powerful. But with the introduction of React hooks, things are changing and fn components are becoming more powerful.
4. **Steps to code:**
    - index.html: include React, React DOM, Babel, index.js of jsx type
        - **React**: Library: To create react components
        - **React DOM**: Library to render react components on to DOM
        - **Babel**: to convert JSX into JS code that browser can understand. JSX looks like HTML but not HTML.
        - index.js must be included with type as **"text/jsx"** for babel to understand that this js file as jsx content. If not passed, the code from index.js won't be compiled.
    - index.js: create class based component Hello to render JSX
    - index.html: create a target to render the component
    - index.js: render component using ReactDOM.render
5. Serve: index.html ---> R Clk ---> Open with Live server
    - Note: opening index.html directly on browser won't work. The file must be served to work.

### 1.6 Function vs Class components
1. Class Component:
    - The "Traditional" React component
    - Write logic in a JS class
    - Must include a render method
2. Function Component:
    - Historically used for simpler "dumb" components
    - Write logic in a JS fn
    - No render method needed, just return content
3. 01_react_intro/index.js file:
    - Modify Hello class based component to fn based component
4. **Differences?**:
    - Both can accept props and render content
    - Historically, fn components couldn't use important features like:
        - State,
        - Lifecycle methods
    - With the introduction of hooks in React 16.8.0 (February 6, 2019), we can now write full-featured function components
        - Docs: https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019

## 2 Introducing JSX
### 2.1 Basic Rules of JSX
1. **JSX Intro**: 
    - "JS Syntax Extension" or "JS + XML"
    - Docs: https://reactjs.org/docs/introducing-jsx.html
    - Casual Defn: JSX is a tool that allows us to write HTML looking code directly in JS
    - Thus, no need to maintain separate template file and JS file (like Angular)
    - Note: It is possible to build our React app without JSX. But it will be much more difficult/complex.
2. **Using JSX**:
    - JSX isn't leegal JavaScript
    - It has to be "transpiled" to JavaScript
    - Can be transpiled with "Babel"
3. **JSX Rules**:
    - JSX is more strict than HTML. JSX elements must either:
        - Have an explicit closing tag: `<b>...</b>`
        - Be explicitly closed: `<input name="msg" />`
        - can not leave off the `/` or will get a syntax error
    - JSX must return one element only. And can not return more than one element. If there are more than one elements, all of them must be wrapped with one single element eg: a `div` or `React.Fragment`.

### 2.2 How JSX works BTS
1. Docs: JSX in Depth: https://reactjs.org/docs/jsx-in-depth.html
2. Fundamentally, JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)` function.
3. Check how JSX is converted to JS with babel using online tools: 
    - https://babeljs.io/repl
    - Make sure in left panel preset: react is enabled
4. Instead of JSX we can use React.createElement to build our app. But it is more difficult and more amount of code. Check on babeljs tool to see how the code looks in React.createElement

### 2.3 Embedding JS in JSX
1. Add JS code to JSX using `{}` (interpolation)
2. Using `{}` we can:
    - run JS operations, 
    - pass props, 
    - add styles, 
    - add dynamic content etc.

### 2.4 Conditionals in JSX
1. Docs:
    - https://reactjs.org/docs/conditional-rendering.html
    - https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
2. Conditionally render with:
    - ternary operator check
    - boolean check
    - if check and a variable

### 2.4 Standard React App Layout
1. Conventions:
    - **App**: It's conventional for the top-level component to be named App. This renders the other sub components.
    - It's better to follow the convention, so other developers reading our code will know where to start.
    - Usually, App is the only component rendered in index.js
    - **Order of Script tags**: sub component js files should load before index.js. Ex: Hello.js should load before index.js in index.html file.
    - Have only one component per file.
2. Demo:
    - Create App component in index.js and render it on root.
    - Create Hello and NumPicker component. Load them before index.js in index.html file.
    - Render Hello and NumPicker components in index.js as subcomponents to App.

## 3. Props/properties and More
### 3.1 Intro to React Props
1. Propserties (aka. Props)
    - A useful component is a reusable one. Which means, making the component configurable or customizable.
    - Props help in customizing/configuring a react component.
2. props ex: `to="kiran dash"` traditionally mentioned in double quotes

### 3.2 Props are immutable
1. Props objects are **immutable**. 
    - All it's properties are **read only**. 
    - Props Object is **not extensible**.
    - On trying to change props in react component, it will throw error: "Cannot assign to read only property 'from' of object"
    - Similarly, we can not add new properties to props object. It will throw error: "Cannot add property age, object is not extensible"
2. To update values: we will use some other tools viz: state etc.

### 3.3 Other types of Props
1. Props can be strings ex: `to="kiran dash"`
2. For other types, embed JS expression using the curly braces `{}`:
    - `<Person name="Kiran" salary={12000} hobbies={["coding", "working out", "film making"]}>`
    - Note: Booleans by default are set to True.

### 3.4 Slot Machine Example - Props

### 3.5 Looping in JSX
1. `array.map(fn)` is commonly used to output loops in JSX.
2. Note: during looping: providing a key to loop items is must. (To create unique identification)

### 3.6 Adding Default Props with static `defaultProps` object
1. **Default Props**: Components can specify default values for missing props.
2. Create static `defaultProps` object to contain default values for all props.

### 3.7 Styling React
1. **CSS Selectors in JSX**: 
    - We have to add class selector in JSX using `className` to avoid conflict with reserved keyword `class` for react classes.
    - Similarly, we have to use `htmlFor` instead of `for`. Since `for` is reserved for `for loops` in JS.
2. **Styles**:
    - External CSS: Ex: app.css file
    - Inline CSS: We can inline CSS styles, but now style takes a JS object.
        - Note: in react js, style attributes should be camel case (`fontSize`) not kebab case (`font-size`) like normal CSS.
3. **Conditional/Dynamic Style**: 
    - Can add className to element conditionally to apply dynamic CSS

## 4. Create React App Introduction
### 4.1 Create React App tool Intro
1. What is **Create React App** tool and how to use it
2. Use **ES2015 modules** to share code across files
2. Compare **default vs non-default exports**

1. Why Create React App?
    - We can build app without create react app tool: like we did so far. Get react.js and react-dom.js from a CDN. And We can transpile JSX in the browser at runtime
    - Create-React-App is a utility script (`npx create-react-app my-app`) that: 
        - Creates a skeleton react project
        - Sets the project up so that: JS files are run through Babel automatically
        - Let's us use super-modern JS features/idioms
        - Makes testing & deployment much easier
        - Docs: https://create-react-app.dev/, https://reactjs.org/docs/create-a-new-react-app.html

### 4.2 Ways of using CRA
1. Two ways:
    - npx (new)
    - npm
2. Dependencies: nodejs LTS version: https://nodejs.org/en/
    - check node version: In terminal run: `node -v` (12.18.1)
    - check npm version: `npm -v` or `npx -v` (6.14.5)
3. With npx, we don't have to install CRA on our machine.
    - `npx create-react-app hello_world`
    - Note: to use npx, our machine must have Node >= 8.10 and npm >= 5.6.
4. With npm, we will have to install create-react-app globally on our machine and then use it.
    - `npm install -g create-react-app`: installs the CRA tool
    - `create-react-app hello_world` : use CRA tool to create react project
5. Run server:
    - `npm start`

### 4.3 Creating a new App
1. Standard way of naming: kebab case (Ex: hello-world) but can give any other name as well.
    - `npx create-react-app our-first-app`
    - or `npx create-react-app hello_world`
2. Folder structure (hello_world):
    - node_modules: contains all packages
    - public: contains publicly available code. (Will edit rarely)
        - viz: index.html file: the starting point of our app. Main HTML page of the site. The file that loads when our app is launched
            - div with id `root`: where our react app will load
        - favicon.ico
    - src: contains all react code (Most of coding will be done here)
        - App.css (CSS for root react component)
        - App.js    (Root react component)
        - App.test.js (Tests for root react component)
        - index.css (Site wide/global CSS)
        - index.js  (Global JS or starting JS)
        - logo.svg  (React logo)
        - serviceWorker.js
    - .gitignore: to ignore files/folders
    - package.json: contains all dependencies. Can add package later to this file.
    - package-lock.json: Lock file, don't edit directly
    - README.md: README instructions file containing info about project

### 4.4 Starting up the Server
1. Starting up the server:
    - `npm start`
2. Webpack: CRA is built on top of "**webpack**", a JS utility that:
    - enables **module importing/exporting**
        - packages up all CSS/images/JS into a single file for browser
        - Dramatically reduces # of HTTP requests for performance
    - **Hot realoading**: launched application in browser will automatically reload when you change a source file.
        - Is smart and tries to only reload relevant files
    - Enables **easy testing and deployment**
3. Benefit with CRA: webpack is preconfigured and we don't need to setup everything from scratch.

### 4.5 ES2015 Modules Import and Export
1. **Modules**:
    - CRA uses ES2015 "modules"
    - This is a newer, standardized version of Node's `require()`
    - import is used to export/import classes/data/functions between JS files
2. Demo:
    - `import React from 'react';`: will look for react folder in node_modules directory
    - `import ReactDOM from 'react-dom';`: will look for react-dom folder in node_modules directory
    - `import helpful from './helpers';`: will look for helpers.js file in current directory(src)
3. Difference b/w `export default` and `export {}`
    - helpers.js
    - utils.js
    - functions.js
4. `import React, { Component } from 'react';`: Here React is the default export while Component is the non default export
5. **To Default or not?**:
    - Conventionally, default exports are used when there's a "most-likely" thing to exporting.
    - Ex: in a React component file: it's common to have the component be the default export.
    - You never need to make a default export,(default exports are totally optional) but it can be **helpful to indicate the most important thing in a file**.

### 4.6 Modules Example

### 4.7 CRA and React component conventions
1. Each React component goes in a separate file.
    - Ex: src/Car.js for Car component
    - src/House.js for House component
2. Better to make file name of component same as component's name.
    - must be capital case
3. Components extends Component(imported from React)
    - Export the component as default object
4. CRA skeleton assumes top object is App in App.js
    - Best to keep this. (So will be easy for future devs to read our code by identifying the starting point)

### 4.8 CSS and assets in CRA
1. CSS:
    - Make a CSS file for each React component
        - Ex: House.css for House component
    - Import it at the top of House.js
        - CRA will automatically load that CSS
    - Conventional to add className="House" onto House div
        - And use that as prefix for sub-items to style
        - Ex: .House, .House-title, .House-address etc.
2. Images:
    - Store images in src/folder with the components. Or a subfolder
    - Load them where needed, and use imported name where path should go

## 5. Pokedex project
### 5.1 Create project with CRA & Pokecard component
1. `npx create-react-app pokemon`
2. `cd pokemon`
3. `npm start`
4. clean up App.js
5. Create src/Pokecard.js

### 5.2 Create Pokedex - List component
1. Pokedex will render list of Pokecard components
2. Pokedex.js - loop through Pokecard
3. Add Pokedex to App.js

### 5.3 Styling

### 5.4 Adding HQ images

### 5.5 Pokegame component
1. Winning hand is decided by comparing experience of all cards in one hand.

### 5.6 Styling

## 6. React State - Intro
### 6.1 Intro to state
1. Concept of state in React
2. How to model/initialize state in React
3. How to use events to trigger state changes

### 6.2 React Dev Tools
1. "React Developer Tools" extension by Facebook - Add to Chrome or Firefox
2. It will add "Components" and "Profiler" tabs in dev tools window
3. Components shows all the components + details viz: props etc.

### 6.3 What is State
1. In any sufficiently advanced web app, the UI has to be stateful.
    - Ex: different screens for logged-in and logged-out users
    - Ex: clicking a button opens up a pop up. keeping track of if popup is open/closed.
    - Ex: state of accordions
2. Note: state of FE is not always directly tied up with BE.
3. State changes.
    - State is designed to change in response to events
4. What does State track?
    - 2 types of things state on the client/FE keeps track of:
        - **UI logic**: The changing state of the interface e.g. state of a modal (open/closed)
        - **Business logic**: The changing state of data e.g. inbox messages read/unread etc.
5. Conventional state management with **Vanialla/jQuery state**
    - earlier we kept track of state with jQuery by selecting DOM elements and adding attributes. And state was **inferred from the DOM** itself.
    - React state is the **opposite**.

### 6.4 Initializing State
1. **Revision:**
    - Component
        - building block of React
        - combines logic (JS) and presentation (JSX)
    - props
        - data passed to a component (or found via defaults: defaultProps)
        - immutable; component can not change it's own props
    - state
        - internal data specific to a component
        - data that changes over time
2. **What is React State?**
    - In React, state is an instance attribute on a component
    - It's always on **object** (POJO) Plain Old JavaScript Object, since you will want to keep track of several keys/values.
3. **Initial State**
    - State should be initialized as soon as the component is created.
    - So, should be initialized in constructor function.
    - Note: if component is stateless, we can emit the constructor function.
    - constructor takes one argument, props. Ex: `constructor(props){ super(props) }`
    - We must call `super(props)` at start of a constructor, which **registers** our class as a React component.
    - After initialization, we can access state using `this.state`
4. Demo
    - Add Game.js
    - states can be checked out in dev tools by selecting a component
    - Note: With state, initialization is mandatory. With props: initialization is not reqd. By default: this.props exist but this.state is undefined.

### 6.5 Initializing State - Alternate shortcut
1. Using "proposal class properties"
    - creating a state property directly inside class. not inside constructor like earlier.
    - Not a JS standard way
    - But does the job with less amount of code
    - **Imp Note:** Not real JS. so the solution works only with babel. If our app is not created using CRA, we will have to add some extra babel settings by adding a plugin called: plugin-proposal-class-properties
    - Docs: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties (added by default for CRA)
    - Test code @ https://babeljs.io/repl to check how babel converts shortcut into JS valid code by adding constructor and defining property.

### 6.6 super() vs super(props)
1. constructor takes one argument, props. Ex: `constructor(props){ super(props) }`
2. We must call `super(props)` at start of a constructor, which **registers** our class as a React component.
3. **What & Why super()?**
    - when we extend/derive a component, we must call the constructor of parent class before calling the constructor of child class.
    - super() is used to call the constructor of parent class.
    - without super() it will throw error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    - Demo: super.js
4. **What & Why super(props)?**
    - Demo: SuperProps.js
    - Plain React componenet will work fine with just super() but if the component has props then we will have access to props in anywhere in class viz render method but not in constructor.
    - to get access to props in constructor: we must use super(props)

### 6.7 Setting state correctly with this.setState method
1. Never directly change the state
    - `this.state.score = 45;`
2. use `this.setState` method:
    - `this.setState()` is the built-in React method of changing a component's state.
    - Can call in any instance method except the constructor
    - Takes an object describing the state changes
    - Patches state object - keys that you didn't specify won't change
4. why this.setState and not this.state.score?
    - Reason 1: state change is **asynchronous**. Thus, better to use setState method where we can have a callback to do something after the state has been changed. We won't have callback with directly changing the state.
    - Reason 2: Docs: https://reactjs.org/docs/react-component.html#setstate
    - Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.
    - If we try to change state directly, then it will try to immediately change & re-render the component: which is not suggested. (For performance reasons)
    - Components re-renders when their state changes. (even if the value is not used in render)

### 6.8 Click events in React
1. **React Events:**
    - State most commonly changes in direct response to some event.
    - In React, every JSX element has built-in attributes representing every kind of browser event.
    - They are camel-cased. Ex: onClick and take callback functions as event listeners.
2. Demo: Click event: Button.js
3. Demo: this keyword: BrokenClick.js
    - this is undefined. Error: Cannot read property 'setState' of undefined
    - React calls handleClick method on clicking btn
    - But it doesn't remember to call it on our instance
    - Thus, it calls the method handleClick "out of context"
    - Solution: **.bind()** the method. So that our method is bind to our instance.
4. More ways to bind:
    - Class Properties: `handleClick = () => {}`: arrow fn in class properties
    - Bind in Render: `onClick={this.handleClick.bind(this)}`
    - Arrow Function in Render: `onClick={() => this.handleClick()}`
    - Doc: https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance

### 6.9 Click events in React - Alternate Syntax
1. Class Properties: `handleClick = () => {}`: arrow fn in class properties
    - Note: This babel class properties and not real JS
    - Check compiled code at: https://babeljs.io/repl
    - **Note:** So, if our app is not created with CRA and doesnot have babel, it won't work by default. We will have to add extra babel settings.

### 6.10 State Clicker
1. Clicker.js - On button click - generate random number and if number = 7, hide button and show message.

### 6.11 State vs Props, State as Props - Summary
1. State
    - term: state
    - structure: POJO{}
    - mutable: Yes
    - purpose: stores changing component data
2. Props
    - term: props
    - structure: POJO{}
    - mutable: No
    - purpose: stores component configuration
3. State as Props:
    - A common practice is: a stateful/smart parent component passing down it's state values as props to stateless/dumb child components
    - This concept is known as "downward data flow".
    - Component gets simpler as you go down the component hierarchy, and parents tend to be more stateful than their children.

## 7. Dice Game with React State
### 7.1 Project setup
1. `npx create-react-app dice`, `npm run start`

### 7.2 Create Die component

### 7.3 Crate Roll Dice component
1. Parent smart component which will pass state data as props to child component.

### 7.4 Styling and finishing touch
1. Shake animation: https://css-tricks.com/snippets/css/shake-css-keyframe-animation/

## 8. React State Patterns
1. How to update state based off of existing state
2. Properly manage state updates for mutable data structures
3. Best practices for modelling state and designing components

### 8.1 Updating existing state
1. setState is asynchronous
    - So, it's risky to assume previous call has finished when you call it. Also, React will sometimes batch (squash together) calls to setState together into one for performance reasons.
    - If a call to setState depends on current state, the safest thing is to use the alternate callback form.
    - `this.setState(callback)`
    - Ex: `this.setState(currState => ({ count: currState.count + 1 }))`
2. **Abstracting state updates**
    - The fact that we can pass a fn to `this.setState` lends itself nicely to a more advanced pattern called **functional setState**.
    - So, we can describe our state updates abstractly as separate functions.
    - Also, it will help during testing. Testing our state changes  is as simple as testing a plain function.\
    - The pattern is also useful in Redux.

### 8.2 Mutating State the safe way
1. Mutable data structures:
    - state not only store primitive data viz: numbers/strings but complex data structures as well: viz: objects, arrays, arrays of objects etc.
    - while updating nested data structures, do not mutate the DS straight away. Although it might work, it will cause problems sometimes
    - Solution: always make a new copy of DS and mutate the copy and reset the entire DS.
    - To achieve this we use pure functions viz: .map, .filter, .reduce. And also the spread operator(...)
    - **Note**: There is a slight **efficiency cost** due to the O(N) space/time required to make a copy, but it's almost always worth it to ensure that our app doesn't have extreme difficulty to detect bugs due to michevious side effects.
2. Summary
    - While it sounds oxymoron, immutable state means that there is an old state object and a new state object. Both of which are snapshots in time.
    - The safest way to update state is to make a copy of it, and then call this.setState with the new copy.

### 8.3 Designing State
1. Best designing practices for state:
    - **Minimizing state:**
        - In React, try to put as little data in state as possible.
        - Litmus test: does x change? If not, x should not be part of a state. It should be a prop
        - Is x already captured by some other value y in state or props? Derive it from there instead.
        - Ex: For user model: name, birthday, age doesn't change. So, should be in prop and not state. but mood of user changes and thus should be in state.
    - **Downward Data flow**:
        - State should live on parent.
        - parent component should manage state and have a bunch of dumb stateless child display components.
        - It makes debugging easier, because the state is centralized. It's easier to predict where to find state.

## 9 State examples
### 9.1 Coin Flipper
1. Keep track of total coin flips, total head, total tails count, current flip state.
2. change image and alt tag based on head/tail

### 9.2 Color Boxes
1. On clicking box, it should change color. Store it in individual Box component.
    - Color shouldn't repeat twice in a sequence.
2. Challenge: Change parent state based on changes in child component.

## 10 React Events - In Depth
1. Event handlers in React component
2. Method binding to preserve the "this" context with event handlers
3. Pass event handlers down as props to Child components
4. The "key" prop that React asks for when mapping over data

### 10.1 Commonly used React Events
1. React Events:
    - We can attach event handlers to HTML elements in React via special reserved attributes.
    - can do in Vanilla JS too but the syntax is a bit different.
2. Event attributes:
    - Mouse events: onClick, onMouseOver etc
    - Form events: onSubmit etc
    - Keyboard events: onKeyDown, onKeyUp, onKeyPress
    - Docs: https://reactjs.org/docs/events.html#supported-events
3. Examples:
    - WiseSquare.js - onMouseEnter
    - AnnoyingForm.js - onKeyUp
    - CopyDemo.js - onCopy. Note: some event to trigger onCopy. It copies the content. We can add extra code if required to erased data from clipboard.

### 10.2 Method Binding
1. this keyword:
    - be careful while using this with event handlers
    - We will lose the context of "this" when we pass a function as a handler
2. Fixing Binding:
    - Use bind inline. Ex: `onMouseEnter={this.dispenseWisdom.bind(this)}`
        - Pros: Very explicit
        - Cons:
            - What if we need to pass the event handler to multiple components?
            - new fn created on every render (since, bind creates a new fn) - performance issue
    - arrow inline. Ex: `onMouseEnter={() => this.dispenseWisdom()}`
        - Pros: No mention of bind. Thus, much clear code.
        - Cons:
            - Intent less clear. Since no mention of bind.
            - What if we need to pass the event handler to multiple components?
            - new fn created on every render - performance issue
    - Method bind in constructor. Ex: `this.dispenseWisdom = this.dispenseWisdom.bind(this);`
        - Pros: 
            - Only need to bind once! Fn is not created on every render
            - More performant!
            - Best
        - Cons:
            - More code. Ugly code.
3. Docs: https://reactjs.org/docs/handling-events.html

### 10.3 Alternate Binding with Class properties
1. Docs:
    - https://reactjs.org/docs/handling-events.html
    - https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
    - https://stackoverflow.com/questions/46684753/what-is-a-babel-preset-what-does-stage-mean
2. Ex: `dispenseWisdom = () => {}`
3. Note: 
    - Experimental feature.
    - Not part of React yet. Still in stage 2.
    - Will work only if babel support is added.
    - Works by default with CRA since babel settings are pre configured.
    - Very popular already because of the simplicity.  

### 10.4 Bind with Arguments
1. Sol: 
    - With bind: `onClick={this.changeColor.bind(this, c)}`
        - Not ideal: new fn will be created with every render of component
    - Without bind: with arrow fn: `onClick={() => this.changeColor(c)}`
        - Not ideal: new fn will be created with every render of component
2. Note: `onClick={this.changeColor(c)}` will immediately call the fn and won't work.

### 10.5 Passing method to Child components
1. Common react pattern
2. Idea: Children are not often stateful but need to tell parents to change state.
3. Data flow:
    - Parent component defines the fn
    - fn is passed as a prop to child component
    - child component invokes the prop
    - parent fn is called, setting new state
    - parent component is re-rendered along with it's children
4. Ex: NumberList.js and NumberItem.js with bind:
    - Pass fn as prop: `remove={() => this.remove(n)}`
    - Con: If we pass/bind fn like this in render. It will create a fn every time component renders. Performance issue.
5. Better Solution with no bind: BetterNumberList.js and BetterNumberItem.js
    - By default event is passed as argument with event handler. We will use that to pass data to parent.
    - State is managed in parent and Child gets data from props and ivokes parent methods using props.
6. Where to bind?
    - The higher the better - don't bind in the child component if not needed
    - For parameter, pass it down to the child as a prop, then bind in parent and child.
    - Avoid inline arrow functions or inline binding if possible. Try to bind in constructor.

### 10.6 Naming Conventions
1. Entirely upto our preference
2. For consistency, try to follow the action/handleAction pattern.
    - Ex: parent will have fn named as remove, passed as prop to child and child will have handleRemove as fn name which will then call props.remove()
    - Ex2: parent - add(), child - handleAdd()

### 10.7 React keys
1. Lists and Keys:
    - key is a special string attr to include when creating list of attributes.
    - Keys help React identify which items have changed, are added, or are removed. 
    - Keys should be given to the elements inside the array to give the elements a stable identity
    - Note: if Key is not given: while removing all similar items will be removed. Also addition won't work properly
    - Docs: https://reactjs.org/docs/lists-and-keys.html#keys
2. Picking a key:
    - Use string that uniquely identifies item among siblings.
    - Ex: data id from API data
3. Last resort:
    - When we don't have stable IDs say from DB, we can use iteration index as a key.
    - Not a good idea. But an option.
    - Don't use indexes for keys if item order may change or items can be deleted. 
        - This can cause performance problems or bugs with component state.
        - Docs: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
4. Better alternatives:
    - Use packages like uuid or shortid

## 11 Hangman - Exercise
### 11.1 Adding Keys
1. Use letter itself - unique
    - Or use iteration index (Not ideal)

### 11.2 Tracking incorrect guesses

### 11.3 Add Game Over on Loss

### 11.4 Add Alt Text

### 11.5 Randomizing Words

### 11.6 Add reset button

### 11.7 Winning message and Styling

## 12 Lights out

### 12.1 Displaying the Game Board

### 12.2 Flipping cells
1. Flip clicked and neighbor cells

### 12.3 Winning state of Game
1. Check if every cell has turned off

### 12.4 Styling and Refactoring

## 13 Forms
1. Build Forms
2. Understand Controlled components

### 13.1 Intro to React Forms
1. **Forms**:
    - HTML form elements work differently than other DOM elements in React.
        - Form elements naturally keep some internal state. Ex: firstname, lastname etc which will be submitted on form submit.
2. **Controlled Component**:
    - Provides a way for React to:
        - handle submission of form
        - has access to the data the user entered
    - Thus react having full control over form
3. How Controlled Form works?
    - Value for form element is set from state e.g. `this.state.fullName` - making the React state the truth of truth.
    - `handleChange` runs on every keystroke to update the React state, the displayed value will update as the user types.

### 13.2 Forms with Multiple Inputs
1. For `handleChange(evt) {}` event we will use the ES2015 Feature: **computed property names**
    -   ES2015 introduced a few object enhancements.
        - It includes the ability to create objects with dynamic keys based on JS expressions.
        - The feature is called computed property names
    - Ex: ES5: `var dogData = {}; var microchip = 12345678; dogData[microchip] = "Stella"`
    - Ex: ES2015: `let microchip = 12345678; let dogData = {[microchip]: "Stella"}` No need to use array assignment like earlier, property name can be directly computed in Object with `[]`
2. Make sure input names and properties names in state are same.

### 13.3 htmlFor attribute
1. In default HTML label should have `for` tag matching id of input. But in react since `for` keyword is reserved for for loops, we must use `htmlFor` instead. just like `className and class`

### 13.4 Passing data upwards
1. Send form data From ShoppinglistForm.js to ShoppingList.js

### 13.5 UUID library
1. Docs: https://github.com/uuidjs/uuid
2. `npm install uuid`
3. ShoppingList.js: `import { v4 as uuid } from 'uuid';`
4. `id: uuid()` generates unique id across application.

## 14. Forms - Exercise - Color Box Maker
1. Create a form that will help us create a box on DOM with specific layout.

### 14.1 BoxList, Box component
### 14.2 BoxForm Component
### 14.3 Removing color boxes
1. For removing box: for unique id: we will use uuid

## 15. Forms - Exercise - ToDo
### 15.1 TodoList and Todo.js
### 15.2 Adding NewTodoForm.js

### 15.3 Removing Todos
1. Usee uuid

### 15.4 Editing Todos
1. Todo.js: Show another form in edit mode

### 15.5 Toggling Todo completion

### 15.6 Styling

## 16. Exercise - Yahtzee

## 17. React Life Cycle Methods
1. Component life cycle
2. mounting, updating and unmounting
3. less commonly used life cycles

1. **Component life cycle**:
    - Every component comes with methods that allow developers to update application state & reflect the changes to the UI before/after key react "events"
    - 3 main phases
        - mounting, updating, unmounting.
2. React Mounting sequence:
    - Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    - constructor()
        - often used for initializing state or binding event handlers to class instance.
    - render()
        - After constructor, react calls render(). It tells React what should be displayed. React updates the DOM to match the output of render().
    - componentDidMount

### 17.1 componentDidMount
1. This method runs after the component is mounted.
2. "Mounting" is the first time the component is rendered to DOM.
3. Note: If we setState or do any other update in componentDidMount, it will re-render the component.
4. Note: constructor and render method are called twice in React strict mode to make sure that there are no bugs. `<ReactStrictMode>` can be removed in index.js: if we don't want this explicit feature.
5. Note: Although we can set state/perform AJAX calls etc in constructor. Bt it is recommended to do such actions in componentDidMount

### 17.2 Load data via AJAX - componentDidMount
1. `componentDidMount` is also quite useful for making AJAX requests when the component is mounted.
2. `npm install axios`: for making API calls
3. React Doc suggests that API calls and setStates should be done in componentDidMount. It will work in constructor but not recommended. (For complicated reasons)
    - Read more at: https://github.com/reactjs/reactjs.org/issues/302

### 17.3 Adding animation loaders
1. Show loader at first and hide after API call is finished

### 17.4 Loading data with async functions
1. `async componentDidMount() {} and await`:
    - async await is a much cleaner approach to handle async calls than using `.then` method.

### 17.5 componentDidUpdate
1. Updating ( new props viz if parent state changes: child props will change, setState(), forceUpdate() ) ---> render() ---> componentDidUpdate()
2. Updating:
    - This is a suitable place to implement any side effect operations.
    - Ex: 
        - syncing up with localStorage
        - autosaving
        - updating DOM for controlled components

### 17.6 PrevProps and PrevState in ComponentDidUpdate
1. `componentDidUpdate()`:
    - This method is called after every render occurs
    - We can do a comparisio b/w previous and current props and state: `componentDidUpdate(prevProps, prevState)
    - Note: componentDidUpdate will call every time component is updated. So any code written under it might execute repeatedly. Which might cause a performance issue. To fix this, we should add some conditions to check and run code only if prevState or prevProps are different than current props or state.

### 17.7 componentWillUnmount()
1. componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
2. Perform any necessary cleanup in this method, such as 
    - invalidating timers, 
    - canceling network requests, 
    - or cleaning up any subscriptions that were created in componentDidMount()
3. calling `setState` here is useless. There will be no re-rendering after this.
4. Application example:
    - clear the timer whenever clock is removed `componentWillUnmount(){ clearIntervalI(this.timerID); }`

## 18 Life Cycle Methods & API exercise - Card dealer
### 18.1 Requesting a Deck ID from API
1. `npm install axios`
2. api endpoint: https://deckofcardsapi.com/api/deck/new/shuffle

### 18.2 Fetching new cards with AJAX
1. On btn click, call API with axios, async - await.

### 18.3 Add Card component
1. Card.js - stateless class component

### 18.4 Randomly Transforming Cards
1. Adding translate and rotation to individual card image

### 18.5 Styling

## 19 Dad Jokes
### 19.1 Fetching new jokes from API
1. API: https://icanhazdadjoke.com/
2. `npm install axios`
3. JokeList.js

### 19.2 Styling
1. https://cssgradient.io/

### 19.3 Upvoting and Downvoting Jokes

### 19.4 Styling Joke Component
1. emoji css: https://emoji-css.afeld.me/

### 19.5 Dynamic color & emojis

### 19.6 Syncing with Localstorage
1. Store jokes from API call in localStorage and if localStorage has 10 jokes, no more API call is reqd

### 19.7 Fetch Jokes and add to existing list
1. Also fix votes bug by storing data into localStorage after up/down vote

### 19.8 Loading spinner

### 19.9 Preventing Duplicate Jokes
1. use a Set - array with unique items only

### 19.10 Sorting Jokes
1. Use sort method: `sort((a,b) => b.votes - a.votes)`

## 20. React Router
1. Client side routing and it's uses
2. Client side vs server side routing
3. Client side routing with React

### 20.1 Intro to Client side routing and Routing with state
1. **Server side routing:**
    - Traditional routing is "Server side routing".
        - Ex: clicking a <a> link causes browser to request a new page & replace entire DOM.
    - Server decides what HTML to return based on URL requested, entire page refreshes.
2. **Client Side Routing:**
    - Routing on browser side without sending any request to server.
3. **Faking Client Side routing with state:**
    - We can create routing using only state and click events. It does let us show different pages by coding state in FE without sending any request to server.
    - Cons: 
        - The navigations aren't recoreded in browser history. So the browser forward and backward button won't work. 
        - Also React doesn't like anchor tag without href. Creates warnings.
        - URL doesn't change on clicking navbar items. Thus, can not bookmark a page.
        - Can't implement more complex route/pattern matching.
    - Sol: **React router**: Which helps us navigate while recording the navigation in browser history.

### 20.2 Client side Routing with React Router DOM
1. React can give us real Client side routing with React Router DOM.
    - Client-side routing handles mapping b/w URL bar and the content a user sees via browser than the server.
    - Ex: SPAs
    - We use JS to manipulate the URL bar with a Web API called "**history**"
2. React Router alternatives:
    - Aviator, Backbone, component-router, Finch, mvc-router etc.
3. React Router Docs
    - https://reactrouter.com/
    - https://reactrouter.com/web/guides/quick-start
4. Install: `npm install --save react-router-dom`
5. Including the Router with BrowserRouter and Route:
    - Wrap `<App/>` renders with a `<BrowserRouter>` in index.js file
    - In App.js where components will be rendered, use `Route` to map path to a component.

### 20.3 Using Switch and Exact
1. React tries to match as many things as possible in the Route. So for /dog: both About and Dog component will be shown.
2. Solution: Use **Switch** around Route. So at any time only one Route will be shown.
    - Note: The first match will be shown. So, order does matter.
3. Add exact to make sure the component is shown only on exact match.
    - Alternate solution: Change order to make sure the match works
4. Rule of Thumb: Add exact to all routes unless there is a valid reason not to. Also put all Routes in Switch since most of the time we want only one Route to be active at a time.

### 20.4 Link Component to replace anchor tag
1. Navigating with anchor tags causes page re-rendering and thus not client side rendering. As it sends GET request to server.
2. Sol: Link Component
    - The `<Link>` component acts as a replacement for `<a>` tags.
    - Instead of `href` attribute, `<Link>` uses `to` prop.
    - Clicking on `<Link>` does not issue a GET request.
        - JS intercepts click and does client-side routing.

### 20.5 NavLink Component - activeClassName and exact
1. `<NavLink>` is just like `<Link>`, with one additional feature.
    - Based on active page the link will get a CSS class of active
    - Can stylize using the `activeStyle` or `activeClassName` props
2. Note: activeClassName will be added for any matches. To make it appear only for exact match pass the exact prop

### 20.6 Render props vs component props in Router
1. component props:
    - When you use component prop, the component is instantiated per every call of Route#render. It means that, for your component that you pass to component prop of Route, constructor, componentWillMount, and componentDidMount will be executed every time the route is rendered.
2. render props:
    - Compared to that, if you use render prop, the component is evaluated on every Route#render. Remember that every component is a function? This function will be executed as is, without any lifecycle methods.
3. Docs:
    - https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render
4. **Rule of Thumb:**
    - If no props is being passed: use component as prop
    - If props is being passed: use render as prop

## 21 React Router Vending Machine Exercise
### 21.1 Adding the Vending M/c routes
1. Add BrowserRouter to index.js and wrap App component with it.
2. Add Switch and Route to App.js for individual components. (also mention exact prop)

### 21.2 Adding Links

### 21.3 Creating the Navbar with NavLink
1. Use NavLink instead of Link to show activeClassName. Also pass exact prop to make sure active class appears only with exact match.

### 21.4 props.Children
1. Used to create common wrapper across application.
2. Can get content with `{this.props.children}`
3. Wrap content in individual components: Sardines.js, Soda.js etc.

## 22 React Router Patterns
### 22.1 Working with URL params - props.match.params.name
1. URL parameters
    - "/food/:name" everything following colon is treated as a URL param
2. React route props:
    - https://reactrouter.com/web/api/Route/route-props
    - match, location, history
3. URL params are available at: `routeProps.match.params.name`
4. Note: Now, the food component is not reusable as normal component with props. And only suitable as a component with Route url params. So plan accordingly.
5. Note: route props are automatically passed if we use Route with component prop. But if we want additional props to be passed, we must use render prop instead of component.

### 22.2 Multiple Route Params
1. `path='/food/:foodName/drink/:drinkName'`

### 22.3 Including 404 - Not Found / catch all Route
1. Add Route with no path to the bottom of list of Routes. 
    - Note: 
        - Add Switch to make sure only one Route is accessible at a time.
        - Order is important. It must be at the very bottom.
2. The last route will catch all Routes other than the one mentioned. and show the 404 content.

### 22.4 Writing a simple search form
1. FoodSearch.js

### 22.5 The Redirect component
1. **Client side redirects**
    - With React Router we can mimic behavior of server-side redirects.
    - Useful after certain user actions e.g. submitting a form
2. How to Redirect
    - `<Redirect>` component: using a component in JSX
    - calling `.push` method on `history` route prop

### 22.6 Redirecting using props.history.push
1. Note: make sure that routeProps are available to FoodSearch.js. So pass prop using render or component prop in App.js

### 22.7 Redirect vs History
1. Redirect: The navigation through redirect is not recorded in browser history.
2. props.history.push: navigation is recorded in browser history.
3. Note: Important to avoid history.push in cases where user might end up in infinite loop on same page and won't be able to click browser's back button to go to prev page. So in such cases: better use Redirect

### 22.8 withRouter Higher Order Component
1. To use props.history.push from a component which is not part of Route.
2. Navbar.js - Wrap Navbar component with withRouter. It tells React to make react-router features available for the Navbar component although it is not defined as Route.

### 22.9 Implementing a back button
1. `this.props.history.goBack`
2. `this.props.history.goForward`
3. Check all methods on React props list

## 23 Exercise - React Router with Bootstrap - Dog Finder
### 23.1 Bootstrap in React
1. https://reactstrap.github.io/ : Bootstrap with React wrapper
    - `npm install --save reactstrap react react-dom`
2. Manually install bootstrap: https://getbootstrap.com/
    - `npm install --save bootstrap`
    - index.js: `import 'bootstrap`. Test by running app. (This includes only bootstrap js. css must be included separately)
    - bootstrap needs jquery and popper js as dependencies.
    - `npm install --save jquery popper.js`
    - Note: Bootstrap css also must be included manually.
3. Router: - `npm install --save react-router-dom`

### 23.2 DogList Component
1. DogList component with dog received as props from App.js

### 23.3 DogDetail Component
1. Write a fn getDog to pass correct dog prop based on Route

### 23.4 Navbar component
1. Auto populate navigation with dogs names from props.
2. Use NavLink for active class item
    - Note: NavLink by default will add a class 'active' which can be changed by using activeClassName prop if reqd.

### 23.5 Refactoring and Extracting our Routes, Adding Redirect
1.  Move the Switch and Routes code from App.js to Routes.js file.
2. Add Redirect to Routes.js as fail safe in case no Route matches.
    - Ex: http://localhost:3000/dogstest

### 23.6 Refactoring
1. Move container to App.js
2. Styling
3. Add links for dog names in DogList.js

## 24. Color Project
1. https://flatuicolors.com/ - color picker
2. https://materialuicolors.co/ - color picker with level

**Tools Used**
1. https://material-ui.com/: React components for faster and easier web development.
2. https://github.com/gka/chroma.js: small-ish zero-dependency JavaScript library (13.5kB) for all kinds of color conversions and color scales.
3. https://github.com/missive/emoji-mart: Emoji Mart is a Slack-like customizable emoji picker component for React
4. https://github.com/clauderic/react-sortable-hoc: A set of higher-order components to turn any list into an animated, accessible and touch-friendly sortable list.
5. https://github.com/nkbt/react-copy-to-clipboard: Copy to clipboard React component
6. React Pure Component: https://reactjs.org/docs/react-api.html#reactpurecomponent
7. https://github.com/NewOldMax/react-form-validator-core#readme : Simple form validation component for react forms
8. https://github.com/reactjs/react-transition-group: A set of components for managing component states (including mounting and unmounting) over time, specifically designed with animation in mind.
9. https://cssinjs.org/?v=v10.3.0: JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, server-side or at build time in Node.

### 24.1 Palette Component
1. Create Palette component - each palette can have: name, id, emoji & colors.
2. Create seedPalletes.js which will contain all the palletes info in an array of objects.

### 24.2 Color Box Component
1. Each Palette can have multiple color boxes

### 24.3 Styling Color Box

### 24.4 Copy To Clipboard
1. https://www.npmjs.com/package/react-copy-to-clipboard
2. `npm install --save react-copy-to-clipboard`
3. Wrap the element with `CopyToClipboard` and mention the data to copy in `text` prop.

### 24.5 Copy Overlay Animation
1. Grow the animation from center of box that is clicked.
2. Animate the text and color code with a transition delay.

### 24.6 Add Color Helper to Generate shades of colors with chroma js
1. Manipulating colors is difficult. Better to handle with library viz: chroma.js
    - https://gka.github.io/chroma.js/
2. `npm install chroma-js`

### 24.7 Adding Color Slider using rc-slider
1. `npm install rc-slider`
2. Docs for usage: https://github.com/react-component/slider/

### 24.8 Styling the Color Slider
1. Make sure our style comes after rc-slider css so overwriting works.

### 24.9 Adding Navbar component
1.  Create Navbar and move slider from Palette to Navbar.js

## 25 Color Project - Pt 2
### 25.1 Install Matrial UI and Add Select component
1. Docs: https://material-ui.com/
2. `npm install @material-ui/core`
3. Select component: https://material-ui.com/components/selects/

### 25.2 Adding Snackbar (Feedback component from MUI) to show feedback
1. Install MUI icons: `npm install @material-ui/icons`
2. Add Snackbar to Navbar.js

### 25.3 Add Palette Footer
1. Add footer to Palette.js 
2. Style adjustments

### 25.4 Integrating React Router
1. `npm install react-router-dom`
2. Add BrowserRouter to index.js - wrap around App
3. Add Route and Switch to App.js

### 25.5 Finding Palettes from route
1. Create findPalette fn in App.js

### 25.6 PaletteList component and Links
1. Create PaletteList component - should show links for all palettes from seedPalettes

## 26 Color Project - Pt 3 - JSS & withStyles
### 26.1 Introducing withStyles HOC
1. Writing css in JS file
    - Styled components (popular package)
    - withStyles (included in MUI): converts SCSS(SASS) to CSS-In-JS
2. **withStyles**:
    - Docs: https://material-ui.com/styles/basics/
    - `npm install @material-ui/styles`
    - set of classes with sass structured styles - camelCase and values should be in ""
    - wrap component with withStyles to make a HOC
3. **Benefits**:
    - Dynamic CSS
    - Component scoped CSS thus not affecting globally

### 26.2 Styling MiniPalette using withStyles

### 26.3 Styling PaletteList using withStyles

### 26.4 Finishing Style for MiniPalette

## 27 Color Project - Pt 4
### 27.1 Linking to Palettes

### 27.2 Single Color Page and More link on Color Box
1. For see more link: add stopPropagation to make sure the box/parent click event for copy does not trigger while routing

### 27.3 Creating Single Color Palette
1. More color palette to show color levels after clicking more on color box

### 27.4 Displaying shades in Single Color Palette

### 27.5 Adding Navbar and Footer to SingleColorPalette

### 27.6 Add Go Back Link

### 27.7 Dynamic Text color based on luminance
1. Use luminance property from chroma js: `chroma(background).luminance()`

### 27.8 Refactor ColorBox styles using withStyles
1. Use withStyles from material ui and create css dynamically in JS instead of multiple css classes in css.

### 27.9 Refactor ColorBox styles using withStyles

## 28 Color Project - Pt 5
### 28.1 Refactor Palette Styles
1. Moving styles from .css to .js file using withStyles from material ui

### 28.3 Move styles out of components into new folder
1. Move styles from components to separate js file in src/styles folder. To separate component logic and styles code.

### 28.4 Refactor Navbar CSS
1. Refactor Navbar Styles and Remove CSS
2. Moving Navbar CSS to withStyles dynamic classes is tricky. Because these class names can not be dynamic and must match class names from material ui for proper overriding.

### 28.5 Adding NewPaletteForm
1. Form to create and add a new palette

### 28.6 Adding Slide-Out Drawer
1. https://material-ui.com/components/drawers/#persistent-drawer

### 28.7 Adding Color Picker Component using 'react-color' package
1. Adding Color Picker component and buttons to drawer
2. https://casesandberg.github.io/react-color/
3. `npm install --save react-color`
4. Add ChromePicker

### 28.8 Connecting Color Picker to Button

### 28.9 Creating Draggable Color Box
1. Color Boxes to show on NewPaletteForm after adding new color Palette. Later we will make it draggable.

### 28.10 Form Validator using react-material-ui-form-validator
1. https://github.com/NewOldMax/react-material-ui-form-validator#readme
2. `npm install react-material-ui-form-validator`
3. Add 3 validations
    - required (default)
    - unique color (custom)
    - unique color name (custom)

## 29 Color Project - Pt 6
### 29.1 Saving New Palettes
1. Send new palette info to App.js
2. Push received palette data in App.js to seedPalettes

### 29.2 Add Palette Name Form

### 29.3 Styling Draggable Color Box

### 29.4 Adding Color Box Delete

### 29.5 Implement Drag and Drop Feature
1. Options:
    - react dnd: https://github.com/react-dnd/react-dnd : not much support
    - react beautiful dnd: https://github.com/atlassian/react-beautiful-dnd : only vertical drag and drop
    - react sortable hoc: https://github.com/clauderic/react-sortable-hoc : less popular but both vertical & horizontal dnd
2. `npm install react-sortable-hoc --save`

### 29.6 Clear Palette and Random Color Buttons
1. Clear all colors from palette
2. Generate Random colors
3. Disable random colors btn if total colors in palette reaches 20

### 29.7 Extract New Palette Nav
1. Move Navigation bar: AppBar to a new component from NewPaletteForm to PaletteFormNav.

### 29.8 Extract Color Picker Component
1. Refactor to move color picker related code to own file ColorPickerForm.js from NewPaletteForm.js

### 29.9 Styling Palette Form Nav

### 29.10 Styling Color Picker Form

## 30 Color Project - Pt 7
### 30.1 Adding Modal Dialog
1. Move Save Palette form into Dialog - Palette Meta Form

### 30.2 Styling Dialog

### 30.3 Closing Form dialog and adding Emoji
1. https://github.com/missive/emoji-mart
2. `npm install --save emoji-mart`

### 30.4 Finish Emoji Picker Form
1. On saving title, in next pop up show emoji form. On selecting emoji, hide the popup, save data and redirect to landing page.

### 30.5 Moving JSS styles out

### 30.6 Tweak Form Styles

### 30.7 Saving to LocalStorage

### 30.8 Adding Mini Palette Delete Button/icon
1. Overriding styles from material ui components: https://material-ui.com/customization/components/#overriding-with-inline-styles

### 30.9 Finishing Mini Palette Delete implementation

### 30.10 Create Responsive sizes helper and style ColorBox
1. Bootstrap breakpoints: https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
2. Create responsive sizes helper in src/styles/sizes.js and use viz `[sizes.down("lg")]: {...}`

### 30.11 Make ColorBox responsive

### 30.12 Make Form and Navbar Responsive

## 31 Color Project - Pt 8
### 31.01 Make Palette List responsive

### 31.02 Add bg svg to PaletteList
1. svgbackgrounds.com
2. https://www.svgbackgrounds.com/#confetti-doodles
3. Can customize colors, scale and opacity

### 31.03 Animate palette deletion - fade animations with transition group
1. To clear localStorage: `window.localStorage.clear()`
2. React Transition group: https://reactcommunity.org/react-transition-group/transition-group
3. `npm install react-transition-group --save`

### 31.04 Delete Confirmation Dialog
1. https://material-ui.com/components/dialogs/#simple-dialogs

### 31.05 Fix delete dragging bug
1. Intermittent issue: the draggable color palette items can not be deleted some times. Because the click event on delete icon is being considered as drag event. "Click event is being swallowed"
    - https://github.com/clauderic/react-sortable-hoc#click-events-being-swallowed
    - `distance={20}` can be passed to DraggableColorList or the SortableContainer. which will make sure that a movement of more than 20 px is decided as drag.

### 31.06 Animating Route Transitions
1. Use TransitionGroup and CSSTransition from react-transition-group to wrap Routes in App.js

### 31.07 Refactoring Route Transitions
1. Create a Page component and render all content using `props.children`
2. Current route animation is fade: with opacity. From right to left: use `transformX()` for `page-enter` and `page-exit` classNames.

### 31.08 Optimizing with PureComponent
1. In current implementation, on deleting a MiniPalette from PaletteList, all MiniPalettes in PaletteList component are re-rendered although only one item is deleted. We will fix this using `PureComponent`.
2. React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.
3. If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.
4. Avoid arrow fn in render to avoid re-rendering

### 31.09 Clean Up - Fix navbar slider size and add classnames to ColorBox
1. classNames package as an alternate to using dynamic class names with back tick
2. `className={classNames(classes.copyOverlay, {[classes.showOverlay]: copied})}`
    - always have copyOverlay and conditionally add showOverlay class if copied is true

### 31.10 Clean up files - Re organize

### 31.11 Fix issues with NewPaletteForm
1. Issue: If all palettes are deleted, on create palette pre population is failing. To fix this, use seedPaleettes instead of props. as prop items are getting deleted.
2. For text on color box in create pallete screen: add dynamic color.

### 31.12 404 url and Preventing duplicate random colors
1. Add new route to App.js for 404 url
2. Prevent duplicate random colors in NewPaletteForm.js

## 32 React Hooks
### 32.1 Intro to Hooks and useState
1. https://reactjs.org/docs/hooks-intro.html
2. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
3. https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy
4. Hooks are not very commonly used yet. But still better to know since hooks will be the future. 
5. Benefits of Hooks:
    - Hooks are easier to understand. 
    - Less code. 
    - No need to write class based component. 
    - And easier to reuse between components.
6. useState provides:
    - the piece of state
    - function to update that piece of state
    - initial value for piece of state
    - Ex: `const [count, setCount] = useState(0)`
7. hooks makes it easier to implement functionalities with few lines of code. Compare CouterClass and CounterHooks
