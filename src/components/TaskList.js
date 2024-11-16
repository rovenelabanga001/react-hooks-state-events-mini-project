import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const tasksToRender = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        index={index}
      />
    );
  });
  return (
    <div className="tasks">
      <ul>{tasksToRender}</ul>
    </div>
  );
}

export default TaskList;
