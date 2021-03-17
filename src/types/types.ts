export interface dataInterface {
    todoList: string[],
    person: {
        age: number,
        sex: string
    },
    handlePlus: (value: string) => void,
    handleMinus: (index: number) => void,
    // handleAdd: (value: string) => void
}