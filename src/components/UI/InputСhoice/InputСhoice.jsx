import React from 'react';
import './InputСhoice.scss'

const InputСhoice = ({ children, ...props }) => {
	return (
		<label className='input-choice' tabIndex='0'>
			<input {...props} value={children} />
			<span>{children}</span>
		</label>
	);
}

export default InputСhoice;