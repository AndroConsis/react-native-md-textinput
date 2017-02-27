'use strict';
import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class InvalidMessage extends Component {
 constructor(props: Object) {
   super(props);
   console.log(props);
   this.state = {
     showMessage: props.showMessage
   };
 }

 componentWillReceiveProps(nextProps) {
   console.log(nextProps);
   this.setState({showMessage: nextProps.showMessage});
 }

  render() {
    let {
      message,
      showMessage
    } = this.props;
    return (
      <View>
        <Text style={[styles.message, {opacity: (this.state.showMessage ? 1 : 0 )}]}>
          {message}
        </Text>
      </View>
    )
  }
}

	InvalidMessage.propTypes = {
	   message: PropTypes.string,
	   showMessage: PropTypes.bool
	}

  const styles = StyleSheet.create({
    message: {
      fontSize: 10,
      color: 'red'
    }
  });
