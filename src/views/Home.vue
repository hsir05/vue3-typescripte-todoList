<template>
  <div class="home">
        <p class="title">todoList</p>
        <AddTodoItem :handlePlus="handlePlus"  />
        <Todo v-for="(item, index) in todoList" :todo="item" :index="index" :handleMinus="handleMinus" :key="index" />
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, watchEffect } from 'vue';
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
    const state = reactive<dataInterface>({
        todoList: [],
        person: {
            age: 12,
            sex: '男'
        },
        handleMinus: (index)=>{
            state.todoList.splice(index, 1)
        },
        handlePlus: (value) => {
            state.todoList.push(value)
            year.value +=1
            state.person.age +=3
        },
    });
    // //侦听ref 数据
    watch(year, (newVal, oldVal) =>{
        console.log("新值year:", newVal, "老值:", oldVal);
    })

    // // 侦听reactive数据
    // watch(
    //   state.todoList,
    //   (curAge) => {
    //     console.log("新值:", [...curAge]);
    //   },
    // );

    // 多值侦听
    // watch([() => state.todoList, year], ([curAge, preAge], [newVal, oldVal]) => {
    //     console.log("新值:", curAge, "老值:", preAge);
    //     console.log("新值:", newVal, "老值:", oldVal);
    // });

    // 侦听复杂嵌套数据需要添加第三个参数{deep: true}，
    // 默认watch 是惰性的，只有在设置immediate: true时，才会立即执行回调函数，还有关于
    // flush配置
    // watch(() => state.person, (newType, oldType) => {
    //     console.log("新值:", newType, "老值:", oldType);
    // }, {deep:true});
    

    // 停止监听
    // 监听函数会在组件销毁时自动停止监听，如果要手动停止可以  调用watch函数的返回值
    // const stopWatch = watch(() => state.person, (newType, oldType) => {
    //     console.log("新值:", newType, "老值:", oldType);
    // }, {deep:true});

    // stopWatch()

    // 监听副作用函数
    watchEffect(() => {
        console.log(state);
        console.log(year);
      }
    );

    return {
        ...toRefs(state),
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
