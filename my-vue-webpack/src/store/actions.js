import * as Types from './mutation-types';

export default {
  // commit 方法调用mutation操作数据
  addTodo({commit}, todo) {
    commit(Types.ADDTODO, todo);
  },

  delTodo({commit}, todo) {
    commit(Types.DELTODO, todo);
  }
}
