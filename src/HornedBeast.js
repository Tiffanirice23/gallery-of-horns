import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

handleLikes = () => {
  this.setState({
    likes: this.state.likes + 1
  });
}
  render() {
    return (
      <article className = "horned-beast">
        <h2> {this.props.title}</h2>
        <Button onClick={this.handleLikes}> How many hearts does it have?</Button>
        <p> {this.props.description}</p>
        <p> {this.state.likes} ♥️s:</p>
        <img 
        src={this.props.imageURL} 
        alt={this.alt}
        title={this.props.title} 
        />
        {/* <Button> Vote for this one! </Button> */}
      </article> 
    );
  }
}

export default HornedBeast;
