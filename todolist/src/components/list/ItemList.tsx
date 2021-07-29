import Radio from "./radio"

interface Props {
	value: string
	completed: boolean
	toggleStatus: () => void
}

export default function ItemList(props: Props) {
	const textStyle = props.completed ? "line-through text-gray-300" : "text-gray-500"

	return (
		<li
			onClick={props.toggleStatus}
			className={`flex items-center bg-white text-black p-5 text-xl border-b border-gray-400 cursor-pointer`}
		>
			<Radio checked={props.completed} />
			<span className={`font-light ml-5 ${textStyle}`}>{props.value}</span>
		</li>
	)
}
