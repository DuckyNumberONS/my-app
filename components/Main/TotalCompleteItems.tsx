import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TotalCompleteItems = () => {
  const checkTask = useSelector<RootState>((state) => state.todos.length);
  const checkComplete = useSelector<RootState>((state) =>
    state.todos.filter((todo:{completed:boolean}) => todo.completed === true)
  );
  const checkOpen = useSelector<RootState>((state) =>
    state.todos.filter((todo:{completed:boolean}) => todo.completed === false)
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
