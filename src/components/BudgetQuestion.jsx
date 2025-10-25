import React,{useState} from 'react';

const BudgetQuestion = () => {

const [quantity, setQuantity] = useState(0);

    const defineBudget = e =>{
        setQuantity(
            parseInt(e.target.value,10)
        );
    }

    const addBudget = e =>{
        e.preventDefault();

        //Validar


        //Validacion Ok
    }

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
                onChange={defineBudget}
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