import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Landing Page</h1>
        <p>Your awesome product starts here.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>this is my first pipeline test</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Explain why your product is great here.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Highlight the final key feature.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
