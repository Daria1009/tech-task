import React, { useState } from 'react';
import IconCross from '../../icons/IconCross';
import Form from '../Form/Form';
import './ModalForm.scss'

const ModalForm = ({ children, visible, setVisible, listData }) => {
	let [input, setInput] = useState(0);
	const visibleModal = visible ? 'active' : '';

	const closeModalKey = (event) => {
		const target = event.target;
		const key = event.keyCode;
		key === 27 && setVisible(false)
		if ((key === 38 || key === 40) && target.className === 'modal__close') {
			target.closest('.modal').querySelector('label').focus();
		};
	};

	return (
		<div className={'modal ' + visibleModal} onClick={() => setVisible(false)} onKeyDown={closeModalKey}>
			<div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
				<div className="modal__header">
					<div className="modal__title">
						{Object.keys(children).map((data, index) =>
							index === input && children[data].title
						)}
					</div>
					<button className="modal__close" onClick={() => setVisible(false)}>
						<IconCross fill="#B8C1CC" />
					</button>
				</div>
				<Form
					input={input}
					setInput={setInput}
					setVisible={setVisible}
					listData={listData}
				>
					{children}
				</Form>
			</div>
		</div>
	);
}

export default ModalForm;