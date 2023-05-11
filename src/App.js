import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import data from './data.json';
import Footer from './Footer';
import './App.css';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastName: 'test',
      hornedBeast: {},
    }
  }

  handleShowModal = (hornedBeast) => {
    this.setState({
      isModalDisplaying: true,
      hornedBeast: hornedBeast,
    });
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    })
  }


  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isModalDisplaying}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.handleCloseModal}
          handleShow={this.handleShowModal}
          hornedBeast={this.state.hornedBeast}
        />
      </>
    )
  };

}

export default App;
