import './App.css';

function App() {
  window.addEventListener('storage', (event) => {
    console.log(`MAIN storage event: ${JSON.stringify(event)}`);
  })

  return (
    <div className="App">
      <iframe
        title="My Iframe"
        src='http://localhost:3001/index.html'
        width="600"
        height="400"
      />
    </div>
  );
}

export default App;
