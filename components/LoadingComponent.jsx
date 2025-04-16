import React from 'react'

const LoadingComponent = () => {
  const letters = 'Loading'.split('')

  return (
    <div className="h-full w-full grid place-items-center">
      <h1 className="flex gap-5 items-center justify-center">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-bounce text-gradient"
            style={{ animationDelay: `-${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default LoadingComponent
