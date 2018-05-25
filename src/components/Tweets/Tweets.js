import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardImg,
} from 'reactstrap';
import injectSheet from 'react-jss';
import FontAwesome from 'react-fontawesome';
import styles from './../../assets/styles';
import TweetAction from './TweetAction';

const Tweets = ({ classes, tweet }) => (
  <Card>
    <CardBody>
      <Row>
        <Col md={2}>
          <img src={tweet.avatar_url} className={classes.roundedAvatar} />
        </Col>

        <Col md={10}>
          <CardText>
            {tweet.full_name} {tweet.username}
          </CardText>
          <cardTex>{tweet.title}</cardTex>
        </Col>
      </Row>
    </CardBody>
    <CardBody>
      <CardImg top width="100%" src={tweet.image_url} />
    </CardBody>
    <CardBody>
      <Row>
        <TweetAction
          name="comment"
          tweet={tweet}
          count={tweet.comments_count}
        />
        <TweetAction
          name="retweet"
          tweet={tweet}
          count={tweet.retweets_count}
        />
        <TweetAction name="heart" tweet={tweet} count={tweet.likes_count} />
        <TweetAction name="envelope" tweet={tweet} />
      </Row>
    </CardBody>
  </Card>
);

export default injectSheet(styles)(Tweets);
