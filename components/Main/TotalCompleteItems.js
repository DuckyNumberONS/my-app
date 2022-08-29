import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const checkTask = useSelector((state) => state.todos.length);
  const checkComplete = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const checkOpen = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );

  return (
    <>
      <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1"> {checkTask} task </p>
        <p className="flex-1 order-2 text-center">
          {checkComplete.length} complete
        </p>
        <p className="flex-1 order-last text-right">{checkOpen.length} open</p>
      </div>
    </>
  );
};

export default TotalCompleteItems;
