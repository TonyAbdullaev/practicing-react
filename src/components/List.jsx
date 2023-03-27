import React, {useRef, useState} from "react";
import useScroll from "../hooks/useScroll";
export const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1)
    const parentRef = useRef();
    const childRef = useRef()
    const limit = 20;

    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))
    function fetchTodos(page, limit) {
        if (page > 10) {
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prevState => prevState.concat(json))
                setPage(prev => prev + 1)
            })
            .catch(e => console.log(e))
    }

    return (
        <div ref={parentRef} style={{height: '90vh', overflow: 'auto'}}>
            {
                todos.map(todo =>
                    <div ref={childRef} key={todo.title} style={{padding: 20, margin: 5, border: "2px solid teal"}}>
                        {todo.id} {todo.title}
                    </div>
                )
            }
            <div ref={childRef} style={{height: 20, background: "teal"}} />
        </div>
    )
}