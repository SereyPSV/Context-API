export const useRequestEditTask = (refreshTasks, setRefreshTasks, textTask, id) => {
	const confirmAddingTask = () => {
		console.log('Отправить', textTask, id);

		fetch('http://localhost:3030/task/', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: textTask,
				state: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задание добавлено, ответ сервера:', response);
				setRefreshTasks(!refreshTasks);
			})
			.finally(() => 'setIsCreating(false)');
	};
	return { confirmAddingTask };
};
