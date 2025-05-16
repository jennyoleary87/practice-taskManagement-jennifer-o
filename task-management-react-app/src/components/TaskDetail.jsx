import { Link, useParams } from 'react-router';
import StyledLink from './StyledLink';
// import StyledLink from 

const TaskDetail = ({ allTasks }) => {

    const { id } = useParams();
    const [task] = [...mockData].map(obj => obj.id == id);

    return (
        <div>
            <h2>{task.name}</h2>
            <p>{`(${capitalize(task.description)})`}</p>
            <Link to="/">Task One</Link>
            <div style={{ margin: "0 auto" }}>
                <StyledLink destination="/">{"Return to main page".toUpperCase()}</StyledLink>
            </div>
        </div>
    )
}

export default TaskDetail;