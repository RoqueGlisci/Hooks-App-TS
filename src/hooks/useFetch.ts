import { useEffect, useState } from 'react';

interface Use {
    data: null | any,
    isLoading: boolean,
    hasError: null
}

export const useFetch = (url: string) => {

    const [state, setState] = useState<Use>({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const res = await fetch(url)
        const data = await res.json()
        
        setState({
            data,
            isLoading: false,
            hasError: null
        })
        
    }

    useEffect(() => {
      
        getFetch()
      
    }, [url])
    

  return {
    data:state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
