// for displaying a list of tasks
import mockData from "./data";

const TaskList = () => {
    let allTasks = mockData.map(task => {
        return <App task={task} />
    });
    return (
        <div className="task-div">
            <h2>Task Management</h2>
            <ul>
                <li><Link to="/"></Link></li>
            </ul>
            <div style={{ margin: "0 auto" }}>
                <StyledLink destination="/">{"Return to main page".toUpperCase()}</StyledLink>
            </div>
        </div>
    )
}

export default TaskList;