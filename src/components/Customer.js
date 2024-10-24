function Customer({name, birthday, gender, job}) {
    return(
        <>
        <div>
            <h2>{name}</h2>
            <p>8{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
        </>
    )
}

export default Customer;