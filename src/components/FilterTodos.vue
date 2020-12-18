<template>
  <div id="filter-todos">
    <label for="author">Filter Todos: </label>
    <select @change="handleChange($event)">
      <option value="" disabled selected>Choose number</option>
      <option v-for="number in numbers" :key="number">{{ number }}</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "FilterTodos",
  data() {
    return {
      numbers: ["10", "5", "2"],
    };
  },
  components: {},
  methods: {
    ...mapMutations(["filterTodos"]),
    handleChange(e) {
      let showNumber = e.target.value;
      console.log("showNumber", showNumber);
      this.filterTodos(showNumber);
    },
  },
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
