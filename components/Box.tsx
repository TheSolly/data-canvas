import React, { useEffect, useRef, useState } from "react";

interface BoxProps {
	box: {
		points: number[];
		text: string;
		class: string;
	};
	onDoubleClick: (boxPoints: number[]) => void;
	onDelete: (boxPoints: number[]) => void;
}

const Box: React.FC<BoxProps> = ({ box, onDoubleClick, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedText, setEditedText] = useState(box.text);
	const [parentWidth, setParentWidth] = useState(1);
	const [parentHeight, setParentHeight] = useState(1);
	const boxRef = useRef<HTMLDivElement>(null);

	const handleDoubleClick = () => {
		setIsEditing(true);
	};
	const handleSave = () => {
		onDoubleClick(box.points);
		setIsEditing(false);
	};
	const handleCancel = () => {
		setEditedText(box.text);
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
			className={"absolute border-2 rounded-lg bg-white"}
			style={{
				left: `${(box.points[0] / parentWidth) * 100}%`,
				top: `${(box.points[1] / parentHeight) * 100}%`,
				width: `${((box.points[2] - box.points[0]) / parentWidth) * 100}%`,
				height: `${((box.points[3] - box.points[1]) / parentHeight) * 100}%`,
			}}
			onDoubleClick={handleDoubleClick}
		>
			{isEditing ? (
				<div>
					<input
						className='w-full'
						type='text'
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
					/>
					<div className='flex'>
						<button
							className='bg-green-500 text-white font-bold py-1 px-2 rounded mr-2'
							onClick={handleSave}
						>
							Save
						</button>
						<button
							className='bg-red-500 text-white font-bold py-1 px-2 rounded mr-2'
							onClick={handleCancel}
						>
							Cancel
						</button>
						<button
							className='bg-red-500 text-white font-bold py-1 px-2 rounded'
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
				</div>
			) : (
				<div className={"text-xs rounded-lg"}>{box.text}</div>
			)}
		</div>
	);
};
export default Box;
