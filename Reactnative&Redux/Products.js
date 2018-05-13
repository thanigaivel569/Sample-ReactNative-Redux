import React from "react";
import { View, Text, Button } from "react-native";
import * as counterActions from "./actionCreators";
import { connect } from "react-redux";

class Products extends React.Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {this.props.products &&
          this.props.products.map(p => (
            <Text style={{ fontSize: 20 }}>{p.title}</Text>
          ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(counterActions.getProductsActionCreator())
  };
}

//const connectFactory = connect(mapStateToProps,mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Products);
