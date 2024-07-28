import Link from "next/link";
import styles from "../../../../styles/book.module.css";

async function getListInside(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    // const response = await fetch("https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction");
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`);
    const json = await response.json();
    console.log(json);
    return json;
}

export default async function listInside({
    params: { id },
}: {
    params: { id: string}
}) {
    const listInside = await getListInside(id);
    return (
        <div className={styles.container}>
            {listInside?.results.books.map((book) => (
                <div className={styles.book} key={book.rank}>
                    <div className={styles.bookCover}>
                        <img src={book.book_image} />
                    </div>
                    <div className={styles.bookInfo}>
                        <h4>{book.title}</h4>
                        <span className={styles.author}>{book.author}</span>
                        <Link href={book.amazon_product_url}>
                        <h5 className={styles.bookBuy}>Buy now!</h5>
                        </Link>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}