import { selectTasks } from "@/app/redux/features/task/taskSlice";
import { useAppSelector } from "@/app/redux/hooks";
import { AddTaskModal } from "@/components/module/tasks/AddTask";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-5">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
