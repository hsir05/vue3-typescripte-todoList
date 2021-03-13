<template>
<div class="to-do-item-wrap">
    <div class="to-do-item">{{index+1}}.   {{todo}}</div>
    <div class="checkout-wrap">
        <input type="checkbox" class="mr20">
        <div class="btn" @click="deleteTodo(index)">删除</div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'todoItem',
    props: {
        todo: String,
        index: Number,
        handleMinus: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const deleteTodo = (index: number) => {
            props.handleMinus(index)
        }
        return {
            deleteTodo
        }
    }
})
</script>

<style lang="scss" scoped>
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
</style>