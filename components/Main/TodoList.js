import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul className='mx-4 my-6 h-96 overflow-auto'>
			{todos.length > 0 && todos.map((todo) => (
				<TodoItem 
				key={todo.id} 
				id={todo.id} 
				title={todo.title} 
				completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;