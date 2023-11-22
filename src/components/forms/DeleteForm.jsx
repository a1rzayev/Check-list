import { Form, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../reducer/slice";
import { destroyTask } from "../../tasks";

function DeleteForm({ task }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteClick = async (e) => {
        dispatch(deleteTask({ id: task.id }));
        await destroyTask(task.id);
        navigate('/');
    };

    return (
        <>
            <Form method="post" action={`tasks/${task.id}/destroy`}>
                <button onClick={handleDeleteClick} type="submit">
                    Delete
                </button>
            </Form>
        </>
    );
}

export default DeleteForm;
