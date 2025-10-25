import React, { useState } from 'react';
import MsgError from './MsgError';

const ExpenseForm = ({setShowBudgetForm}) => {

    //Definit States
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(false) //
    
    //Funcion para volver a cargar un nuevo presupuesto
    const handleResetBudget = () => {
        setShowBudgetForm(true);
        // Opcional: resetear otros estados
        //setTotalBudget(0);
        //setRemainingBudget(0);
    };

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

        //Pasar el gasto al componente principal
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
                title="Crear Nuevo Presupuesto" 
                className='absolute bottom-0 right-0 px-2 py-1 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95'
                onClick={handleResetBudget}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
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