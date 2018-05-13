import React from "react";
import { View, Text, Button } from "react-native";
import * as counterActions from "./actionCreators";
import { connect } from "react-redux";

class TimeTicker extends React.Component {
  componentWillReceiveProps(nextProps) {
    
    if (nextProps.currentAction === "START") {
      timerRef = setInterval(() => {
        this.props.tick();
      }, 1000);
      this.props.started(timerRef);
    }

    if (nextProps.currentAction === "STOP") {
      clearInterval(nextProps.timerRef);
      this.props.stopped();
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 80 }}>{this.props.tickedSeconds}</Text>
        <Button
          title={
            this.props.currentAction.startsWith("START") ? "STOP" : "START"
          }
          onPress={
            this.props.currentAction.startsWith("START")
              ? this.props.stop
              : this.props.start
          }
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickedSeconds: state.tickedSeconds,
    currentAction: state.currentAction,
    timerRef: state.timerRef
  };
}
function mapDispatchToProps(dispatch) {
  return {
    start: () => dispatch({ type: "START" }),
    stop: () => dispatch({ type: "STOP" }),
    tick: () => dispatch({ type: "TICK" }),
    started: timerRef => dispatch({ type: "STARTED", timerRef }),
    stopped: () => dispatch({ type: "STOPPED" })
  };
}

//const connectFactory = connect(mapStateToProps,mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(TimeTicker);
