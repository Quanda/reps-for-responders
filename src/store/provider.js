import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from './createContext';
import { theme } from '../constants/color';

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    open: false,
    showModal: () => this.setState({ open: true }),
    hideModal: () => this.setState({ open: false }),
  };

  render() {
    return (
      <Provider value={this.state}>
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
