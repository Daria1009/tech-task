import React from 'react';
import InputСhoice from '../InputСhoice/InputСhoice';

const ListInput = ({ data, setEtrance, input, setInput }) => {
	const checkRadio = (type) => type === 'radio' ? true : false;

	const addInfoInData = (event) => {
		setEtrance([event.target.value]);
		setInput(input + 1);
	}

	const listElements = () => {
		let list = [];

		for (let i = 1; i < data.total + 1; i++) {
			list.push(
				<InputСhoice
					type={data.type}
					name={checkRadio(data.type) ? data.title : data.name}
					key={data.name + i}
					onChange={(e) => checkRadio(data.type) && addInfoInData(e)}
				>
					{data.name + ' ' + i}
				</InputСhoice>
			);
		}
		return list;
	}

	return (
		<>
			{listElements(data)}
		</>
	);
}

export default ListInput;