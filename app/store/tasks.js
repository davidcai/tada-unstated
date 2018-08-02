import axios from "axios";
import { Container } from "unstated";

export class TaskStore extends Container {
  state = {
    tasks: [],
    isLoading: false,
    error: null
  };

  loadTasks = () => {
    this.setState({ isLoading: true, tasks: [] });

    // Artifically delay the request to mimic network latency
    setTimeout(() => {
      axios
        .get("http://localhost:3000/tasks")
        .then(res => {
          this.setState({
            tasks: res.data,
            isLoading: false
          });
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            error: err
          });
        });
    }, 1000);
  };
}
