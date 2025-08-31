import React from "react";
import { Fragment ,useState} from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("") //This is how we change the state and save the state

    //Now we need to be able to submit our form to send data out so we create a function to do that
    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {description};
            const response =  await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
    <Fragment>
      <h1 className="text-center mt-5 mb-4 display-4">My Todo App</h1>
      <form className="d-flex justify-content-center" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Enter a new task..."
          className="form-control w-50 shadow-sm"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          className="btn btn-success ms-2 px-4 shadow-sm"
          type="submit"
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;   