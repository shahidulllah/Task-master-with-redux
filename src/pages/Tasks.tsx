import {selectTasks } from "@/app/redux/features/task/taskSlice";
import { useAppSelector } from "@/app/redux/hooks";
import TaskCard from "@/components/module/tasks/TaskCard";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-5">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Tasks;
