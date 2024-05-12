import React, { useState } from 'react';
import ModalForm from './UI/ModalForm/ModalForm';
import Button from './UI/Button/Button';
import IconBasket from './icons/IconBasket';
import IconPlus from './icons/IconPlus';

const TableItem = ({ children, data, id }) => {
	const [body, setBody] = useState([]);
	const [modal, setModal] = useState(false);

	const listData = (data) => {
		setBody([...body, data]);
	}

	return (
		<>
			<div className='list-table__item' key={id}>
				<div className="list-table__header">
					<h2 className="title">{children}</h2>
					<div className="list-table__btns">
						<Button onClick={() => setBody([])}>
							<IconBasket fill="white" />
						</Button>
						<Button onClick={() => setModal(true)}>
							<IconPlus fill="white" />
						</Button>
					</div>
				</div>
				<div className="list-table__body">
					<table>
						<thead>
							<tr>
								{Object.keys(data).map(item =>
									<th key={id + data[item].title} >
										{data[item].title}
									</th>
								)}
							</tr>
						</thead>
						<tbody>
							{body.map((row, index) => (
								<tr key={id + index}>
									{row.map((item, i) =>
										<td key={id + '0' + i}>
											{item}
										</td>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<ModalForm
				visible={modal}
				setVisible={setModal}
				listData={listData}
			>
				{data}
			</ModalForm>
		</>
	);
}

export default TableItem;