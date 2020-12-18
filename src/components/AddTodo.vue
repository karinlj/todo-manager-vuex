<template>
  <div id="add-todo">
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="title" placeholder="Add Todo" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Addtodo",
  data() {
    return {
      title: "",
    };
  },
  components: {},
  methods: {
    ...mapMutations(["addTodo"]),
    handleSubmit() {
      const newTodo = {
        id: Math.random(),
        title: this.title,
        completed: false,
      };
      //calling mutation
      this.addTodo(newTodo);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
