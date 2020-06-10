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

### 1.5 First React Component
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
