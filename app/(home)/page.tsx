import Link from "next/link";
import styles from "../../styles/home.module.css"

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getList() {
  console.log("im fetching!");
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const list = await getList();
  return (
    <div className={styles.container}>
      <ul>
      {list.results.map((book) => (
        <li key={book.list_name_encoded}>{book.list_name} ➡️</li>
      ))}    
    </ul>
    </div>
    
);
}


