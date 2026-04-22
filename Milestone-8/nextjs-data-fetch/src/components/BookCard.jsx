import Link from "next/link";


const BookCard = ({ book }) => {
    const { title, author } = book;
    return (
        <div className="card bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${book.id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;