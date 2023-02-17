import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "./actionTypes";

// action for registering user
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{username:string, email:string, password:string}>()
)
