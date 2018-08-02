import React from "react";
import PropTypes from "prop-types";
import { Subscribe } from "unstated";
import { TaskStore } from "../../store";

export const TaskListContainer = () => (
  <Subscribe to={[TaskStore]}>
    {taskStore => (
      <TaskList {...taskStore.state} loadTasks={taskStore.loadTasks} />
    )}
  </Subscribe>
);

export class TaskList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        isDone: PropTypes.bool
      })
    ),
    isLoading: PropTypes.bool,
    error: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    loadTasks: PropTypes.func.isRequired
  };

  static defaultProps = {
    tasks: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.props.loadTasks();
  }

  render() {
    const { tasks, isLoading, error } = this.props;

    if (isLoading) {
      return <p>Please wait ...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <ul>
        {tasks &&
          Object.keys(tasks).map(id => <li key={id}>{tasks[id].name}</li>)}
      </ul>
    );
  }
}
