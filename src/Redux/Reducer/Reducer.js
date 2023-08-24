import { GET } from "../Actiontype/Actiontype"

const initialState = {
    products: []
}

const Reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case GET:
    return { ...state, products:payload}

  default:
    return state
  }
}
export default Reducer;