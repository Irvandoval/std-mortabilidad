import React, {
  Component,
  PropTypes
} from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

class GithubForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'irvandoval' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.githubUserFetch(this.state.username);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" role="form">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text" placeholder="add username"
            value={this.state.username} onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit" bsStyle="success">Search</Button>
      </Form>
    );
  }
}

GithubForm.propTypes = {
  githubUserFetch: PropTypes.func
};


export default GithubForm;
