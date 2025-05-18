// for displaying a list of tasks
import mockData from "./data";
import { Link } from "react-router";

const TaskList = () => {

    return (

        <div id="task-list">
            <h1>
                Task Management
            </h1>
            <br /><br />
            {/* The task list displays clickable links */}
            <ul>
                {mockData.map(task => (
                    <div>
                        <li>
                            {/* Each link navigates to a detail page for the corresponding task */}
                            <Link to={`/task/${task.id}`}>{task.title}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default TaskList;