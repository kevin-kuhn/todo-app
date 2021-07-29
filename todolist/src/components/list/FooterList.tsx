import React from "react"
import TasksList from "../../model/TasksList"
import ButtonList from "./buttonList"

interface Props {
	tasks: TasksList
	onChange: (tasks: TasksList) => void
}

export default function FooterList({ tasks, onChange }: Props) {
	const renderItemsQuantity = () => {
		return (
			<>
				<span className={`text-gray-300 hidden md:inline`}>
					{tasks.quantity}
					{tasks.quantity === 0
						? " Nenhuma tarefa encontrada"
						: tasks.quantity === 1
						? " Tarefa encontrada"
						: " Tarefas Encontradas"}
				</span>
				<span className={`flex-1 hidden lg:inline`}></span>
			</>
		)
	}

	const renderFilterButtons = () => {
		return (
			<>
				<ButtonList
					selected={tasks.isShowingAll()}
					onClick={() => onChange(tasks.removeFilter())}
					className='hidden lg:inline'
				>
					Todas
				</ButtonList>
				<ButtonList
					selected={tasks.isShowingActives()}
					onClick={() => onChange(tasks.filterActives())}
					className='mx-4'
				>
					Ativas
				</ButtonList>
				<ButtonList
					selected={tasks.isShowingCompleted()}
					onClick={() => onChange(tasks.filterCompleted())}
				>
					Concluídas
				</ButtonList>
			</>
		)
	}

	const renderRemoveCompleted = () => {
		return (
			<>
			<span className={`flex-grow`}></span>
				<ButtonList onClick={() => onChange(tasks.removeCompleted())}>
					Excluir <span className={`hidden lg:inline`}>Concluídas</span>
				</ButtonList>
			</>
		)
	}

	return (
		<li className={`flex p-5`}>
			{renderItemsQuantity()}
			{renderFilterButtons()}
			{renderRemoveCompleted()}
		</li>
	)
}
