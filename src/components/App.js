import { Grid, Row, Col } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import './app.css';
import GithubForm from './GithubForm';
import UserDetail from './UserDetail';

const AppComponent = ({user, actions}) =>
  <Grid>
    <Row>
      <Col md={6}>
        <h1>Get Github profile</h1>
        <GithubForm githubUserFetch={actions.githubUserFetch}/>
      </Col>
      <Col md={4}>
        <UserDetail user={user}/>
      </Col>
    </Row>
  </Grid>;

AppComponent.propTypes = {
  actions: PropTypes.shape({ githubUserFetch: PropTypes.func.isRequired }),
  user: PropTypes.shape({})
};

export default AppComponent;
