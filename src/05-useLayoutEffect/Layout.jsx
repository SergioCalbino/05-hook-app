



import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples'







export const Layout = () => {


    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    const { author, quote } = !!data && data[0]

//  console.log(data, isLoading, hasError)
  
    

return (
    <>

        <h1>Breaking Bad</h1>
        <hr/>

        {/* {
            isLoading
            ? (
        <div className="alert alert-info text-center">
            Loading...
        </div>

            )
            : (

        <blockquote className="blockquote text-end" >
            <p className="mb-1" > {data[0].quote}  </p>
            <footer className="blockquote-footer"> {data[0].author} </footer>
        </blockquote>
            )
        } */

        isLoading 
        ? 

        <LoadingQuote/> 

        : <Quote author={author} quote={quote}/>
        
        
        
        }

            <button className="btn btn-primary" 
            onClick={() => increment()}
            
            >
                Next quote
            </button>


    </>
  )
}
