<template>
  <div class="todo" :class="{ 'is-complete': todo.completed }" @dblclick="updateTodo(id)">
    <!-- calling mutations -->
    {{ todo.title }}
    <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Todos",
  props: ["todo"],
  methods: {
    //only mapping to the component
    //calling deleteTodo directly
    ...mapMutations(["deleteTodo", "updateTodo"]),
    // handleDblClick(id) {
    //     const updTodo = {
    //       id: todo.id,
    //       title: todo.title,
    //       completed: !todo.completed,
    //     };
    //   this.updateTodo(updTodo);
    // },
  },
};
</script>

<style scoped>
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
</style>
