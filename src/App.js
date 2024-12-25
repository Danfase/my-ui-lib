import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "./components/Button";
import Accordion from "./components/Accordion/Accordion";

import SearchBar from "./components/crypto/SearchBar";
import CryptoList from "./components/crypto/CryptoList";

// import { Input } from "./components/Input/Input";
import "./index.css"

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("name"); // Default sort by name

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("https://api.coinlore.net/api/tickers/");
        setCryptoData(response.data.data);
        setFilteredData(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = cryptoData.filter((coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...filteredData].sort((a, b) => {
      if (option === "name") {
        return a.name.localeCompare(b.name);
      } else if (option === "rank") {
        return a.rank - b.rank;
      } else if (option === "percent_change_24h") {
        return b.percent_change_24h - a.percent_change_24h;
      } else if (option === "market_cap_usd") {
        return b.market_cap_usd - a.market_cap_usd;
      }
      return 0;
    });
    setFilteredData(sorted);
  };

  // const [cryptoData, setCryptoData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Функция для получения данных
  //   const fetchCryptoData = async () => {
  //     try {
  //       const response = await axios.get('https://api.coinlore.net/api/tickers/');
  //       setCryptoData(response.data.data);
  //     } catch (error) {
  //       console.error('Ошибка при загрузке данных:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCryptoData();
  // }, []);



  return <div>
    
    <div>
      <h1>Crypto Tracker</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          
          {cryptoData.map((coin) => (
            <Accordion title={coin.name}>
              <p key={coin.id}>
                <b>Symbol:</b> {coin.symbol}<br></br>
                <b>Price USD:</b> ${coin.price_usd}<br></br>
                <b>Price {coin.symbol}:</b> {coin.price_btc}<br></br>
                <b>Market Cup USD:</b> {coin.market_cap_usd}<br></br>
                <b>Percent Change 24H:</b> {coin.percent_change_24h}%
              </p>
            </Accordion>
          ))}
        </div>
      )}
    </div>


    {/* Primary кнопки */}
    <Button size="lg" variant="primary">Lg, primary</Button>
    <Button size="md" variant="primary">Md, primary</Button>
    <Button size="sm" variant="primary">Sm, primary</Button>

    {/* Bordered кнопки */}
    <Button size="lg" variant="bordered">Lg, bordered</Button>
    <Button size="md" variant="bordered">Md, bordered</Button>
    <Button size="sm" variant="bordered">Sm, bordered</Button>

    {/* Disabled кнопка */}
    <Button size="md" variant="primary" disabled>Hover</Button>

    {/* Кнопка с onClick */}
    <Button size="md" variant="primary" onClick={() => alert("Button clicked!")}>Hover</Button>


    {/* Обычное поле */}
    {/* <Input label="Name" value={value} onChange={(e) => setValue(e.target.value)}/> */}

    {/* Поле с эффектом фокуса */}
    {/* <Input label="Name" placeholder="Name" value="Focus" onChange={() => {}} /> */}

    {/* Поле в состоянии Danger */}
    {/* <Input label="Name" placeholder="Danger" danger value="Danger" onChange={() => {}}/> */}



    <Accordion title="Accordion 1" defaultOpen>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </Accordion>

    <Accordion title="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </Accordion>
  </div>;
}

export default App;
