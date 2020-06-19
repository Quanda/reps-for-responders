import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bulma-components/lib/components/modal';
import Button from 'react-bulma-components/lib/components/button';

class OpenModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  open = () => this.setState({ show: true });

  close = () => this.setState({ show: false });

  render() {
    const { children, button, modal } = this.props;
    const { show } = this.state;

    return (
      <div>
        <Button outlined color={button.color || 'w'} onClick={this.open}>
          {button.text || 'Open'}
        </Button>
        <Modal show={show} onClose={this.close} {...modal}>
          <Modal.Content>{children}</Modal.Content>
        </Modal>
      </div>
    );
  }
}

OpenModal.propTypes = {
  modal: PropTypes.shape({
    closeOnBlur: PropTypes.bool,
    showClose: PropTypes.bool,
  }),
  button: PropTypes.shape({
    color: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default OpenModal;
