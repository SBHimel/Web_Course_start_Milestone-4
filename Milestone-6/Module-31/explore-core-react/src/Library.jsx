import Book from './Book'
export default function Library({ books }) {
  return (
    <div>
      <h2>My National Central Library</h2>
      <p>Books collection: {books.length}</p>
      <p>Address: Dhaka, Bangladesh</p>

      <ul>
        {books.map(book => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  )
}