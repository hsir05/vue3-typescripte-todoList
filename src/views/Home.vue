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
          
          <div class="to-do-item-wrap" v-for="(item, index) in todoList" :key="index">
              <div class="to-do-item">{{index+1}}.   {{item}}</div>
              <div class="checkout-wrap">
                  <input type="checkbox" class="mr20">
                  <div class="btn" @click="handleMinus(item)">删除</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const data = reactive({
        todoList: [''],
        todoValue: '',
        handlePlus: () => {
          if (!data.todoValue){
                console.warn('请输入内容！');
                return false
            }
            data.todoList.push(data.todoValue)
            data.todoValue = ''
        },
        handleMinus: (item: string) => {
            const index: number | undefined = data.todoList.findIndex(key => key === item);
            if (index >= 0) {
                data.todoList.splice(index, 1)
            }
        }
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
.to-do-item-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    background-color: #e9e9e9;
    margin: 10px 0;
    border-radius: 6px;
}
.mr20{
    margin-right: 20px;
}
.checkout-wrap{
    display: inline-flex;
    align-items: center;
}
.btn{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
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
