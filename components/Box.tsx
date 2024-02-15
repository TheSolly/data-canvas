import React, { useEffect, useRef, useState } from "react";
import BoxMenu from "./BoxMenu";

interface BoxProps {
	box: {
		points: number[];
		text: string;
		class: string;
	};
	onDelete: (boxes: any) => void;
}

const classToColor: Record<string, string> = {
	Date: "green",
	Number: "blue",
	Amount: "orange",
	Supplier: "purple",
	Description: "teal",
	Name: "red",
};

const Box: React.FC<BoxProps> = ({ box, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [boxText, setBoxText] = useState(box.text);
	const [boxClass, setBoxClass] = useState(box.class);
	const [parentWidth, setParentWidth] = useState(1);
	const [parentHeight, setParentHeight] = useState(1);
	const boxRef = useRef<HTMLDivElement>(null);

	const handleDoubleClick = () => {
		setIsEditing(true);
	};
	const handleSave = () => {
		setIsEditing(false);
	};
	const handleCancel = () => {
		setBoxText(box.text);
		setIsEditing(false);
	};
	const handleDelete = () => {
		onDelete(box.points);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
				setIsEditing(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		if (boxRef.current?.parentElement) {
			setParentWidth(boxRef.current.parentElement.offsetWidth);
			setParentHeight(boxRef.current.parentElement.offsetHeight);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [
		boxRef.current?.parentElement,
		boxRef.current?.parentElement?.offsetWidth,
		boxRef.current?.parentElement?.offsetHeight,
	]);

	return (
		<div
			ref={boxRef}
			className={"absolute bg-white border-2 border-solid"}
			style={{
				left: `${(box.points[0] / parentWidth) * 100}%`,
				top: `${(box.points[1] / parentHeight) * 100}%`,
				width: `${((box.points[2] - box.points[0]) / parentWidth) * 100}%`,
				height: `${((box.points[3] - box.points[1]) / parentHeight) * 100}%`,
				borderColor: classToColor[box.class],
			}}
			onDoubleClick={handleDoubleClick}
		>
			{!isEditing ? (
				<>
					<div className={"text-xs"}>{boxText}</div>
					<div className={"text-xs hidden"}>{boxClass}</div>
				</>
			) : (
				<div
					className={
						"mt-10 p-2 bg-white border-2 border-solid border-gray-300 shadow-md rounded-md"
					}
					style={{ position: "absolute", zIndex: 10 }}
				>
					<BoxMenu
						onSave={handleSave}
						onCancel={handleCancel}
						onDelete={handleDelete}
						setBoxText={setBoxText}
						setBoxClass={setBoxClass}
					/>
				</div>
			)}
		</div>
	);
};
export default Box;
