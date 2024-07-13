import './resume.css'


function Resume({details}){
    const {name, email,phone, address} = details;
    return(
        <section className="top">
            <h1>{name}</h1>
            <div className="details">
                {(email !=="") &&
                <div>
                    <img src="mail.svg" alt="" />
                    <p>{email}</p>
                </div>
                }

                {(phone !=="") &&
                <div>
                    <img src="phone.svg" alt="" />
                    <p>{phone}</p>
                </div>
                }
                {(address !== "") &&
                <div>
                    <img src="location.svg" alt="" />
                    <p>{address}</p>
                </div>
                }
            </div>
        </section>
    )
}
export default Resume;