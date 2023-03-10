import React, { useState } from 'react';
import { Avatar, Card, Col, Row, Select, Result } from 'antd';
import Typography from 'antd/es/typography/Typography';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const{ Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({ simplified }) => {
  const [newsCategory, setNewscategory] = useState('Cryptocurrency');
  const { data: cryptoNews, isError } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(100);

  if(!cryptoNews?.value) return 'Loading...';
  //console.log(cryptoNews)

  if(isError) return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, our server is experiencing issues. Try again later."
    />
  );

  return (
    <Row gutter={[ 24, 24 ]}>
      {!simplified && (
        <Col span={24}>
          {/* Only show articles that relate to the selected crypto*/}
          <Select 
            showSearch className='select-news' 
            placeholder='Select a Crypto' 
            optionFilterProp='children' 
            onChange={(value) => setNewscategory(value)} 
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='Cryptocurrency'>All</Option>
            {data?.data?.coins.map((coin) => <Option key={coin.uuid} value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              </div>
              <p>
                { news.description > 100 
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news provider logo"/>
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News;