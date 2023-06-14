//Los símbolos ? se utilizan en TypeScript para indicar que una propiedad puede ser null o undefined.
//estamos usando el operador de encadenamiento opcional (?.) 
//para acceder a la propiedad getBoundingClientRect() del elemento DOM solo si la referencia al elemento no es null.


// El operador de encadenamiento opcional (?.) es un operador de JavaScript que se utiliza para acceder a las propiedades 
// de un objeto sin tener que comprobar si el objeto es null o undefined

// En TypeScript, el operador de encadenamiento opcional (?.) se puede combinar con el operador de tipo nullish (??) 
// para proporcionar un valor predeterminado si la propiedad es null o undefined. Aquí hay un ejemplo:

import { useLayoutEffect, useRef, useState } from 'react';

interface Api {
    author: string
    quote: string
}

export const Quote = ({author, quote}: Api) => {

  const pRef = useRef<HTMLParagraphElement>(null)
  const [boxSize, setBoxSize] = useState<{width: number, height: number}>({width: 0, height: 0})//

  useLayoutEffect(() => {
    // console.log(pRef.current?.getBoundingClientRect());
    const {width, height} = pRef.current?.getBoundingClientRect() ?? {width: 0, height: 0};
    console.log(width, height);
    
    setBoxSize({height, width})
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-end"> 
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-3">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
