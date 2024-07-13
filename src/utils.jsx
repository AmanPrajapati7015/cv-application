import { useEffect } from "react"


function Feild({id,label,onChange,curVal}){

    return (
    <div className="feild">
        <label htmlFor={id}>{label} :</label>
        <input id={id}
            type="text" 
            placeholder={"Enter "+label} 
            value={curVal}
            onChange={e=>onChange(e.target.value)} />
    </div>
    )
}

export {Feild}