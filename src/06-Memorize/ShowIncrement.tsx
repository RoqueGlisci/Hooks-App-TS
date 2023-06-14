import {memo} from 'react'
//en increment se esta mandando un funcion que no debuelve nada -> incrementPrimary()
export const ShowIncrement = memo(({increment}: {increment: (value: number) => void}) => {
    console.log("ShowIncrement");
    
  return (
        <button 
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
  )
})
