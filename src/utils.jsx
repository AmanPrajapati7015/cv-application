

function Feild({id,label,onChange}){
    return (
    <div className="feild">
        <label htmlFor={id}>{label} :</label>
        <input id={id} type="text" onChange={e=>onChange(e.target.value)} />
    </div>
    )
}

export {Feild}