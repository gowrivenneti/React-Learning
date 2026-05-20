## 📘 What is React?

React is a JavaScript library used to build interactive and dynamic user interfaces.

It was developed by Meta (Facebook).

React helps developers create reusable UI components and efficiently update webpages using the Virtual DOM.

---

# ⚡ What is Vite?

Vite is a modern frontend build tool used to create fast React applications.

It provides:

* Fast development server
* Hot Module Replacement (HMR)
* Faster builds

### 🔹 React Project Creation Using Vite

```bash
npm create vite@latest
npm install
npm run dev
```

---

# ⚛️ JSX

JSX stands for JavaScript XML.

It allows developers to write HTML-like syntax inside JavaScript.

### 🔹 Example

```jsx
const element = <h1>Hello React</h1>;
```

### 🔹 Features of JSX

* Easy to read
* Allows JavaScript inside HTML
* Used to create UI in React

### 🔹 Important Rules

* JSX must return one parent element
* Use className instead of class
* Close all tags properly

---

# 🧩 Components

Components are reusable pieces of UI in React.

React applications are built using components.

### 🔹 Examples of Components

* Navbar
* Footer
* Card
* Button
* Sidebar

### 🔹 Benefits

* Reusability
* Better organization
* Easy maintenance
* Scalable applications

---

# ⚛️ Functional Components

Functional components are JavaScript functions that return JSX.

Modern React mainly uses functional components.

### 🔹 Example

```jsx
function Welcome(){
  return <h1>Hello Gowri</h1>;
}
```

### 🔹 Features

* Simple syntax
* Easy to understand
* Supports React Hooks

---

# 📦 Props

Props stands for Properties.

Props are used to pass data from parent component to child component.

### 🔹 Example

## Parent Component

```jsx
<Card name="Lucky" age={15} />
```

## Child Component

```jsx
function Card(props){
  return <h1>{props.name}</h1>;
}
```

### 🔹 Features of Props

* Read-only
* One-way data flow
* Makes components reusable

---

# ⚡ Destructuring Props

Destructuring is a cleaner way to access props.

### 🔹 Without Destructuring

```jsx
function Card(props){
  return <h1>{props.name}</h1>;
}
```

### 🔹 With Destructuring

```jsx
function Card({name}){
  return <h1>{name}</h1>;
}
```

### 🔹 Advantages

* Cleaner code
* Easy to read
* Modern React practice

---

# 🔀 Conditional Rendering

Conditional rendering means displaying UI based on conditions.

### 🔹 Methods of Conditional Rendering

* if statement
* Ternary operator
* Logical AND (&&)

---

# 🃏 Card Component

A card component is used to display information inside a styled container.

### 🔹 Example

```jsx
function Card(){
  return(
    <div className="card">
      <h2>Lucky</h2>
      <p>My dog is very innocent.</p>
    </div>
  );
}
```

### 🔹 Uses

* Product cards
* User profile cards
* Dashboard cards

---

# 🔘 Button Component

A button component is a reusable button UI.

### 🔹 Example

```jsx
function Button(){
  return(
    <button>Click Me</button>
  );
}
```

### 🔹 Uses

* Form submission
* Navigation
* Event handling

---

# 🎨 External CSS

External CSS stores styles in a separate CSS file.

### 🔹 Example

## Card.css

```css
.card{
  background-color: yellow;
  padding: 10px;
}
```

## Card.jsx

```jsx
import './Card.css';
```

### 🔹 Advantages

* Easy to manage
* Reusable
* Cleaner structure

---

# 🎨 CSS Modules

CSS Modules provide locally scoped CSS.

It prevents class name conflicts.

### 🔹 Example

## Card.module.css

```css
.card{
  background-color: lightblue;
}
```

## Card.jsx

```jsx
import styles from './Card.module.css';

function Card(){
  return <div className={styles.card}>Hello</div>;
}
```

### 🔹 Advantages

* Scoped styling
* No global conflicts
* Better for large projects

---

# 🎨 Inline CSS

Inline CSS applies styles directly inside JSX using JavaScript objects.

### 🔹 Example

```jsx
function App(){

  const styles = {
    backgroundColor: 'yellow',
    padding: '10px'
  };

  return(
    <div style={styles}>Hello</div>
  );
}
```

### 🔹 Important Rules

* Use double curly braces
* Use camelCase properties
