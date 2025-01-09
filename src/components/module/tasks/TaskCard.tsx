import { ITask } from "@/app/redux/features/task/task.interface";
import {
  deleteTask,
  toggleCompleteState,
} from "@/app/redux/features/task/taskSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <h6 onClick={() => dispatch(deleteTask(task.id))}>Delete</h6>
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
