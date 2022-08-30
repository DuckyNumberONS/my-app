import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync,deleteTodoAsync } from '../../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li
      className={`flex mt-4 items-center space-x-1 py-2.5 px-2.5 border-b border-gray-300 transition duration-300 ease-in no-underline text-gray-800  ${completed && 'list-group-item-success'}`}
    >
      <input
       type='checkbox'
       checked={completed}
       onChange={handleCheckboxClick}
        className=" w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <span className={`flex-1 px-2 min-w-0 break-words ${completed == true ? "task isComplete" : "task"}`}>{title}</span>
      <button
        className="transition duration-200 ease-in-out text-gray-400 hover:text-pink-500 focus:outline-none"
        onClick ={handleDeleteClick}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
        </svg>
      </button>
    </li>
	);
};

export default TodoItem;
