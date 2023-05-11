import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {

    let beasts = this.props.data.map((thing) => (
      <HornedBeast
        title={thing.title}
        imageURL={thing.imageURL}
        description={thing.description}
        key={thing._id}
        handleBeastSelect={this.props.handleSelectedBeast}
        handleShowModal={this.props.handleShowModal}
      />
  ));

  return <main>{beasts}</main>;

  }
}

export default Main;
