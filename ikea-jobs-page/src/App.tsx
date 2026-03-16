import JobsList from './components/JobsList';

/**
 * App Component - Root component of the IKEA Jobs application
 * 
 * This is the main entry point of the React application.
 * It renders the JobsList component which displays all available job postings
 * with filtering, searching, and application submission capabilities.
 * 
 * @component
 * @example
 * ```tsx
 * // Main app rendering in index.tsx
 * <App />
 * ```
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IKEA Jobs Page</h1>
        <JobsList />
      </header>
    </div>
  );
}

export default App;
