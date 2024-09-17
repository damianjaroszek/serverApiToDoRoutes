import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import { Tasks } from "./TodoAppRouter/Tasks";
import { MainLayoutTodo } from "./TodoAppRouter/MainLayoutTodo";
import { tasksLoader } from "./TodoAppRouter/loaders/tasks";
import { Task } from "./TodoAppRouter/Task";
import { taskLoader } from "./TodoAppRouter/loaders/task";
import { AddTask } from "./TodoAppRouter/AddTask";
import { addTaskAction } from "./TodoAppRouter/actions/addTask";

const router = createBrowserRouter([
    {
        element: <MainLayoutTodo />,
        children: [{
            path: '',
            element: <Tasks />,
            loader: tasksLoader
        },
        {
            path: 'create',
            element: <AddTask />,
            action: addTaskAction
        },
        {
            path: ':id',
            element: <Task />,
            //loader: taskLoader({params}) => () // gdybyśmy chcieli tutaj robić loader, params pomimo delegacji do innego pliku przechwyca params
            loader: taskLoader

        }
        ]
    }
])

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
}