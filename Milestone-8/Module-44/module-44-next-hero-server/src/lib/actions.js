
"use server";

import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
  "use server";

  // const title = formData.get('title');
  // const description = formData.get('description');
  // const priority = formData.get('priority');
  // const status = formData.get('status');
  // const assignedTô = formData.get('assignedTô');

  // const newTask = {title, description, priority, status, assignedTô};

  // -----------------------------------
  // eta ekline korte caile
  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding a task with name", newTask);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};

export const newTaskAction = async (formData) => {
  

  const newTask = Object.fromEntries(formData.entries());

  console.log("Adding a task with name", newTask);
  
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
    redirect('/tasks');
  }
  return res;


};
