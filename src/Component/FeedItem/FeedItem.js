import React, { Component } from 'react';
import { Card } from 'antd';

class FeedItem extends Component {
  render() {
    return (
      <Card
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}

export default FeedItem;
