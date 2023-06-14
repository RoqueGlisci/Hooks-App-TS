import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";



// interface Data {
//     author: string,
//     quote: string
// }

export const Layout = () => {
    const {increment, count} = useCounter()
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${count}`)

    // console.log({data, isLoading, hasError});
    
   const {author, quote} = !!data && data[0]
    
    
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <br />

        {
            (isLoading)
                ?<LoadingQuote/>
                :<Quote author={author} quote={quote}/>
        }

        
        <button 
            className="btn btn-primary" 
            disabled={isLoading}
            onClick={() => increment(1)}>
            Next quote
        </button>
        
    </>
  )
}