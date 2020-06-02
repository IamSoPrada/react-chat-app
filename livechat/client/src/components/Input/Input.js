import React from "react";


import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            value={message}
            placeholder="Написать..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Отправить</button>
    </form>
)
export default Input;