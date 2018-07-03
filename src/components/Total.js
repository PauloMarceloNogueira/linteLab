import React, { Component } from "react";
import PropTypes from "prop-types";

class Total extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const value = pro
    const { value } = this.props;
    return <p>Clicamos {value} vezes</p>;
  }
}

export default Total;
