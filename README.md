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
