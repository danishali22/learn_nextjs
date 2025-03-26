import PostList from "@/components/posts/post-list";
import CreateTopicForm from "@/components/topics/create-topic-form";
import { fetchTopPosts } from "@/lib/query/post";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
        <CreateTopicForm />
      </div>
    </div>
  );
}
