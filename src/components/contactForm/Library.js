import Book from "./Book"

const Library = () => {
    const books = [
        {
            id: 1,
            title: 'Leaves of Grass',
            author: 'Walt Whitman',
            img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFdpQ6tpc0w25j2kSs4QyemW3iBR-jX17gVR2OXWHlP0BZHt21tC05TeugsoJLQimgf98zgY--bo282ci1cGfAVnSXUqsfOfR3qW4Vy_rNTHfc6CIBP7RxYw&usqp=CAc'
        },
        {
            id: 2,
            title: 'After Dark',
            author: 'Haruki Murakami',
            img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1AU9zyLAOSXOg1PalII-RUQmPTsAX6-a2d9CfJRJcqUbcucXed7i72BYOrwIOQUyfwMlWjYI379aw0J7n-3pYXFcItozmk__koIiqGYk&usqp=CAc'
        },
        {
            id: 3,
            title: "Lilith's Brood",
            author: 'Octavia Butler',
            img: 'https://bookoutlet.com/api/image?url=https://images.bookoutlet.com/covers/large/isbn978044/9780446676106-l.jpg&w=640&q=75'
        },
        {
            id: 4,
            title: "The Ethical Algorith",
            author: 'Kearns + Roth',
            img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTE3OOA9ax0sP-86GzXRNga9XtIY3y4r5n32zECv6q9wA3S2IJpo25qzd5APwYPTsXxO688WLi43fOOgq-QUNfJ8zsorPWD&usqp=CAc'
        },

]
  return (
    <div className="col-8 mx-auto text-center">
        <h2 className="">My Library</h2>
        <ul className="d-flex flex-wrap justify-content-center">
        {books.map(book => (
            <Book key={book.id} title={book.title} author={book.author} img={book.img} />
        ))}
        </ul>
    </div>
  )
}

export default Library