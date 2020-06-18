import React from "react";
import propTypes from "prop-types";

import { connect } from "react-redux";

const Footer = ({ count }) => <p>Você tem {count} favoritos</p>;

Footer.prototype = {
  count: propTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
