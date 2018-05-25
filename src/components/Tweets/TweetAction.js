import React from 'react';
import { Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import injectSheet from 'react-jss';
import styles from '../../assets/styles';

const TweetAction = ({ count, name, classes }) => (
  <Col className={classes[name]}>
    <FontAwesome name={name} />
    {count}
  </Col>
);

export default injectSheet(styles)(TweetAction);
