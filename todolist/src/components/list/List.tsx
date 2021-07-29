import React from "react"
import TasksList from "../../model/TasksList"
import FooterList from "./FooterList"
import ItemList from "./ItemList"

interface Props {
	tasks: TasksList
	onChange: (tasks: TasksList) => void
}

export default function List(props: Props) {
	const { tasks, onChange } = props

	const renderTasks = () => {
		return tasks.items.map(task => (
			<ItemList
				key={task.id}
				value={task.description}
				completed={task.completed}
				toggleStatus={() => {
					const changedTask = task.toggleStatus()
					const newList = tasks.modifyTask(changedTask)

					props.onChange(newList)
				}}
			/>
		))
	}

	return (
		<div className={`flex w-3/5 items-start relative`}>
			<ul className={`absolute -top-14 w-full rounded-lg list-none bg-white shadow-lg`}>
				{renderTasks()}
				<FooterList tasks={tasks} onChange={onChange}/>
			</ul>
		</div>
	)
}
