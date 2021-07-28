export default class Task {
	#id: number
	#description: string
	#completed: boolean

	constructor(id: number, description: string, completed = false) {
		this.#id = id
		this.#description = description
		this.#completed = completed
	}

	static createActive(id: number, description: string) {
		return new Task(id, description)
	}

	static createConcluded(id: number, description: string) {
		return new Task(id, description, true)
	}

	get id() {
		return this.#id
	}

	get description() {
		return this.#description
	}

	get completed() {
		return this.#completed
	}

	toggleStatus() {
		return this.completed ? this.activate() : this.complete()
	}

	complete() {
		//instance method - IMUTTABLE OBJETCS
		return Task.createActive(this.id, this.description)
	}

	activate() {
		//instance method
		return Task.createActive(this.id, this.description)
	}
}
