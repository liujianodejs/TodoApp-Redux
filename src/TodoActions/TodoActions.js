/**
 * Created by yuechunli on 2016/12/24.
 */
import TodoConstants from '../Constants/TodoConstants';

const TodoActions = {

    loadData(){
        return (dispatch) => {
            fetch('todos.json')
                .then((data) => data.json())
                .then((todos) => {
                    dispatch({
                        type: TodoConstants.LOAD_DATA,
                        todos
                    });
                });
        }
    },
    createItem(title){
        return {
            type: TodoConstants.CREATE_ITEM,
            title
        };
    },
    deleteItem(id){
        return {
            type: TodoConstants.DELETE_ITEM,
            id
        };
    },
    editeItem(title,id){
        return {
            type: TodoConstants.EDITE_ITEM,
            title,
            id
        };
    },
    toggleItem(id){
        return {
            type: TodoConstants.TOGGLE_ITEM,
            id
        };
    }
}


export default TodoActions;


