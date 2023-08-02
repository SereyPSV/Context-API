import { useState } from 'react';
import { useRequestDeleteTask, useRequestAddTask } from '../components';
import { Buttons, Input } from './';
import styles from './tasksLayout.module.css';

export const Item = ({
	buttonFirst = '',
	buttonSecond = '',
	el = '',
	refreshTasks,
	setRefreshTasks,
}) => {
	const [task, setTask] = useState(el.task);
	const [showInput, setShowInput] = useState(false);

	const onChangeTask = ({ target }) => {
		setTask(target.value);
	};

	const onClick1 = () => {
		setRefreshTasks(!refreshTasks);
		setShowInput(!showInput);
	};

	const { confirmAddTask } = useRequestAddTask(
		showInput,
		setShowInput,
		refreshTasks,
		setRefreshTasks,
		task,
		setTask,
		el.id,
	);

	const { requestDeleteTask } = useRequestDeleteTask(
		refreshTasks,
		setRefreshTasks,
		el.id,
		setShowInput,
	);

	const onClick4 = (target) => {
		if (target.target.id === 'but2add') {
			setTask('');
		}
		setShowInput(false);
	};

	return (
		<div className={styles.wrapper}>
			{showInput ? (
				<>
					<Input value={task} onChange={onChangeTask} />
					<div className={styles.buttons}>
						<Buttons
							el={el}
							onClick1={confirmAddTask}
							buttonFirst={buttonFirst.hidden}
							onClick2={onClick4}
							buttonSecond={buttonSecond.hidden}
						/>
					</div>
				</>
			) : (
				<>
					<div className={styles.task}>- {task}</div>
					<div className={styles.buttons}>
						<Buttons
							el={el}
							onClick1={onClick1}
							buttonFirst={buttonFirst.main}
							onClick2={requestDeleteTask}
							buttonSecond={buttonSecond.main}
						/>
					</div>
				</>
			)}
		</div>
	);
};
