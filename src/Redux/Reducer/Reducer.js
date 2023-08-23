import { GET } from "../Actiontype/Actiontype"

const initialState = {
    users: []
}

const Reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case GET:
    return { ...state, users: [...state.users, payload]}

  default:
    return state
  }
}
export default Reducer;