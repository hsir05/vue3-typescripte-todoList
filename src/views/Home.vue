<template>
  <div class="home">
        <p class="title">todoList</p>
        <AddTodoItem :handlePlus="handlePlus" />
        <Todo v-for="(item, index) in todoList" :todo="item" :index="index" :handleMinus="handleMinus" :key="index" />
      </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { dataInterface } from '../types/types'
import Todo from '../components/todoItem.vue'
import AddTodoItem from '../components/addTodoItem.vue'
export default defineComponent({
  name: 'Home',
  components: {
      Todo,
      AddTodoItem
  },
  setup() {
    const data = reactive<dataInterface>({
        todoList: [],
        handleMinus: (index: number)=>{
            data.todoList.splice(index, 1)
        },
        handlePlus: (value: string) => {
            data.todoList.push(value)
        },
        
    })
    return {
        ...toRefs(data),
    }
  }
});
</script>
<style lang="scss" scoped>
.home{
    margin: 0 auto;
    width: 600px;
    min-height: 300px;
    padding: 15px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
}
.title{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
}

</style>
