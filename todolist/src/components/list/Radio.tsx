interface Props {
	checked: boolean
}

export default function Radio(props: Props) {
	const gradient = props.checked
		? "bg-gradient-to-br from-blue-400 to-purple-500"
		: ""

	return (
		<div
			className={`flex justify-center text-white color items-center h-7 w-7 rounded-full cursor-pointer border border-gray-400 ${gradient}`}
		>
			{props.checked ? "x" : ""}
		</div>
	)
}
