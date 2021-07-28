import Task from "../model/Task"
import INITIAL_TASKS from "../data/mock"

export default function Home() {
	let tasks = INITIAL_TASKS

	tasks = tasks.addTask(Task.createActive(4, 'task 4'))
	
	const renderTasks = () => {
		return tasks.items.map(task => {
			return (
				<div key={task.id}>
					<span>{task.id} | </span>
					<span> {task.description} | </span>
					<span> {task.completed ? "sim" : "não"}</span>
				</div>
			)
		})
	}

	return <div className='flex flex-col'>{renderTasks()}</div>
}
