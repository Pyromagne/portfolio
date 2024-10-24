import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;