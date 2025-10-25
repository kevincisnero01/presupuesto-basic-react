import React from "react";

const MsgError = ({messageError}) => {
    return (
        <>
            <div className="bg-red-50 border border-red-200 rounded-md p-3 my-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Icono */}
                        <svg className="w-4 h-4 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                        </svg>
                        {/* Mensaje */}
                        <span className="text-sm text-red-800">
                            { messageError }
                        </span>
                    </div>
                    {/* Accion Cerrar */}
                    <button className="text-red-400 hover:text-red-600 transition-colors duration-200" type="button">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default MsgError