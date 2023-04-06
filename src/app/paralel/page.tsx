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

const Paralel = async () => {
  const fictionBooks = getFiction();
  const nonFictionBooks = getnonFiction();

  // When we have to call the api data paralley, we call it in a Promise.
  const [fiction, nonFiction] = await Promise.all([
    fictionBooks,
    nonFictionBooks,
  ]);
  return (
    <div>
      <h2>Fiction Books</h2>
      <ul>
        {fiction.map((books: Books) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
      <h2>Non-Fiction Books</h2>
      <ul>
        {nonFiction.map((books: Books) => (
          <li key={books.id}>{books.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Paralel;
