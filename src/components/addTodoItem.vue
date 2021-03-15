<template>
<div class="input-wrap">
    <input type="text" class="input" @keyup.enter="addTodo(todoValue)" v-model="todoValue">
    <div class="btn" @click="handlePlus(todoValue)">添加</div>
</div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
    name: 'addTodoItem',
    props: {
        handlePlus: {
            type: Function,
            required: true
        }
    },
    setup(props, context) {
        const todoValue = ref('')
        const data = reactive({
            todoValue: '',
            addTodo: (value: string) => {
            props.handlePlus(value)
            data.todoValue = ''
        }
        })
        return {
            ...toRefs(data),
        }
    }
})
</script>
<style lang="scss" scoped>
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