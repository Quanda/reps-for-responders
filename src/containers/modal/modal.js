import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

const ModalContainer = ({ children, buttonText }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal open={open} showModal={showModal} hideModal={hideModal} buttonText={buttonText}>
        {children}
      </Modal>
    )}
  </Consumer>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
};

export default ModalContainer;
