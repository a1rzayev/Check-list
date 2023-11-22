import React from "react";
import ReactDOM from "react-dom/client";
import store from "./reducer/store";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import ErrorPage from "./components/ErrorPage";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import EditTask, { action as editTaskAction} from "./routes/edit";
import Task, { loader as taskLoader } from "./routes/task";
import { action as completeTaskAction } from "./routes/complete";

const container = document.getElementById("root");

if (container === null) throw new Error("You don't have root element");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <div>Unecpected error!</div>,
                children: [
                    {
                        index: true,
                        element: <Index />,
                    },
                    {
                        path: "tasks/:taskId",
                        element: <Task />,
                        loader: taskLoader,
                    },
                    {
                        path: "tasks/:taskId/edit",
                        element: <EditTask />,
                        loader: taskLoader,
                        action: editTaskAction,
                    },
                    {
                        path: "tasks/:taskId/destroy",
                      },
                    {
                        path: "tasks/:taskId/complete",
                        action: completeTaskAction,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
