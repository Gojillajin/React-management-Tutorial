function Customer({id, img, name, birthday, gender, job}) {
    return(
        <>
        <div>
            <CustomerProfile name={name} id={id} img={img} />
            <CustomerInfo  birthday={birthday} gender={gender} job={job} />
        </div>
        </>
    )
}

function CustomerProfile({name, id, img}) {
    return(
        <div>
            <img src={img} alt="profile" />
            <h2>{name}({id})</h2>
        </div>
    )
}

function CustomerInfo({birthday, gender, job}) {
    return (
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    )
}

export default Customer;