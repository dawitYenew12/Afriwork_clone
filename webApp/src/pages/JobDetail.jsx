import JobContent from "../components/JobContent";
import Header from "../components/Header";

function JobDetail() {
  return (
    <div className="bg-white h-full w-full flex flex-col">
      <Header />
      <JobContent />
    </div>
  );
}

export default JobDetail;
