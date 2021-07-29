import { useState } from "react"
import Task from "../../model/Task"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
	onSubmit: (task: Task) => void
}

export default function Form(props: Props) {
	const [description, setDescription] = useState("")

	const handleNewTask = () => {
		if (description?.trim().length > 0) {
			const newTask = Task.createActive(Math.random(), description)

			props.onSubmit(newTask)
			setDescription("")
		}
	}

	return (
		<div className='flex flex-1 justify-center'>
			<input
				type='text'
				value={description}
				placeholder='Informe sua próxima tarefa'
				className='border-purple-400 focus:outline-none focus:ring-2 py-2 px-3 rounded-lg border-2 w-1/2 focus:ring-purple-600 text-2xl'
				onChange={e => setDescription(e.target.value)}
				onKeyDown={e => (e.key === "Enter" ? handleNewTask() : false)}
			/>
			<button
				onClick={handleNewTask}
				className='ml-3 bg-purple-600 text-white text-xl focus:outline-none px-4 py-3 rounded-lg'
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	)
}
