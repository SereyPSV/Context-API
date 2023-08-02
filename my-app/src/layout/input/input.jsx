import styles from './input.module.css';

export const Input = ({ value, onChange, placeholder = 'Заполните задачу' }) => {
	return (
		<input
			className={styles.inputField}
			name={'task'}
			type={'text'}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
