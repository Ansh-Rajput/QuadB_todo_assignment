import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { MdDelete } from "react-icons/md";

export const TaskList = () => {
  // Get todos from Redux store
  const todos = useSelector((state) => state.todos);
  //Node: I opted not to create a separate component for this task due to its lack of reusability and relatively straightforward implementation.

  return (
    <>
      <h2 className="text-3xl text-center my-2">Tasks</h2>
      {/* Container for displaying the list of tasks with scrollbar */}
      <div className="flex flex-col gap-2 py-1 max-h-[70vh] overflow-y-scroll my-1 mt-0 hideScrollbar">
        {todos.map((todo) => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export const Todo = ({ text, id }) => {
  // Container for individual todo item

  const dispatch = useDispatch();
  return (
    <div className="text-lg flex gap-2 shadow-md h-12 rounded-md">
      <div className="p-1 flex-1 h-full flex items-center">{text}</div>
      <button
        className="bg-blue-800/70 text-white px-5 shadow-md rounded-md"
        onClick={() => dispatch(removeTodo(id))}
      >
        <MdDelete />
      </button>
    </div>
  );
};
