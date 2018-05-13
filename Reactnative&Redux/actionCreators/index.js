import {
  INC,
  DEC,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes";

export function incrementActionCreator() {
  return {
    type: INC
  };
}

export function decremenActionCreator() {
  return {
    type: DEC
  };
}

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductsSuccessActionCreator(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getProductsFailureActionCreator(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}
