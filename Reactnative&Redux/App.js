import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./Counter";
import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { getProductsWatcher } from "./sagas";
import Products from "./Products";
import TimeTicker from "./TimeTicker";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getProductsWatcher);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TimeTicker />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
