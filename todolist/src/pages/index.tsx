import Task from "../model/Task"
import INITIAL_TASKS from "../data/mock"
import React, { useState } from "react"
import List from "../components/list/list"

export default function Home() {
	const [tasks, setTasks] = useState(INITIAL_TASKS)

	return (
		<div className='font-poppins flex bg-gray-300 flex-col justify-center items-center h-screen'>
			<List tasks={tasks} onChange={(newTasks) => {
				setTasks(newTasks)
			}}></List>
		</div>
	)
}
