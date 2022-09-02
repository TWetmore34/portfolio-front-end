const Book = ({ title, author, img }) => {
  return (
    <li className="mx-3">
        <div className="col-6">
            <h5>{title}</h5>
            <p>By {author}</p>
            <img className="img img-responsive mw-100 mx-auto block" alt="book cover" src={img}></img>
        </div>
    </li>
  )
}

export default Book