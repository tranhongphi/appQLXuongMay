import React, { Component } from "react";
import Modal from "react-native-modalbox";
import { View, Text, Button, Icon } from "native-base";
import { connectModal } from "redux-modal";
import styles from "./styles";


class TopModal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { show, handleHide, message } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          style={[styles.modal, styles.modalTop]}
          coverScreen={true}
          backdrop={false}
          position={"top"}
          isOpen={show}
          onClosed={handleHide}
        >
          <View style={[styles.contentModal, styles.modalBasic]}>
            <Button transparent style={styles.btnClose} onPress={handleHide}>
              <Icon name="close" style={styles.txtMessage}/>
            </Button>
            <Text style={styles.text}>{message}</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default connectModal({
  name: "topModal",
  destroyOnHide: true
})(TopModal);
