import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2> {this.props.Title}</h2>
        <p> {this.props.P}</p>
        <img src={this.props.imgSrc} Title='{this.props.Title}' alt={this.alt}></img>
      </article>

      
    );
  }
}

export default HornedBeast;
