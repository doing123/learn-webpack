<template>
  <div class="todos">
    <router-link to="/">home</router-link>
    <router-link to="todos">todos</router-link>
    <h1 class="todos-title">this is todos</h1>

    <input type="text" v-model="newtodo.text" @keydown.13="createTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <span @click="delTodo(todo)">删除</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
export default {
  data: () => {
    return {
      newtodo: {
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),
    createTodo (){
      this.addTodo({
        ...this.newtodo // 解决对象引用类型的问题
      });

      this.newtodo.text = '';
    }
  }
}
</script>
<!-- 使用预处理语言加 lang 属性 -->
<style scoped lang="less">
.todos {
  &-title {
    font-size: 28px;
    color: rebeccapurple;
  }
}
</style>
