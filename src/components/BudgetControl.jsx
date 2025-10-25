import React from 'react';

const BudgetControl = ({totalBudget, remainingBudget}) => {
    return (
    <>
       <div className='mt-4 font-semibold'>
            <div class="bg-blue-100  border-b-2 border-blue-800 py-3 px-2 text-base text-blue-700"> 
            Presupuesto: $ {totalBudget}
            </div>
            <div class="bg-white  py-3 px-2 text-base"> 
            Restante: $ {remainingBudget}
            </div>
       </div>
    </>
  );
};

export default BudgetControl;