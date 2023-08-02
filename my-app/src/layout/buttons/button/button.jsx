import styles from './button.module.css';

export const Button = ({ id, onClick, buttonName, isDeleting }) => {
	return (
		<button id={id} className={styles.button} onClick={onClick} disabled={isDeleting}>
			{buttonName}
		</button>
	);
};
