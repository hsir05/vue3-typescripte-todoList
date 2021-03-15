<template>
  <div class="home">
        <p class="title">todoList</p>
        <AddTodoItem :handlePlus="handlePlus"  />
        <Todo v-for="(item, index) in todoList" :todo="item" :index="index" :handleMinus="handleMinus" :key="index" />
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
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
     const test = ref('11')
    const data = reactive<dataInterface>({
        todoList: [],
        handleMinus: (index)=>{
            data.todoList.splice(index, 1)
        },
        handlePlus: (value) => {
            data.todoList.push(value)
            test.value = value
        },
    });
    // watchEffect(() => {
    //     console.log(test);
    // })
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
