//* inputRef.current?.select(); -> El signo de interrogación en inputRef.current?.select() es el operador de encadenamiento opcional en JavaScript. 
//Este operador se utiliza para acceder a una propiedad de un objeto si existe. Si la propiedad no existe, el valor de retorno es undefined. 
//En este caso, el operador de encadenamiento opcional se utiliza para evitar errores si inputRef.current es null o undefined. 
//Si inputRef.current es null o undefined, la expresión completa se evalúa como undefined. Si inputRef.current no es null o undefined, la propiedad select() se llama en el objeto al que hace referencia la expresión1.

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        // document.querySelector('input')?.select()
        // console.log(inputRef);
        inputRef.current?.select(); //*
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text"
            placeholder="Ugrese su nombre" 
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={onClick}>
            Set focus
        </button>
    </>
  )
}
