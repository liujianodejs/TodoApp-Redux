/**
 * Created by yuechunli on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoInputField from './TodoInputField';
import { connect } from 'react-redux';

class TodoInputFieldContainer extends Component {


    render() {

        return (
            <TodoInputField
                type="text"
                placeholder="请输入待办事项内容..."
                style={{width: 200,height: 25}}
                onKeyDown={(e) => {

                    if (e.keyCode === 13) {
                        this.props.createItem(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
        )

    }
}

export default TodoInputFieldContainer = connect(
    undefined,
    {
        createItem: TodoActions.createItem
    }
)(TodoInputFieldContainer);
