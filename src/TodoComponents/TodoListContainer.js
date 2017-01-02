/**
 * Created by yuechunli on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoList from './TodoList';
import { connect } from 'react-redux';


class TodoListContainer extends Component {



    render() {

        const {
            todos,
            toggleItem,
            deleteItem,
            editeItem
        } = this.props;

        return (
            <TodoList
                todos={todos}
                toggleItemFunc={toggleItem}
                deleteItemFunc={deleteItem}
                editeItemFunc={editeItem}
            />
        )

    }
}


export default TodoListContainer = connect(
    (state) => ({todos: state.todos}),
    {
        toggleItem: TodoActions.toggleItem,
        deleteItem: TodoActions.deleteItem,
        editeItem: TodoActions.editeItem
    }
)(TodoListContainer);
