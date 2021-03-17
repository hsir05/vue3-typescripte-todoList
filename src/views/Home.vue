<template>
  <div class="home">
        <p class="title">todoList</p>
        <AddTodoItem :handlePlus="handlePlus"  />
        <Todo v-for="(item, index) in todoList" :todo="item" :index="index" :handleMinus="handleMinus" :key="index" />
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch } from 'vue';
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
    const year = ref(12)
    const data = reactive<dataInterface>({
        todoList: [],
        handleMinus: (index)=>{
            data.todoList.splice(index, 1)
        },
        handlePlus: (value) => {
            data.todoList.push(value)
            year.value +=1
        },
    });
    // //侦听ref 数据
    // watch(year, (newVal, oldVal) =>{
    //     console.log("新值year:", newVal, "老值:", oldVal);
    // })
    // // 侦听reactive数据
    // watch(
    //   data.todoList,
    //   (curAge) => {
    //     console.log("新值:", [...curAge]);
    //   },
    // );
    // 多值侦听
    watch([() => data.todoList, year], ([curAge, preAge], [newVal, oldVal]) => {
        console.log("新值:", curAge, "老值:", preAge);
        console.log("新值:", newVal, "老值:", oldVal);
    });
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
