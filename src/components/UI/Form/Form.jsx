import React, { useState } from 'react';
import Button from '../Button/Button';
import InputСhoice from '../InputСhoice/InputСhoice';
import { listChecked, checkRadio } from '../../../utils/input-choice';

const Form = ({ children, input, setInput, setVisible, listData }) => {
	let [entrance, setEtrance] = useState([]);

	const addInfoInData = (element) => {
		setEtrance([element.value]);
		setInput(input + 1);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		listData([
			entrance,
			[listChecked(event.target).join(', ')]
		]);
		setVisible(false);
		setTimeout(() => setInput(0), 450);
	}

	return (
		<form className="modal__content" onSubmit={handleSubmit}>
			{Object.keys(children).filter((data, index) => input === index)
				.map((data) =>
					children[data].content.map(item =>
						<InputСhoice
							type={children[data].type}
							name={checkRadio(children[data].type) ? children[data].title : item}
							key={item}
							onChange={(e) => checkRadio(children[data].type) && addInfoInData(e.target)}
						>
							{item}
						</InputСhoice>
					)
				)
			}
			{
				(input === Object.keys(children).length - 1)
				&& <Button>Добавить</Button>
			}
		</form>
	);
}

export default Form;