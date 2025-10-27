import { useState, useEffect } from 'react'
import './App.css'
import TimelessPhrase from './components/TimelessPhrase.jsx';
import BudgetQuestion from './components/BudgetQuestion.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseIndex from './components/ExpenseIndex.jsx';
import BudgetControl from './components/BudgetControl.jsx';

function App() {

  //Definir state
  const [totalBudget, setTotalBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showBudgetForm, setShowBudgetForm] = useState(true);
  const [expenses,setExpenses] = useState([]);
  const [expense,setExpense] = useState({});
  const [isSaveExpense, setIsSaveExpense] = useState(false);

  //Hook Para guardar Gasto
  useEffect(() => {
    if(isSaveExpense){
      //Agregar gasto al presupuesto
      setExpenses([
        ...expenses, //Array de objetos
        expense //Item o Objeto
      ]);


      //Restar gasto  del Presupuesto Actual
      const remaining = remainingBudget - expense.quantity;
      setRemainingBudget(remaining);

      //Resetear condicional
      setIsSaveExpense(false);
    }
  },[expense])

  
  return (
    <>
    {/* Contenedor principal de la aplicación con fondo y altura mínima (para el footer) */}
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      {/* Encabezado */}
      <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center h-16 gap-6">
              {/* Logo en el menú */}
              <img 
                src="/src/assets/kevindev-logo-dark.png" 
                alt="KevinDev Logo"
                className="h-6 w-auto md:h-8" 
              />
              {/* Texto en el menú */}
              <span className="text-lg md:text-2xl font-extrabold text-indigo-700 flex items-center">
                  WebApps
              </span>

          </div>
      </header>

      {/* Contenedor Principal (Container) */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        {/*<!--Sub-container : Ideal para margenes, background o shadows -->*/}
        <div className="flex flex-col space-y-4 h-full">
          
          { showBudgetForm ? (
            //<!--Fila 1 Columna x1-->
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center ">
              Gasto Semanal
              </h1>
              <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
                <BudgetQuestion
                  setTotalBudget={setTotalBudget}
                  setRemainingBudget={setRemainingBudget}
                  setShowBudgetForm={setShowBudgetForm}
                />
              </div>
            </div>
          ) : (
            //<!--Fila 2 Columna x2-->
            <div className="flex space-x-4">
              <section className="w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
                      <ExpenseForm 
                        setShowBudgetForm={setShowBudgetForm}
                        setExpense={setExpense}
                        setIsSaveExpense={setIsSaveExpense}
                      />
                  </div>
              </section>
              <section className="w-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
                      <ExpenseIndex
                        expenses={expenses}
                      />

                      <BudgetControl
                        totalBudget={totalBudget}
                        remainingBudget={remainingBudget}
                      />
                  </div>
              </section>
            </div>
          ) }

        </div> 
      </main>

      <TimelessPhrase 
        phrase="Eres el arquitecto de tu propio algoritmo vital. Optimiza para felicidad, no solo para eficiencia."
      />

      {/* Pie de página */}
      <footer className="mt-4 py-4 border-t border-gray-200 text-center bg-white">
          <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Kevin Cisnero
          </p>
      </footer>
      </div>
    </>
  )
}

export default App
