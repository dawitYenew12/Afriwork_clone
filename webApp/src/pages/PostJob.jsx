import PostJobHeader from "../components/PostJobHeader"
import PostJobForm from "../components/PostJobForm"

function PostJob() {
  return (
    <div className="bg-white h-full w-full flex flex-col">
        <PostJobHeader />
        <PostJobForm />
    </div>
  )
}

export default PostJob
