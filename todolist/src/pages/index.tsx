import Task from "../model/Task"

export default function Home() {

	let task: Task = new Task(1, 'sdsdsd')

	return (
		<div className="flex flex-col">
			<span>{task.id}</span>
			<span>{task.description}</span>
			<span>{task.completed ? "sim": "n"}</span>
		</div>
	)
}
