import React from 'react';

const BudgetQuestion = () => {
  return (
    <>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Coloca tu presupuesto
        </h2>
        <form>
            <input 
                type="number"
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                placeholder='Coloca tu presupuesto' 
            />

            <input 
                type="submit" 
                className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95"
                value="Deinir Presupuesto" 
            />
        </form>
    </>
  );
};

export default BudgetQuestion;