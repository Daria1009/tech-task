export const listChecked = (obj) => 
	Object.keys(obj)
		.filter(item => obj[item].checked)
		.map(item => obj[item].value);

export const checkRadio = (type) => type === 'radio' ? true : false;