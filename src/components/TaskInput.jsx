import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export const TaskInput = () => {
  // State to manage the input value
  const [input, setInput] = useState("");
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle form submission (add task)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Dispatch addTodo action with the input value
    dispatch(addTodo(input));
    // Clear the input field after submitting the task
    setInput("");
  };

  // Function to handle key press events (pressing Enter key to add task)
  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter
    if (e.key === "Enter") {
      // Call handleSubmit function to add task
      handleSubmit(e);
    }
  };

  return (
    // Form element for adding tasks
    <form
      onSubmit={handleSubmit} // Call handleSubmit function on form submission
      className="w-full flex flex-col md:flex-row shadow-md h-10 mt-7"
    >
      {/* Input field for entering task */}
      <input
        type="text"
        className="flex-1 h-full p-1"
        placeholder="Enter task..."
        onChange={(e) => setInput(e.target.value)} // Update input state on change
        onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
        value={input} // Bind input value to state
      />
      {/* Button to submit the task */}
      <button
        type="submit"
        className="bg-blue-800/70 text-white px-5 shadow-md"
      >
        Add
      </button>
    </form>
  );
};
