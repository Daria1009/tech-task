import React from 'react';
import TableItem from './TableItem';
import { getDataHouse } from '../utils/data';

const TableList = () => {

	return (
		<>
			<div className='list-table'>
				<TableItem
					data={getDataHouse().data.content}
					id={getDataHouse().data.title}
				>
					{getDataHouse().data.title}
				</TableItem>
				<TableItem
					data={getDataHouse().data2.content}
					id={getDataHouse().data2.title}
				>
					{getDataHouse().data2.title}
				</TableItem>
				<TableItem
					data={getDataHouse().data3.content}
					id={getDataHouse().data3.title}
				>
					{getDataHouse().data3.title}
				</TableItem>
				<TableItem
					data={getDataHouse().data4.content}
					id={getDataHouse().data4.title}
				>
					{getDataHouse().data4.title}
				</TableItem>
			</div>
		</>
	);
}

export default TableList;