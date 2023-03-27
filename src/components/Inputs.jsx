import useInput from "../hooks/useInput";

export function Inputs() {
    const username = useInput();
    const password = useInput();
    return (
        <>
            <input type="text" {...username} placeholder='username...'/>
            <input type="text" {...password} placeholder='password...'/>
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </>
    )
}