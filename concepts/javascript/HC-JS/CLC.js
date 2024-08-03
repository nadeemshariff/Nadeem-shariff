// Component Lifecycle

// 1. Mounting
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
    console.log('1. Constructor called')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps called')
    return null
  }

  componentDidMount() {
    console.log('4. componentDidMount called')
    // Perform side effects (e.g., API calls, subscriptions)
  }

  render() {
    console.log('3. Render called')
    return <div>My Component</div>
  }
}

// 2. Updating
class UpdatingComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('1. shouldComponentUpdate called')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('2. getSnapshotBeforeUpdate called')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('4. componentDidUpdate called')
    // Perform side effects
  }

  render() {
    console.log('3. Render called')
    return <div>Updating Component</div>
  }
}

// 3. Unmounting
class UnmountingComponent extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount called')
    // Clean up resources (e.g., cancel network requests, remove event listeners)
  }

  render() {
    return <div>Unmounting Component</div>
  }
}

// 4. Error Handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError called')
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo)
    // Log the error or send it to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

// Example usage to ensure output
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
      <UpdatingComponent />
      <UnmountingComponent />
    </ErrorBoundary>
  )
}

// Render the App
ReactDOM.render(<App />, document.getElementById('root'))

// Simulate component lifecycle events
console.log('--- Mounting ---')
const app = ReactDOM.render(<App />, document.getElementById('root'))

console.log('--- Updating ---')
ReactDOM.render(<App />, document.getElementById('root'))

console.log('--- Unmounting ---')
ReactDOM.unmountComponentAtNode(document.getElementById('root'))

console.log('--- Error Handling ---')
class BuggyComponent extends React.Component {
  componentDidMount() {
    throw new Error('Simulated error')
  }
  render() {
    return <div>Buggy Component</div>
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>,
  document.getElementById('root')
)
