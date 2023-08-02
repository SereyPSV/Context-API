import { useState, useEffect } from 'react';

export const useRequestGetTasks = (refreshTasks) => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3030/task')
			.then((loadedData) => loadedData.json())

			.then((loadedTasks) => {
				setTasks(loadedTasks);
			});
	}, [refreshTasks]);

	return { tasks };
};
