import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
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
      hornedBeast: data,
      howToFilter: '',
      numberOfHorns: 1,
      modalBeast: {},
    }
  }

  // filter the horns based off of the selected numberOfHorns value in your state
  
  handleSelectChange = (event) => {
    let selected = parseInt(event.target.value);
    this.setState({
      numberOfHorns: selected,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      hornedBeast: data.filter(beast => beast.horns === this.state.numberOfHorns)
    })
  }

  handleShowModal = (hornedBeast) => {
    this.setState({
      isModalDisplaying: true,
      modalBeast: hornedBeast,
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
        <form>
          <label htmlFor="hornQuestion"> How Many Horns today? </label>
          <select name="selected" onChange={this.handleSelectChange}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="100"> 100 </option>
          </select>
          <button type="submit" onClick={this.handleSubmit}> Submit! </button>
        </form>
        <Main
          data={this.state.hornedBeast}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isModalDisplaying}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.handleCloseModal}
          handleShow={this.handleShowModal}
          hornedBeast={this.state.modalBeast}
          numberOfHorns={this.state.numberOfHorns}
        />
      </>
    )
  };
}

export default App;
