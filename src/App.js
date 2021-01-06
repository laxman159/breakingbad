import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import CharacterQuotes from "./components/characters/CharacterQuotes";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <CharacterQuotes />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
