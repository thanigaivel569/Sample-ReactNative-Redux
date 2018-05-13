import React from "react";
import { View, Text, Button } from "react-native";
import * as counterActions from "./actionCreators";
import {connect} from "react-redux"

class Counter extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Button title="INC" onPress={this.props.inc} />
        <Text style={{ fontSize: 63 }}>{this.props.ctr}</Text>
        <Button title="DEC" onPress={this.props.dec} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ctr: state.counter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(counterActions.incrementActionCreator()),
    dec: () => dispatch(counterActions.decremenActionCreator())
  };
}

//const connectFactory = connect(mapStateToProps,mapDispatchToProps)

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
