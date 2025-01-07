import { useAppSelector } from "@/app/redux/hooks";



const Tasks = () => {
  const tasks = useAppSelector((state) => state.todo.tasks)

  console.log(tasks);
  return (
    <div>
      <h1>This is task components</h1>
    </div>
  );
};

export default Tasks;
