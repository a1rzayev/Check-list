import { Form, NavLink, redirect, useFetcher } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../reducer/slice";
import DeleteTaskForm from "./forms/DeleteTaskForm";

function Task({ task }) {
    const dispatch = useDispatch();

    const handleDeleteClick = async (e) => {
        dispatch(deleteTask({ id: task.id }));
    };

    return (
        <>
            <CheckBox task={task} />
            <NavLink to={`tasks/${task.id}`}>
                {task.title ? <>{task.title}</> : <i>No Title</i>}
                {""}
            </NavLink>
            <Form action={`tasks/${task.id}/edit`}>
                <button type="submit">Edit</button>
            </Form>
            <DeleteTaskForm task={task} />
        </>
    );
}

function CheckBox({ task }) {
    const fetcher = useFetcher();
    const dispatch = useDispatch();
    let isCompleted = task.completed;

    const handleClick = (e) => {
        dispatch(completeTask({ id: task.id }));
    };

    return (
        <fetcher.Form method="post" action={`tasks/${task.id}/complete`}>
            <button
                name="isCompleted"
                value={isCompleted ? "true" : "false"}
                onClick={handleClick}
            >
                {isCompleted ? "▣" : "▢"}
            </button>
        </fetcher.Form>
    );
}

export default Task;
