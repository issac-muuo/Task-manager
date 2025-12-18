export function createStore(initialState) {
  let state = initialState;
  let history = [];
  let future = [];

  return {
    getSate() {
      return state;
    },

    setState(newState) {
      state = newState;
    },

    addTask(text) {
      history.push(state); //save old atate
      future = [];

      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      state = {
        ...state,
        tasks: [...state.task, newTask],
      };
    },

    undo() {
      if (history.length === 0) return;
      future.push(state);
      state = history.pop();
    },

    redo() {
      if (future.length === 0) return;

      history.push(state);
      state = future.pop();
    },
  };
}

const store = createStore({ task: [] });

store.setState({ task: ["learn js"] });
console.log(store.getSate());

store.addTask("learn closure");
store.addTask("practise async");
console.log(store.getSate());

store.addTask("A");
store.addTask("B");
store.undo();
console.log(store.getSate());
