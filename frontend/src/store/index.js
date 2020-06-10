import { createStore } from "redux";
import userInfoReducer from "./userInfo/reducer";

const store = createStore(
  userInfoReducer
);

/*store.subscribe(() => {
  console.log(`Store update ${store.getState()}`);
})*/

export default store;
