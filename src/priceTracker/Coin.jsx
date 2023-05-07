import axios from "axios";
import { useState, useEffect } from "react";

const Coin = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Error"));
  }, []);

  return (
    <div className="Coin">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table text-white bg-dark">
              <thead>
                <tr>
                  <th scope="col">Crypto name</th>
                  <th scope="col">Current price</th>
                  <th scope="col">Market cap change</th>
                  <th scope="col">Market cap rank</th>
                </tr>
              </thead>
              {coins.map((coin) => {
                return (
                  <tbody key={coin.id}>
                    <tr>
                      <td>
                        <img
                          className="crypto-img"
                          src={coin.image}
                          alt={coin.name}
                        />
                        {coin.name}
                      </td>
                      <td>{coin.current_price}</td>
                      {coin.market_cap_change_percentage_24h < 0 ? (
                        <td className="text-danger">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%         ↓
                        </td>
                      ) : (
                        <td className="text-success">
                          {coin.market_cap_change_percentage_24h.toFixed(2)}%          ↑
                        </td>
                      )}
                      <td>{coin.market_cap_rank}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
