export interface dataInterface {
    todoList: string[],
    handlePlus: (value: string) => void,
    handleMinus: (index: number) => void,
    // handleAdd: (value: string) => void
}