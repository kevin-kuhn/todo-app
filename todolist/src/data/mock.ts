import Task from "../model/Task"
import TasksList from "../model/TasksList"
import FilterType from "../model/FilterType"

const MOCK_TASKS: Task[] = [
	// Task.createActive(1, "task 1"),
	// Task.createComplete(2, "task 2"),
	// Task.createActive(3, "task 3"),
]

export default new TasksList(MOCK_TASKS, FilterType.NONE)
