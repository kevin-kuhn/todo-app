import Task from "../model/Task"
import INITIAL_TASKS from "../data/mock"
import React, { useState } from "react"
import List from "../components/list/List"
import Header from "../components/template/Header"
import Content from "../components/template/Content"
import Form from "../components/form/Form"

export default function Home() {
	const [tasks, setTasks] = useState(INITIAL_TASKS)

	const handleNewTask = (newTask: Task) => {
		setTasks(tasks.addTask(newTask))
	}

	return (
		<div className='font-poppins flex bg-gray-300 flex-col min-h-screen h-screen'>
			<Header>
				<Form onSubmit={handleNewTask}></Form>
			</Header>
			<Content>
				<List
					tasks={tasks}
					onChange={newTasks => {
						setTasks(newTasks)
					}}
				/>
			</Content>
		</div>
	)
}
