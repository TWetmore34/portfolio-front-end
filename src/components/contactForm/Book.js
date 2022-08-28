const Book = ({ title, author, img }) => {
  return (
    <li className="mx-3">
        <div>
            <h5>{title}</h5>
            <p>By {author}</p>
            <img alt="book cover" src={img}></img>
        </div>
    </li>
  )
}

export default Book