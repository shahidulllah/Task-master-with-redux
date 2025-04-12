export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export type TFilterOptions = "all" | "high" | "medium" | "low";

export interface TInitialState {
  tasks: ITask[];
  filter: TFilterOptions;
}
