/**
 * Created by yuechunli on 2016/12/25.
 */

import TodoConstants from '../Constants/TodoConstants';

let _toggleItemFunc = (todos,id) => {

    let newTodos = [...todos];
    let target = newTodos.find((todo) => todo.id === id);
    target.checked = !target.checked;
    return newTodos;
}

let _deleteItemFunc = (todos,id) => {

    let newTodos = [...todos];

    let index = newTodos.findIndex((todo) => todo.id === id);

    newTodos.splice(index, 1);

    return newTodos;
}

let  _createItemFunc = (todos,title) => {

    let newTodos = [...todos];

    let id = newTodos.length === 0 ? 101 : todos[todos.length-1].id + 1;

    newTodos.push({
        id,
        title,
        checked: false
    });

    return newTodos;
}


let _editeItemFunc = (todos,title,id) => {

    let newTodos = [...todos];
    let target = newTodos.find((todo) => todo.id === id);
    target.title = title;
    return newTodos;
}


const todos = (state = [],action = {}) => {

    switch (action.type) {
        case TodoConstants.LOAD_DATA:
            return action.todos;
        case TodoConstants.TOGGLE_ITEM:
            return _toggleItemFunc(state,action.id);
        case TodoConstants.DELETE_ITEM:
            return _deleteItemFunc(state,action.id);
        case TodoConstants.CREATE_ITEM:
            return _createItemFunc(state,action.title);
        case TodoConstants.EDITE_ITEM:
            return _editeItemFunc(state,action.title,action.id);
        default:
            return state;
    }

}

export default todos;

