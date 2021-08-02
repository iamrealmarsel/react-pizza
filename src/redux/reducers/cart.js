const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((acc, pizza) => acc + pizza.price, 0);

const сart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzas = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];

      const pizza = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzas,
          totalPrice: getTotalPrice(currentPizzas),
        },
      };

      const allPizzas = [].concat.apply(
        [],
        Object.values(pizza).map((val) => val.items)
      );

      return {
        ...state,
        items: pizza,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      };
    }

    case 'CLEAR_CART':
      return {
        totalCount: 0,
        totalPrice: 0,
        items: {},
      };

    case 'REMOVE_CART_PIZZA': {
      const newPizzas = { ...state.items };
      const currentTotalPrice = newPizzas[action.payload].totalPrice;
      const currentTotalCount = newPizzas[action.payload].items.length;

      delete newPizzas[action.payload];

      return {
        ...state,
        items: newPizzas,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'PLUS_CART_PIZZA': {
      const newPizzas = [...state.items[action.payload].items, state.items[action.payload].items[0]];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newPizzas,
          totalPrice: getTotalPrice(newPizzas),
        },
      };

      const allPizzas = [].concat.apply(
        [],
        Object.values(newItems).map((val) => val.items)
      );

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(allPizzas),
        totalCount: allPizzas.length,
      };
    }

    case 'MINUS_CART_PIZZA': {
      const oldPizzas = state.items[action.payload].items;
      const newPizzas = oldPizzas.length > 1 ? state.items[action.payload].items.slice(1) : oldPizzas;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newPizzas,
          totalPrice: getTotalPrice(newPizzas),
        },
      };

      const allPizzas = [].concat.apply(
        [],
        Object.values(newItems).map((val) => val.items)
      );

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(allPizzas),
        totalCount: allPizzas.length,
      };
    }

    default:
      return state;
  }
};

export default сart;
