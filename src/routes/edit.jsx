import { redirect } from "react-router-dom";
import { updateTask } from "../tasks";
import EditForm from "../components/forms/EditForm";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await updateTask(params.taskId, updates);

    return redirect(`/tasks/${params.taskId}`);
}

function EditTask() {
    return <EditForm />;
}

export default EditTask;
