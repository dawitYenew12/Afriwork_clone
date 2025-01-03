import PostJobHeader from "../components/PostJobHeader";
import ApplicationDetail from "../components/ApplicationDetail";

function ApplicationPage() {
  return (
    <div className="bg-white h-full w-full flex flex-col">
      <PostJobHeader />
      <ApplicationDetail /> 
    </div>
  );
}

export default ApplicationPage;
