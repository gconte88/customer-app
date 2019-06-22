import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CustomerActions from "./../components/CustomersActions";
import AppFrame from "./../components/AppFrame";

class HomeContainer extends Component {
  handleOnClick = () => {
    this.props.history.push("/customers");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Home Screen (Dummy)
              <CustomerActions>
                <button onClick={this.handleOnClick}>Client List</button>
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

export default withRouter(HomeContainer);
