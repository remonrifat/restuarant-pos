import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes} />


    </>
  );
}

export default App;
