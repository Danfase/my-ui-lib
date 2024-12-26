import React from "react";

const CryptoList = ({ data }) => {
  return (
    <ul>
      {data.map((coin) => (
        <li key={coin.id}>
          <strong>{coin.name} ({coin.symbol})</strong> - ${coin.price_usd} <br />
          Рейтинг: {coin.rank} | Изменение за 24ч: {coin.percent_change_24h}% | 
          Капитализация: ${coin.market_cap_usd}
        </li>
      ))}
    </ul>
  );
};

export default CryptoList;
