import { Link, useParams } from 'react-router';
import mockData from './data';

const TaskDetail = () => {

    const { id } = useParams();
    const taskId = parseInt(id);
    const task = mockData.find(task => task.id == taskId);

    // Invalid or missing task IDs are handled gracefully with an error message
    if (!mockData[id]) {
        return <p>Error: Invalid ID</p>
    }

    return (
        <div id="detail-page">
            <h1>PRODUCT DETAILS</h1>
            <h3>Displaying details for product ID: {id}</h3>
            <br /> <br />
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <Link to="/">return to list</Link>
        </div>
    )
}

export default TaskDetail;