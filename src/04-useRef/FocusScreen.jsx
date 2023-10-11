import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()
    
    
    const onClick = () => {
        //document.querySelector("input").select()
       inputRef.current.select()

    
    }


    return (
        <>
           <h1>Focus Screen</h1>

            <input

                ref={inputRef}

                onClick={onClick}

                type='text'

                placeholder='Ingrese su nombre'
                
                className="form-control">
            
            </input>

            <button 
                className="btn btn-primary mt-2"
                onClick={onClick}>
                Set Focus
            </button>

            <hr />
            <hr />
    
        </>
    )
}
