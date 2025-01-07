import { selectFilter, selectTasks } from "@/app/redux/features/task/taskSlice";
import { useAppSelector } from "@/app/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  const filter = useAppSelector(selectFilter);

  console.log(tasks, filter);
  return (
    <div>
      <h1>This is task components</h1>
    </div>
  );
};

export default Tasks;
