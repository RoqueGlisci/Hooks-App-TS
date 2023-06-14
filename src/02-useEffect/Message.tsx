import { useEffect, useState } from 'react';

interface Coor {
    x: number
    y: number
}

export const Message = () => {

    const [coor, setCoor] = useState<Coor>({x: 0, y: 0})

    useEffect(() => {
    //   console.log('Message M');
        const onMouseMove = ({x, y}: Coor): void => {
            setCoor({x, y});
            
        }
        window.addEventListener('mousemove', onMouseMove)
    //   window.addEventListener('mousemove', (ev) => {
    //     console.log(ev.x, ev.y);
    //   })
    
      return () => {
        // console.log('Message D');
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>

        {JSON.stringify(coor)}
    </>
  )
}
