import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast imgSrc='img/logo512.jpeg' Title='UniWhal'P='A unicorn and a narwhal nuzzling their horns' alt='narwhal'/>
        <HornedBeast imgSrc='img/pic2.avif' Title='Rhino Family' P='Parent rhino with two babies' alt='rhinos'/> 
    
      </main>
    );

  }
}

export default Main;
