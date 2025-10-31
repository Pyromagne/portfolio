import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Redirect from root to /home when not inside a Layout */}
          <Route path="/" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;