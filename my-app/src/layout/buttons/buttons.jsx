import { Button } from './button/button';

export const Buttons = ({ el, onClick1, buttonFirst, onClick2, buttonSecond }) => {
	return (
		<>
			<Button id={'but1' + el.id} onClick={onClick1} buttonName={buttonFirst} />
			<Button id={'but2' + el.id} onClick={onClick2} buttonName={buttonSecond} />
		</>
	);
};
