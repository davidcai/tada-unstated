import axios from "axios";
import { Container } from "unstated";
import findIndex from "lodash/findIndex";

export class TaskStore extends Container {
  state = {
    tasks: [],
    isLoading: false,
    error: null
  };

  loadTasks = () => {
    this.setState({ isLoading: true, tasks: [] });

    return axios
      .get("http://localhost:3000/tasks")
      .then(res => {
        this.setState({
          tasks: res.data,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error
        });
      });
  };

  updateTask = task =>
    axios
      .patch(`http://localhost:3000/tasks/${task.id}`, { ...task })
      .then(res => {
        this.setState(prevState => {
          const tasks = prevState.tasks.slice();
          const index = findIndex(tasks, { id: task.id });
          tasks[index] = res.data;

          return {
            tasks
          };
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
}
