import useRequest from "../hooks/useRequest";
import axios from "axios";
export const RequestForm = () => {
    const [todos, loading, error] = useRequest(fetchTodos)
    function fetchTodos(query) {
        return axios.get (`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>Something went wrong!</h3>
    }

    return (
        <div>
            {
                todos && todos.map(todo =>
                    <div key={todo.id} style={{padding: 20, border: '2px solid teal'}}>
                        {todo.id} {todo.title}
                    </div>
                )
            }
        </div>
    )
}