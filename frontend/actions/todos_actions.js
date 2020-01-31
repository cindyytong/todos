export const RECEIVE_TODOS = 'RECEIVE_TODOS'; 
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO'; 
export const TODO_ERROR = 'TODO_ERROR';

// action creators 
export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
};

export const receiveTodo = todo => {
    return {
        type: RECEIVE_TODO,
        todo 
    }
};

export const removeTodos = () => {
    return {
        type: REMOVE_TODOS
    }
};

export const removeTodo = todo => {
    return {
        type: REMOVE_TODO,
        todo
    }
};

export const todoError = error => {
    return {
        type: TODO_ERROR,
        error
    }
}
