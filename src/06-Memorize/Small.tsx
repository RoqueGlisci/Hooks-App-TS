import {memo} from 'react'

export const Small = memo(({value}: {value: number}) => {
    console.log(value);
    memo
    
  return (
    <small>{value}</small>
  )
})
