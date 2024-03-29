import "./App.css";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <div className="max-w-3xl pt-5 m-auto w-full shadow-md p-3">
        {/* Component to allow users to add tasks */}
        <TaskInput />
        {/* Component to display the list of tasks */}
        <TaskList />
      </div>
    </>
  );
}

export default App;
