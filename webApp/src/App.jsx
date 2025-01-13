import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetail from "./pages/JobDetail";
import PostJob from "./pages/PostJob";
import ApplicationPage from "./pages/ApplicationPage";
import ExploreMorejobs from "./pages/ExploreMorejobs";
import DraftsList from "./pages/DraftsList";
import ChooseYourProfile from "./pages/ChooseYourProfile";
import YourJobPosts from "./pages/YourJobPosts";
import Selection from "./pages/Selection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDetail />} />
        <Route path="/postJob" element={<PostJob/>}/>
        <Route path="/apply" element={<ApplicationPage/>}/> 
        <Route path="/explore" element={<ExploreMorejobs/>}/>
        <Route path="/drafts" element={<DraftsList/>}/>
        <Route path="/choose" element={<ChooseYourProfile/>}/>
        <Route path="/posts" element={<YourJobPosts/>}/>
        <Route path="/slection" element={<Selection />} />
      </Routes>
    </Router>
  );
}

export default App;
