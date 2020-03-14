import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class Header extends Component {
  constructor(props) {
    super();

  }

  UNSAFE_componentWillReceiveProps(props) {
    console.log('header', this.props.sugar_readings)
  }
  

  render() {
    

    return(
      <div>
        <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a>
      </div>
    )
  }
}

export default Header;