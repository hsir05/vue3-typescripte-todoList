export interface dataInterface {
    todoList: string[],
    todoValue: string,
    handlePlus: () => void,
    handleMinus: (item: string) => void
}