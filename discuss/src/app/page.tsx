import CreateTopicForm from "@/components/topics/create-topic-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold">Home Page</h1>
      </div>
      <div>
        <CreateTopicForm />
      </div>
    </div>
  );
}
