import React from 'react';

const ExpenseForm = () => {
    return (
        <>
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                Agrega tus gastos aquí
            </h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="expenseName" className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre Gasto
                    </label>
                    <input
                        type="text"
                        id="expenseName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Ej. Comida"
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