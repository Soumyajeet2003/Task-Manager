import { MdCheck , MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data , checked , onHandleDeleteTodo , onHandleCheckedTodo}) => {
    const checkValue =  checked ? "checkList" : "notCheckList";

    return (
        <li className="todo-item">
            <span className={`${checkValue}`}>{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
}