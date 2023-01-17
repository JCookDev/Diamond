import React from 'react';
import millify from 'millify'; //Used to format numbers
import { Typography, Row, Col, Statistic, Result } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../Components';


const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching, isError, error } = useGetCryptosQuery(10); // useGetCryptosQuery- Custom hook, used to fetch the Global Stats data.
  //console.log(data);

  const globalStats = data?.data?.stats; // Access the stats key/values in the data object. Use globalStats to represent the stats data

  if(isFetching) return "Loading...";

  if(isError) return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, our server is experiencing issues. Try again later."
    />
  )
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      {error ? (
        <Result 
          status="warning"
          title="Opps! This info is unavailable at this time."
        />
       ) :
       <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      }
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      {error ? (
        <Result 
          status="warning"
          title="Opps! This info is unavailable at this time."
        />
       ) : 
       <Cryptocurrencies simplified/>
      }
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      {error ? (
        <Result 
          status="warning"
          title="Opps! This info is unavailable at this time."
        />
       ) : 
       <News simplified/>
      }
    </>
  )
};

export default Homepage;
