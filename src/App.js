import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './components/TopNav/TopNav';
import factories from './db';
import Tweets from './components/Tweets/Tweets';

class App extends Component {
  state = {
    tweets: factories,
  };

  render() {
    const { tweets } = this.state;

    return (
      <div>
        <TopNav />

        <Container>
          <Row>
            <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
              {tweets.map(tweet => <Tweets key={tweet.id} tweet={tweet} />)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
