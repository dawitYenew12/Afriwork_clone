import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/JobDetail";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<JobDetail />} /> */}
        <Route path="/" element={<PostJob/>}/>
      </Routes>
    </Router>
  );
}

export default App;
