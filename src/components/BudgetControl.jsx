import React from 'react';
import { reviewBudgetVisibility } from '../helpers';

const BudgetControl = ({totalBudget, remainingBudget}) => {
    return (
    <>
       <div className='mt-4 font-semibold'>
            <div className={"bg-blue-100  border-b-2 border-blue-800 py-3 px-2 text-base text-blue-700"}> 
            Presupuesto: $ {totalBudget}
            </div>
            <div className={"border-b-2  py-3 px-2 text-base " + reviewBudgetVisibility(totalBudget, remainingBudget)}> 
            Restante: $ {remainingBudget}
            </div>
       </div>
    </>
  );
};

export default BudgetControl;