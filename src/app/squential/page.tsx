type Books = {
  id: string;
  name: string;
  type: string;
  available: boolean;
};

async function getFiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );

  const data = response.json();
  return data;
}

async function getnonFiction() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

const Sequential = async () => {
  const fictionBooks = await getFiction();
  const nonFictionBooks = await getnonFiction();

  // Paralel method, we will call it without Promise.
  return (
    <div>
      <h2>Fiction Books</h2>
      <ul>
        {fictionBooks.map((books: Books) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
      <h2>Non-Fiction Books</h2>
      <ul>
        {nonFictionBooks.map((books: Books) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sequential;
