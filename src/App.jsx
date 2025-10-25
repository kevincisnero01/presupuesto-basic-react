import { useState } from 'react'
import './App.css'
import TimelessPhrase from './components/TimelessPhrase.jsx';
import BudgetQuestion from './components/BudgetQuestion.jsx';

function App() {

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
                  Kevin's WebApps
              </span>

          </div>
      </header>

      {/* Contenedor Principal (Container) */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className='w-1/2 m-auto'>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center ">
          Gasto Semanal
          </h1>
          <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
            <BudgetQuestion />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!--Columna Principal (Ocupa 2/3 en PC)-->
          <section className="md:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
                  <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                      Contenido Principal
                  </h2>
                  <p className="text-gray-600 mb-4">
                      Esta área contiene la información principal.
                  </p>
                  
              </div>
          </section>

          <!--Columna Secundaria (Ocupa 1/3 en PC)-->
          <section className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
                  <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                      Barra Lateral 
                  </h2>
                  <p className="text-gray-600 mb-4">
                      Esta área contiene la información secundaria.
                  </p>
                  
              </div>
          </section>
        </div> */}

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
