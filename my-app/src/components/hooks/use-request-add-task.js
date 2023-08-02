export const useRequestAddTask = (
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
	textTask,
	setTask,
	id,
) => {
	const confirmAddTask = () => {
		if (textTask === '') {
			console.log(showInput, 'НЕ Отправить', textTask, id);
			return;
		}
		if (id === 'add') {
			console.log(showInput, 'НЕ Отправить', textTask, id);

			fetch('http://localhost:3030/task/', {
				method: 'POST',
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
					setTask('');

					setShowInput(false);
				});
		} else {
			fetch(`http://localhost:3030/task/${id}`, {
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
					setShowInput(false);
				})
				.finally(() => 'setIsCreating(false)');
		}
	};
	return { confirmAddTask, textTask };
};
