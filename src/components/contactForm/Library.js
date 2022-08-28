import Book from "./Book"

const Library = () => {
    const books = [
        {
        title: 'Leaves of Grass',
        author: 'Walt Whitman',
        img: 'https://picsum.photos/200'
        },
        {
            title: 'Leaves of Grass',
            author: 'Walt Whitman',
            img: 'https://picsum.photos/200'
        },
        {
            title: 'Leaves of Grass',
            author: 'Walt Whitman',
            img: 'https://picsum.photos/200'
        },

]
  return (
    <div className="col-8 mx-auto text-center">
        <h2 className="">My Library</h2>
        <ul className="d-flex flex-wrap justify-content-center">
        {books.map(book => (
            <Book title={book.title} author={book.author} img={book.img} />
        ))}
        </ul>
    </div>
  )
}

export default Library