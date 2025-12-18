export function createStore(initialState) {
  let state = initialState;

  return {
    getSate() {
      return state;
    },

    setState(newState) {
      state = newState;
    },

    addTask(text) {
      history.pushState(state); //save old atate
      
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      state = {
        ...state,
        task: [...state.task, newTask],
      };
    },
  };
}

const store = createStore({ task: [] });

store.setState({ task: ["learn js"] });
console.log(store.getSate());

store.addTask("learn closure");
store.addTask("practise async");
console.log(store.getSate());
