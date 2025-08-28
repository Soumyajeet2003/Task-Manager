const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
    const rawTodo = localStorage.getItem(todoKey);

    // Check if rawTodo is null or the string "undefined"
    if (!rawTodo || rawTodo === "undefined") return [];
    
    try {
        return JSON.parse(rawTodo);
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return [];
    } 
};

export const setLocalStorageTodoData = (task) => {
    if (typeof task === "undefined") {
        console.warn("Task is undefined. Not updating localStorage.");
        return;
    }
    
    return localStorage.setItem( todoKey , JSON.stringify(task)); // All two parameters should be String, And first one is used as the key
};