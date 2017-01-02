/**
 * Created by yuechunli on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoHeader from './TodoHeader';
import { connect } from 'react-redux';



class TodoHeaderContainer extends Component {

    render() {

        const {
            todos
        } = this.props;

        const todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <TodoHeader name="王菲" todoCount={todoCount}/>
        )

    }
}


export default TodoHeaderContainer = connect(
    (state) => ({todos: state.todos}),
    undefined
)(TodoHeaderContainer);

