import React, { useState, useEffect } from "react";
import millify from "millify";
//import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Result } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  // Set the value of count to 10 if simplified, else set the value to 100(simplified will determine the amount of cards to display)
  const count = simplified ? 10 : 100;
  // Destructure the data coming from the API and name it cryptosList
  const { data: cryptosList, isFetching, isError } = useGetCryptosQuery(count);
  // Get the cryptocurrencies in the cryptosList object
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  if (isError) return (<Result status="500" title="500" subTitle="Sorry, our server is experiencing issues. Try again later." />);
  
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable
            >
              <p>Price: ${millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}%</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
