import { deleteTask } from "../reducer/slicer.jsx";
import store from "../reducer/store.jsx";
import {Form, useRouteLoaderData } from "react-router-dom";

export async function loader({params}){
    const taskList = store.getState();
    const task = taskList.tasks.find(e => e.id === params.taskid);
    console.log(task);
    return {element: task};
}

function Task() {
    const {element} = useRouteLoaderData("taskinfo");
    
    return (

        <div id="task">
        <div>
        <h1>
            {element.name}
        </h1>

        <p>         
            {element.content}
        </p>
        <p>         
            {element.isDone}
        </p>
        <p>         
            {element.id ? "not complited" : element.id}
        </p>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="delete"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
      </div>
    )
}

export default Task;