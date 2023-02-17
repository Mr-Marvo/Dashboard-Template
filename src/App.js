import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log('>>>> 1')
  }, []);
  return (
    <div className="app">
      Hello World!
    </div>
  );
}

export default App;
