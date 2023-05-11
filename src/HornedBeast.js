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

handleLikes = (e) => {
  e.stopPropagation();
  this.setState({
    likes: this.state.likes + 1
  });
  // this.props.handleShowModal(this.props.name)
}

getHornedBeast = () => {
  return {
    title: this.props.title,
    imageURL: this.props.imageURL,
    alt: this.alt,
    description: this.props.description
  }
}


  render() {
    return (
      <article className = "horned-beast" onClick={() => this.props.handleShowModal(this.getHornedBeast())}>
        <h2> {this.props.title}</h2>
        <p> {this.props.description}</p>
        <Button onClick={this.handleLikes}> How many hearts does it have?</Button>
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
