import * as types from "../actions/actionTypes";

// default allows to choose the name when importing...
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
