import React, { useState } from 'react';
import MsgError from './MsgError';
import shortid from 'shortid';

const ExpenseForm = ({setShowBudgetForm,setExpense,setIsSaveExpense,resetBudget}) => {

    //Definit States
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(false) //
    
    //Funcion para guardar gasto
    const saveExpensive = (e) => {
        e.preventDefault();

        //Validar numero 0, numero negativo, numero vacio (NaN)
        if(quantity < 1 || isNaN(quantity) || name.trim() ===''){
            setError(true);
            return;
        }

        //Validacion aprobada, guardar cantidad y ocultar formulario de presupuesto 
        setError(false);

        //Construir el gasto
        const newExpense = {
            id: shortid.generate(), // ← Genera ID único
            name,
            quantity
        };

        //Pasar el gasto al componente principal
        setExpense(newExpense);
        setIsSaveExpense(true);

        //limpiar formulario
        setName('');
        setQuantity('');
    }

    return (
        <>  
            {/* Titulo */}
            <div className='relative'>
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                Agrega tus gastos aquí
            </h2>
            {/* Accion Limpiar */}
            <button
                title="Resetear Presupuesto" 
                className='absolute bottom-0 right-0 px-2 py-1 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95'
                onClick={resetBudget}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>


            </button>
            </div>

            { error ? <MsgError messageError="Ambos campos son obligatorios o presupuesto incorrecto" /> :  null }

            <form
                onSubmit={saveExpensive}
            >
                <div className="mb-4">
                    <label htmlFor="expenseName" className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre Gasto
                    </label>
                    <input
                        type="text"
                        id="expenseName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Ej. Comida"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="expenseQuantity" className="block text-gray-700 text-sm font-bold mb-2">
                        Cantidad Gasto
                    </label>
                    <input
                        type="number"
                        id="expenseQuantity"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Ej. 100"
                        value={quantity}
                        onChange={ e => setQuantity(e.target.value) }
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95"
                >
                    Agregar Gasto
                </button>
            </form>
        </>

    );
}

export default ExpenseForm;