import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import ProjectAdmin from "./pages/ProjectAdmin";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<ProjectAdmin />} />
        <Route path="/" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
