import React from "react";
import ReactDOM from "react-dom/client";
import Files from '../dataExample.js'
import Directory from './Components/Directory.tsx'

const App = () => {
  return (
    <main>
      <Directory files={Files} />
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
      <React.StrictMode>
      <App />
      </React.StrictMode>
);
