# ⚛️ React Lifecycle in Class vs Functional Components

A complete guide to React lifecycle methods and their equivalents using Hooks in functional components.

---

## 🧠 Lifecycle Method Mapping

| 📦 Class Component         | ⚛️ Function Component (Hook)           | 📌 Use Case                   |
| -------------------------- | -------------------------------------- | ----------------------------- |
| `constructor`              | `useState`, `useReducer`               | State initialization          |
| `componentDidMount`        | `useEffect(() => {...}, [])`           | Run code after initial mount  |
| `componentDidUpdate`       | `useEffect(() => {...}, [deps])`       | Run code on update            |
| `componentWillUnmount`     | `useEffect(() => return cleanup, [])`  | Cleanup logic                 |
| `getDerivedStateFromProps` | `useEffect`, `useMemo`                 | Sync props with state         |
| `shouldComponentUpdate`    | `React.memo`, `useCallback`, `useMemo` | Performance optimization      |
| `getSnapshotBeforeUpdate`  | `useLayoutEffect`                      | Measure layout before updates |
| `componentDidCatch`        | Class-only `ErrorBoundary`             | Catch runtime errors          |

---

## 1. ✅ Mounting: `componentDidMount`

### 🔷 Class Component:

```js
componentDidMount() {
  console.log("Component mounted");
  fetchData();
}
```

### 🔷 Functional Component:

```js
useEffect(() => {
  console.log("Component mounted");
  fetchData();
}, []);
```

---

## 2. 🔁 Updating: `componentDidUpdate`

### 🔷 Class Component:

```js
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    this.fetchData();
  }
}
```

### 🔷 Functional Component:

```js
useEffect(() => {
  fetchData();
}, [id]); // Only runs when `id` changes
```

---

## 3. 🧼 Unmounting: `componentWillUnmount`

### 🔷 Class Component:

```js
componentWillUnmount() {
  clearInterval(this.timer);
}
```

### 🔷 Functional Component:

```js
useEffect(() => {
  const timer = setInterval(doSomething, 1000);
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);
```

---

## 4. 🧱 State Initialization: `constructor`

### 🔷 Class Component:

```js
constructor() {
  super();
  this.state = { count: 0 };
}
```

### 🔷 Functional Component:

```js
const [count, setCount] = useState(0);
```

---

## 5. 🚦 Conditional Re-render: `shouldComponentUpdate`

### 🔷 Class Component:

```js
shouldComponentUpdate(nextProps) {
  return nextProps.value !== this.props.value;
}
```

### 🔷 Functional Component:

```js
const MemoizedComponent = React.memo(MyComponent);
```

Or use `useMemo`, `useCallback` to avoid re-renders.

---

## 6. 🔄 Sync State from Props: `getDerivedStateFromProps`

### 🔷 Class Component:

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null;
}
```

### 🔷 Functional Component:

```js
useEffect(() => {
  setValue(props.value);
}, [props.value]);
```

---

## 7. 📏 Before DOM Update: `getSnapshotBeforeUpdate`

### 🔷 Class Component:

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  return this.listRef.scrollHeight;
}
```

### 🔷 Functional Component:

```js
useLayoutEffect(() => {
  const height = listRef.current.scrollHeight;
}, [items]);
```

---

## 8. ❌ Error Handling: `componentDidCatch`, `getDerivedStateFromError`

🚫 Currently not available in hooks — must use class-based Error Boundaries.

```js
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // Handle error
  }
  render() {
    return this.props.children;
  }
}
```

---

## 📌 Summary: Hook Mapping Cheatsheet

```txt
Mount      → useEffect(() => {...}, [])
Update     → useEffect(() => {...}, [deps])
Unmount    → useEffect(() => return () => {...}, [])
Init       → useState / useReducer
Cleanup    → return in useEffect
Optimize   → React.memo / useMemo / useCallback
```

---

> ✅ Use this as your go-to guide when transitioning from class components to function components in React.
