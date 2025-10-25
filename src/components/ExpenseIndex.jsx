import Reat from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseIndex = ({expenses}) => (
    <div>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Listado
        </h2>
        <ul className='space-y-2'>
        { expenses.map(expense =>(
            <ExpenseItem 
                key={expense.id}
                expense={expense}
            />
        ))}
        </ul>
    </div>
);


export default ExpenseIndex;