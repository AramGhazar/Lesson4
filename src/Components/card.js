const Card =(props) => {
    const { title, price, id } = props
    return (
        <>
                 <div className='card' key={id}>
                    <h2>{title}</h2>
                    <p>{price}</p>
                    <p>{id}</p>
                 </div>
        </>
    )
}


export default Card;