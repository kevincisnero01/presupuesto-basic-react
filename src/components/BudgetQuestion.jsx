import React,{useState} from 'react';
import MsgError from './MsgError';

const BudgetQuestion = ({setTotalBudget,setRemainingBudget}) => {

//Definit States 
const [quantity, setQuantity] = useState(0); //State : cantidad de presupuesto
const [error, setError] = useState(false) //

    //Funcion que lee el Presupuesto recibido
    const defineBudget = e =>{
        setQuantity(parseInt(e.target.value,10));
    }

    //Funcion para capturar el submit del presupuesto 
    const addBudget = e =>{
        e.preventDefault();

        //Validar numero 0, numero negativo, numero vacio (NaN)
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            return;
        }

        //Validacion aprobada  y guardado  cantiad de presupuesto
        setError(false);
        setTotalBudget(quantity);
        setRemainingBudget(quantity);
    }

    return (
        <>
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Coloca tu presupuesto
        </h2>

        { error ? <MsgError messageError="El Presupuesto es incorrecto" /> :  null }

        <form
            onSubmit={addBudget}
        >
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