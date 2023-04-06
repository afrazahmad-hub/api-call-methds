import { type } from "os";

type Books = {
  id: string;
  name: string;
  type: string;
  available: boolean;
};
async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = response.json();
  return data;
}

const Bookpage = async () => {
  const booksData = await getBooks();
  return (
    <div>
      <h1>Books Data</h1>
      {booksData.map((item: Books) => (
        <ul key={item.id}>
          <li>
            {item.name} - {item.type}- {item.available}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Bookpage;
