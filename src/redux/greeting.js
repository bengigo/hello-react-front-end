const apiUrl = 'http://localhost:3000//api/v1/greetings';

const GREET_USER = '/greeting/GREET_USER';

export const greetUser = (data) => ({
  type: GREET_USER,
  data,
});

export const fetchGreeting = () => (dispatch) => {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(greetUser(json)));
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GREET_USER:
      return action.data;
    default:
      return state;
  }
};

export default greetingReducer;
