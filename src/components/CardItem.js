function CardItem({portfolio}) {
  return (
    <>
    <a href={portfolio.url}>
    <h2>{portfolio.title}</h2>
    </a>
    <img src={portfolio.image} alt={portfolio.image}/>
    <br />
    <br />
    <div>{portfolio.description}</div>
    </>
  )
}

export default CardItem