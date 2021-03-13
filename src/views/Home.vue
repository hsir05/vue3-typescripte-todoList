<template>
  <div class="home">
      <div class="wrap">
          <div >
              <p class="title">todoList</p>
              <div class="input-wrap">
                  <input type="text" class="input" v-model="todoValue">
                  <div class="btn" @click="handlePlus(todoValue)">添加</div>
              </div>
          </div>
        <Todo v-for="(item, index) in todoList" :todo="item" :index="index" :handleMinus="handleMinus" :key="index" />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { dataInterface } from '../types/types'
import Todo from '../components/todoItem.vue'
export default defineComponent({
  name: 'Home',
  components: {
      Todo
  },
  setup() {
    const data = reactive<dataInterface>({
        todoList: [''],
        todoValue: '',
        handleMinus: (index: number)=>{
            data.todoList.splice(index, 1)
        },
        handlePlus: () => {
          if (!data.todoValue){
                console.warn('请输入内容！');
                return false
            }
            data.todoList.push(data.todoValue)
            data.todoValue = ''
        },
        
    })
    return {
        ...toRefs(data),
    }
  }
});
</script>
<style lang="scss" scoped>
.wrap{
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
.input{
    width: 260px;
    height: 35px;
    margin-right: 10px;
    border-color: #e5e5e5;
    box-sizing: border-box;
    border-radius:4px;
    border:1px solid #c8cccf;
    color:#6a6f77;
    -web-kit-appearance:none;
    -moz-appearance: none;
    outline:0;
    text-decoration:none;
}
</style>
