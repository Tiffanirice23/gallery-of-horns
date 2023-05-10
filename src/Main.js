import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {

    let beasts = [];
    data.forEach((thing) => {
      beasts.push(<HornedBeast
        title={thing.title}
        imageURL={thing.imageURL}
        description={thing.description}
        key = {thing._id}
      />);
    })
    return (
      <main>
        {beasts}
      </main>
    );

  }
}

export default Main;
