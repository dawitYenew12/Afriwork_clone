import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/JobDetail";
import PostJob from "./pages/PostJob";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDetail />} />
        <Route path="/postJob" element={<PostJob/>}/>
        <Route path="/apply" element={<ApplicationPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
