//import axios from "axios";

const state = {
  todos: [
    { id: 0, title: "Walk with cats", completed: false },
    { id: 1, title: "Cuddle with cats", completed: false },
    { id: 2, title: "Feed cats", completed: false },
    { id: 3, title: "Walk with cats", completed: false },
    { id: 4, title: "Cuddle with cats", completed: false },
    { id: 5, title: "Feed cats", completed: false },
    { id: 6, title: "Walk with cats", completed: false },
    { id: 7, title: "Cuddle with cats", completed: false },
    { id: 8, title: "Feed cats", completed: false },
    { id: 9, title: "Walk with cats", completed: false },
    { id: 10, title: "Cuddle with cats", completed: false },
    { id: 11, title: "Feed cats", completed: false },
  ],
  showNumber: null,
};

//getting the state into our components
//get the data (products) and compute new data based on it
const getters = {
  allTodos: (state) => {
    return state.todos;
  },
  //Filter Todos
  filterTodos(state) {
    //return state-prop
    return state.showNumber;
  },
};

//actions to call/commit a mutation
//async tasks
//inside module actions, context.state will expose the local state
//context.commit
//context.state
//context is almost like the store
const actions = {
  //make a data request, get a response and call mutation setTodos
  fetchTodos({ commit }) {
    console.log("commit", commit);
  },
  //post new Todo
  addNewTodo({ commit }, title) {
    console.log("commit", commit, title);
  },
  //delete Todo from db
  removeTodo({ commit }, id) {
    console.log("commit", commit, id);
  },
  //filter todos
  //   filterTodos({ commit }, e) {
  //     console.log("commit", commit);
  //     console.log("event", e.target);
  //   },
  //update todo
  //action for any kind of update
  updTodo({ commit }, updatedTodo) {
    console.log("commit", commit, updatedTodo);
  },
};
//The only way to actually change state in a Vuex store is by committing a mutation
//mutate the state
//UI changes
//can be tracked in Vue dev tools
//should not handle async changes ex get data from server
//state 1st argument
const mutations = {
  //take the response (array of todos) and add to the state
  setTodos: () => {},
  //add Todo
  addTodo: (state, newTodo) => {
    // console.log("newTodo", newTodo);
    state.todos = [newTodo, ...state.todos];
  },
  //update Todo
  updateTodo: (state, id) => {
    // console.log("id", id);
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  },
  //delete Todo
  deleteTodo: (state, id) => {
    console.log("id", id);
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
  //Filter Todos
  filterTodos(state, number) {
    //set the number selected to state-prop
    state.showNumber = number;
  },
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
