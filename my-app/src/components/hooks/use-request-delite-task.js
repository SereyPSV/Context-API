import { useState } from 'react';

export const useRequestDeleteTask = (refreshTasks, setRefreshTasks, id, setShowInput) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = (item) => {
		setIsDeleting(true);
		if (id !== 'add') {
			console.log(id);

			fetch(`http://localhost:3030/task/${item.target.id.slice(4)}`, {
				method: 'DELETE',
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					console.log('Удален, ответ от сервера: ', response);
					setRefreshTasks(!refreshTasks);
				})
				.finally(() => {
					setIsDeleting(false);
				});
		} else {
			setShowInput(false);
		}
	};
	return { requestDeleteTask, isDeleting };
};
