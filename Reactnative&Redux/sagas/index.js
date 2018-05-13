import { put, takeLatest } from "redux-saga/effects";
import * as actionCreators from "../actionCreators";
import { GET_PRODUCTS } from "../actionTypes";

function* getProducts() {
  try {
    let products = yield fetch("http://172.16.105.228:4000/products").then(r =>
      r.json()
    );
    yield put(actionCreators.getProductsSuccessActionCreator(products));
  } catch (error) {
    yield put(actionCreators.getProductsFailureActionCreator(error));
  }
}

export function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
