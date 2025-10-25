import React from 'react';

const TimelessPhrase = ({ 
  phrase = "Eres el arquitecto de tu propio algoritmo vital. Optimiza para felicidad, no solo para eficiencia.",
  colors = {
    start: 'from-blue-600',
    middle: 'via-purple-600',
    end: 'to-pink-600'
  },
  author = "Reflexiones atemporales",
  size = "md",
  align = "center",
  showAuthor = true
}) => {
  // Configuración de tamaños
  const sizeClasses = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-base',
    lg: 'text-md md:text-xl',
  };

  // Configuración de alineación
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  // Dividir la frase en partes si es muy larga
  const phraseParts = phrase.split(/(?<=\.)\s+/);
  
  return (
    <div className={`max-w-6xl mx-auto px-4 ${alignClasses[align]}`}>
      {/* La frase */}
      <div className={`${sizeClasses[size]} font-semibold text-gray-800 leading-relaxed italic text-justify`}>
        <span 
                className={`
                bg-gradient-to-r 
                ${colors.start} 
                ${colors.middle} 
                ${colors.end} 
                bg-clip-text text-transparent
                font-bold
                `}
            >
                {phrase}
            </span>

            <span className="inline-block md:inline ml-2 text-xs text-gray-500 font-bold">
                — {author} —
            </span>
      </div>
    </div>
  );
};

// Propiedades por defecto
TimelessPhrase.defaultProps = {
  phrase: "Eres el arquitecto de tu propio algoritmo vital. Optimiza para felicidad, no solo para eficiencia.",
  colors: {
    start: 'from-blue-600',
    middle: 'via-purple-600',
    end: 'to-pink-600'
  },
  author: "Reflexiones atemporales de un programador",
  size: "lg",
  align: "center",
  showAuthor: true
};

export default TimelessPhrase;