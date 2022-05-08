export const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  _id: null,
  projectsApplied: null,
  projectsCreated: null
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_USER_AUTH": {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        _id: action.payload._id,
        projectsApplied: action.payload.projectsApplied,
        projectsCreated: action.payload.projectsCreated
      };
    }
    default:
      return state;
  }
};
