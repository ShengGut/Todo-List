export default function changeTodoItem(todoItem, changes) {

    if (typeof todoItem !== "object" || todoItem === null)
        throw new Error("Invalid todoItem. An Object is expected.");

    if (typeof changes !== "object" || changes === null)
        throw new Error("Invalid changes. An object is expected.");

        Object.assign(todoItem, changes);
    // return {
    //     ...todoItem,
    //     ...changes,
    // };
}