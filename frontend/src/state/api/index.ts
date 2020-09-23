const initialState = {};

interface ReducerParams {
  state: object;
  action: { type: string; payload: object };
}

const reducer = ({ state = initialState, action }: ReducerParams) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
