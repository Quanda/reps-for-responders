import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bulma-components/lib/components/modal';
import Button from 'react-bulma-components/lib/components/button';

class OpenModal extends React.Component {
  static propTypes = {
    modal: PropTypes.object,
    children: PropTypes.node.isRequired,
    button: PropTypes.object,
  };

  static defaultProps = {
    modal: {},
  };

  state = {
    show: false,
  };

  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });

  render() {
    const { children, button } = this.props;

    return (
      <div>
        <Button outlined color={button.color || 'w'} onClick={this.open}>
          {button.text || 'Open'}
        </Button>
        <Modal
          show={this.state.show}
          onClose={this.close}
          {...this.props.modal}
        >
          <Modal.Content>{children}</Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default OpenModal;
