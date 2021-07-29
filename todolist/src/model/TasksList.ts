import Task from "./Task"
import FilterType from "./FilterType"

export default class TasksList {
	#all: Task[]
	#usedFilter: FilterType

	constructor(all: Task[], usedFilter = FilterType.NONE) {
		this.#all = all
		this.#usedFilter = usedFilter ?? FilterType.NONE
	}

	get items() {
		return this.applyFilter(this.#all)
	}

	get quantity() {
		return this.items.length
	}

	get usedFilter() {
		return this.#usedFilter
	}

	isShowingAll(): boolean {
		return this.#usedFilter === FilterType.NONE
	}

	isShowingActives(): boolean {
		return this.#usedFilter === FilterType.ACTIVES
	}

	isShowingCompleted(): boolean {
		return this.#usedFilter === FilterType.COMPLETED
	}

	addTask(newTask: Task): TasksList {
		const all = [...this.#all]
		all.push(newTask)

		return new TasksList(all, this.usedFilter)
	}

	modifyTask(modifiedTask: Task): TasksList {
		const all = this.#all.map(task => {
			return task.id === modifiedTask.id ? modifiedTask : task
		})

		return new TasksList(all, this.usedFilter)
	}

	filterActives(): TasksList {
		if (!this.isShowingActives()) {
			return new TasksList(this.#all, FilterType.ACTIVES)
		}

		return this
	}

	filterCompleted(): TasksList {
		if (!this.isShowingCompleted()) {
			return new TasksList(this.#all, FilterType.COMPLETED)
		}

		return this
	}

	removeFilter(): TasksList {
		if (!this.isShowingAll()) {
			return new TasksList(this.#all, FilterType.NONE)
		}

		return this
	}

	removeCompleted(): TasksList {
		const actives = this.#all.filter(task => !task.completed)

		return new TasksList(actives, FilterType.NONE)
	}

	private applyFilter(tasks: Task[]): Task[] {
		if (this.isShowingActives()) {
			return this.applyActiveFilter(tasks)
		} else if (this.isShowingCompleted()) {
			return this.applyCompletedFilter(tasks)
		} else {
			return [...tasks]
		}
	}

	private applyActiveFilter(tasks: Task[]): Task[] {
		return tasks.filter(task => !task.completed)
	}

	private applyCompletedFilter(tasks: Task[]): Task[] {
		return tasks.filter(task => task.completed)
	}
}
