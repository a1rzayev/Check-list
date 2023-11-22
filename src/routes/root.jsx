import { Outlet, useLoaderData, redirect, useNavigation, } from "react-router-dom";
import NewForm from "../components/forms/NewForm";
import { matchSorter } from "match-sorter";
import TaskList from "../components/TaskList";
import { getFirstTask } from "../tasks";
import { useSelector } from "react-redux";
import SearchForm from "../components/forms/SearchForm";

export async function action() {
    const currentTask = await getFirstTask();
    return redirect(`/tasks/${currentTask.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return { q };
}

function Root() {
    const { q } = useLoaderData();
    const tasks = useSelector((state) => state.tasksReducer);
    const tasksByQuery = q
        ? matchSorter(tasks, q, { keys: ["title", "description"] })
        : tasks;
    const navigation = useNavigation();

    return (
        <>
            <div id="sidebar">
                <div>
                    <SearchForm query={q} />
                    <NewForm />
                </div>
                <nav>
                    <TaskList tasks={tasksByQuery} />
                </nav>
            </div>
            <div
                id="detail"
                className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </>
    );
}

export default Root;
