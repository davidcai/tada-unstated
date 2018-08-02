import React from "react";
import PropTypes from "prop-types";
import { Subscribe } from "unstated";
import { TaskStore } from "../../store";

export const TaskListContainer = () => (
  <Subscribe to={[TaskStore]}>
    {taskStore => <TaskList store={taskStore} />}
  </Subscribe>
);

export class TaskList extends React.Component {
  componentDidMount() {
    this.props.store.loadTasks();
  }

  render() {
    const {
      store: {
        state: { tasks, isLoading, error }
      }
    } = this.props;

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

TaskList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};
