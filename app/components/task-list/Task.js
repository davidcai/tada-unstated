import React from "react";
import PropTypes from "prop-types";

export const Task = ({ task, onChange }) => {
  const id = `task-${task.id}`;

  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={task.isDone}
        onChange={onChange}
      />
      {task.name}
    </label>
  );
};

export const TaskPropType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  isDone: PropTypes.bool,
  onChange: PropTypes.func
});

Task.propTypes = {
  task: TaskPropType.isRequired,
  onChange: PropTypes.func
};

Task.defaultProps = {
  onChange: () => {}
};
