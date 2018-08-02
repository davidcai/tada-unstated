import React from "react";
import PropTypes from "prop-types";
import { Subscribe } from "unstated";
import { TaskStore } from "../../store";
import { Task, TaskPropType } from "./Task";

export const TaskListContainer = () => (
  <Subscribe to={[TaskStore]}>
    {taskStore => (
      <TaskList
        {...taskStore.state}
        loadTasks={taskStore.loadTasks}
        updateTask={taskStore.updateTask}
      />
    )}
  </Subscribe>
);

export class TaskList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(TaskPropType),
    isLoading: PropTypes.bool,
    error: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    loadTasks: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  static defaultProps = {
    tasks: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.props.loadTasks();
  }

  handleToggle = task => {
    this.props.updateTask({
      ...task,
      isDone: !task.isDone
    });
  };

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
          tasks.map(task => (
            <li key={task.id}>
              <Task task={task} onChange={() => this.handleToggle(task)} />
            </li>
          ))}
      </ul>
    );
  }
}
