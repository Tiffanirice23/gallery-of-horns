import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((thing) => (   
        <HornedBeast
          title={thing.title}
          imageURL={thing.imageURL}
          description={thing.description}
          horns={thing.horns}
          key={thing._id}
          handleShowModal={this.props.handleShowModal}
        />
    ));

    return <main>{beasts}</main>;

  }
}

export default Main;
