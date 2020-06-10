const initialState = {
  username: null,
  imgId: null
};
const userInfoReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_USER") {
    return {
      // You cant use the ...state in IE
      username: action.username,
      imgId: action.imgId
    };
  };
  return state;
};
export default userInfoReducer;
