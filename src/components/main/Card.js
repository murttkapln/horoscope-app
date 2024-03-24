

const Card = (props) => {
    // console.log(item);
    const {title, image,desc,date } = props
  return (
    <div className="cards">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="date">
            <h2>{date}</h2>
        </div>
        <img src={image} alt="images" />
        <div className="over">
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card