import Tasks from "./Tasks";

export default function Home({ tasks, onDelete, onToggle }) {
  return (
    <div>
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}
