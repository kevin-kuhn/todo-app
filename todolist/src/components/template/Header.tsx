import React from "react"

export default function Header(props) {
	return (
		<div className="flex h-1/3 bg-img-tiririca bg-no-repeat bg-cover">
			<div className={`flex flex-1 h-full justify-center bg-gradient-to-r from-purple-600 via-transparent to-blue-600 items-center`}>{props.children}</div>
		</div>
	)
}
