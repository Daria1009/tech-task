import React, { useState } from 'react';
import Button from '../Button/Button';
import ListInput from '../ListInput/ListInput';

const Form = ({ children, input, setInput, setVisible, listData }) => {
	let [entrance, setEtrance] = useState([]);

	const listChecked = (obj) =>
		Object.keys(obj)
			.filter(item => obj[item].checked)
			.map(item => obj[item].value);

	const handleSubmit = (event) => {
		event.preventDefault();
		listData([
			entrance,
			[listChecked(event.target).join(', ')]
		]);
		setVisible(false);
		setEtrance([]);
		setTimeout(() => setInput(0), 450);
	}

	const handleKeyPress = (event) => {
		const target = event.target;
		const keyCode = event.keyCode;
		const nextEl = target.nextSibling;
		const prevEl = target.previousSibling;
		const checkLastList = input === Object.keys(children).length - 1;

		switch (keyCode) {
			case 37:
				input !== 0 && setInput(input - 1);
				break
			case 39:
				(entrance.length && !checkLastList) && setInput(input + 1);
				break
			case 38:
				prevEl && prevEl.focus();
				break;
			case 40:
				nextEl && nextEl.focus();
				break;
			default:
				break
		}
		if (event.ctrlKey && keyCode === 13) {
			checkLastList && target.closest('form').querySelector('.btn').click();
		}
		else if (keyCode === 13) {
			event.preventDefault();
			target.click();
		}
	}

	return (
		<form className="modal__content" onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
			{Object.keys(children)
				.filter((data, index) => input === index)
				.map((data) =>
					<ListInput
						key={data + input}
						data={children[data]}
						setEtrance={setEtrance}
						input={input}
						setInput={setInput}
					/>
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