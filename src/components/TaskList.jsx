import Task from "./Task";

function TaskList({ tasks }) {
    return (
        <>
            {tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}><Task task={task} /></li>
                    ))}
                </ul>
            ) : (
                <p>No tasks</p>
            )}
        </>
    );
}

export default TaskList;
