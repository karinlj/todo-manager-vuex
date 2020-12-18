<template>
  <div id="app">
    <div class="container">
      <h1>Todo Manager with Vuex</h1>
      <Addtodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Addtodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
export default {
  name: "App",
  components: { Todos, Addtodo, FilterTodos },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
ul {
  list-style-type: none;
}
</style>
