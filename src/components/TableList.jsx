import React from 'react';
import TableItem from './TableItem';
import { data } from '../utils/data';

const TableList = () => {

	return (
		<>
			<div className='list-table'>
				{Object.keys(data).map(item =>
					<TableItem
						data={data[item].content}
						key={data[item].title}
						id={data[item].title}
					>
						{data[item].title}
					</TableItem>
				)}
			</div>
		</>
	);
}

export default TableList;