import styles from "../../styles/home.module.css"
import List from "../../components/list";

async function getList() {
  console.log("im fetching!");
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const json = await response.json();
  // console.log(json);
  return json;
}

export default async function HomePage() {
  const lists = await getList();
  return (
    // <div className={styles.container}>
    //   <ul>
    //   {list.results.map((book) => (
    //     <li key={book.list_name_encoded}>{book.list_name} ➡️</li>
    //   ))}    
    // </ul>
    // </div>
    <div className={styles.container}>
      <ul>
      {lists.results.map((list) => (
        <List
          key={list.list_name_encoded}
          id={list.list_name_encoded}
          list_name={list.list_name}
        />
       ))}
       </ul>
    </div>

    
);
}


