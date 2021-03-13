export interface dataInterface {
    todoList: string[],
    todoValue: string, 
    handlePlus: () => void,
    handleMinus: (index: number) => void,
}