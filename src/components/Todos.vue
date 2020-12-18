<template>
  <div id="todos">
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete.</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <ul class="todos">
      <li v-for="(todo, index) in allTodos" :key="todo.id">
        <div v-if="index < filterTodos">
          <TodoItem :todo="todo" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  components: { TodoItem },
  data() {
    return {
      numbers: ["10", "5", "2"],
    };
  },
  methods: {
    //only mapping to the component
    // ...mapActions(["fetchTodos"]),
    //best practice = dispatch (skicka) the action to commit a mutation
    // test() {
    //   console.log("selectedNumber", this.selectedNumber);
    //   this.$store.this.state.todos.length = this.selectedNumber;
    // },
  },
  //getters in computed
  computed: {
    //maps getters from vuex to this component
    ...mapGetters(["allTodos", "filterTodos"]),
  },
  created() {
    //call action fetchTodos
    // this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
