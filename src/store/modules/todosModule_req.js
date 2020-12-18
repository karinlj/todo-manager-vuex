import axios from "axios";

const state = {
  // todos: [
  //   { id: 0, title: "Walk with cats", completed: false },
  //   { id: 1, title: "Cuddle with cats", completed: false },
  //   { id: 2, title: "Feed cats", completed: false },
  // ],
  todos: [],
};

//getting the state into our components
const getters = {
  allTodos: (state) => {
    //return
    return state.todos;
  },
};

//action to make a data request, get a response and call a mutation
const actions = {
  //get Todos
  fetchTodos({ commit }) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")

      //do something when todos are fetched
      .then((response) => {
        //call the mutation
        commit("setTodos", response.data);
      })
      .catch((error) => console.error("error", error));
  },
  //   async fetchTodos({ commit }) {
  //     const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //     console.log("response.data_get", response.data);
  //   },

  //post new Todo
  addTodo({ commit }, title) {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        //sending an object along
        title: title,
        comleted: false,
      })
      //do something when todo is posted
      .then((response) => {
        //call the mutation
        commit("newTodo", response.data);
      })
      .catch((error) => console.error("error", error));
  },
  //delete Todo from db
  deleteTodo({ commit }, id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      //do something when todo is deleted
      .then(() => {
        //call the mutation
        commit("removeTodo", id);
      })
      .catch((error) => console.error("error", error));
  },
  //filter todos
  filterTodos({ commit }, e) {
    //console.log("commit", commit);
    //  console.log("event", e.target);
    //get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    // console.log("limit", limit);

    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      //do something when todos are filtered
      .then((response) => {
        //call the mutation setTodos again
        commit("setTodos", response.data);
      })
      .catch((error) => console.error("error", error));
  },
  //update todo
  //action for any kind of update
  updateTodo({ commit }, updatedTodo) {
    // console.log("commit", commit);

    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
      //do something when todos are filtered
      .then((response) => {
        //call the mutation setTodos again
        commit("updTodo", response.data);
      })
      .catch((error) => console.error("error", error));
  },
};

//mutate the state
//state 1st argument
const mutations = {
  //take the response (array of todos) and add to the state
  setTodos: (state, response_todos) => {
    console.log("response_get", response_todos);
    state.todos = response_todos;
  },
  //take the response (new todo) and add to the state at the start
  newTodo: (state, response_newTodo) => {
    console.log("response_post", response_newTodo);
    state.todos.unshift(response_newTodo);
  },
  // remove Todo from UI
  removeTodo: (state, id) => {
    console.log("response_delete", id);
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
  },
  updTodo: (state, updatedTodo) => {
    //we want to have it in the same place so we need the index of it
    //es6 findIndex()
    // let ranks = [1, 5, 7, 8, 10, 7];
    // let index = ranks.findIndex((rank) => rank === 7);
    // console.log(index) => 2;
    const index = state.todos.findIndex((todo) => {
      return todo.id === updatedTodo.id;
    });
    console.log("index", index);
    //splice()
    //At position 2, remove 1 item and add the new items:
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.splice(2, 1, "Lemon", "Kiwi");
    // => Banana,Orange,Lemon,Kiwi,Mango
    if (index !== -1) {
      //At position index, remove 1 item and add the updatedTodo
      state.todos.splice(index, 1, updatedTodo);
    }
    console.log("response_put", updatedTodo);
  },
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
