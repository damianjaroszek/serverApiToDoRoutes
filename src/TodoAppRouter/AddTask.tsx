import { Form, useActionData } from "react-router-dom"
import { SingleTask } from "./types/tasks";

export const AddTask = () => {
    const data = useActionData() as SingleTask | undefined;

    return <div>
        <h1>Create new task</h1>
        <Form method="post" action="/create">
            <input type="text" name='title' />
            <textarea name="description" />
            <button type="submit">Add task</button>
        </Form>
        {data ? <p>Task {data.title} was created successfully! </p> : null}
    </div>
}