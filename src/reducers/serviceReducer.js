export const init = () => {
  return JSON.parse(localStorage.getItem("services")) || [];
};

export const serviceReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((service) => service.id !== action.payload);

    case "update":
      return state.map((service) => service.id === action.payload.id ? service = action.payload :service);
    default:
      return state;
  }
};
