import Reat from 'react';

const ExpenseItem = ({expense}) => (
    <li className="list-none border-b-2 border-gray-500">
        <p className='flex justify-between capitalize items-center h-10'>
            { expense.name }
            <span className='bg-blue-950 text-white p-1 border rounded-md '>
            $ { expense.quantity }
            </span>
        </p>
    </li>
);

export default ExpenseItem;