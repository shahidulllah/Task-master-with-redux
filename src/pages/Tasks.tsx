import {selectTasks } from "@/app/redux/features/task/taskSlice";
import { useAppSelector } from "@/app/redux/hooks";
import {AddTaskModal } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal/>
      </div>
      <div className="space-y-5 mt-5">
       {
        tasks.map(task => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))
       }
      </div>
    </div>
  );
};

export default Tasks;
