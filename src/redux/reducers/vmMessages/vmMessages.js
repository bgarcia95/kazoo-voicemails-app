// Default State
const vmMessagesDefaultState = {
  vmMessages: [],
  loading: true,
  error: null,
};

export default (state = vmMessagesDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
