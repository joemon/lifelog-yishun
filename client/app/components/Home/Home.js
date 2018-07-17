import React, { Component } from "react";
import App from '../App/App.js';
import './Home.scss';
import Gird from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const style = {
  Paper : { padding:20, marginTop: 10, marginBottom: 10 }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  

  render() {
    return (

        <Gird container>
        
          <Gird item sm>
          <Paper style={style.Paper}>
            Hello word
          </Paper>
            </Gird>
        
          <Gird item sm>
          <Paper style={style.Paper}>
          Hello word
          </Paper>
          </Gird>
        </Gird>
      
    )
  }
}

export default Home




      //<div className="first">
      //  <div className={`home-name__${this.state.active?'active':'disable'}`}>
       {/* </div> */}
      {/* </div> */}