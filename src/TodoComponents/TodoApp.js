/**
 * Created by yuechunli on 2016/12/24.
 */

import React, { Component } from 'react';
import TodoHeaderContainer from './TodoHeaderContainer';
import TodoInputFieldContainer from './TodoInputFieldContainer';
import TodoListContainer from './TodoListContainer';

import TodoActions from '../TodoActions/TodoActions';

import { connect } from 'react-redux';

class TodoApp extends Component {

    componentDidMount() {

        this.props.loadData();
    }

    render() {

        return (
            <span>
                <TodoHeaderContainer />
                <TodoInputFieldContainer />
                <TodoListContainer />
            </span>
        )
    }
}
export default TodoApp = connect(
    undefined,
    {
        loadData: TodoActions.loadData
    }
)(TodoApp);