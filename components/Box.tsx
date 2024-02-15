import React, { useState } from "react";

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

	return (
		<div
			className={`absolute border-2 border-${box.class.toLowerCase()} p-2`}
			style={{
				left: `${box.points[0]}%`,
				top: `${box.points[1]}%`,
				width: `${box.points[2] - box.points[0]}%`,
				height: `${box.points[3] - box.points[1]}%`,
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
					<button onClick={handleSave}>Save</button>
					<button onClick={handleCancel}>Cancel</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
			) : (
				<div>{box.text}</div>
			)}
		</div>
	);
};
export default Box;
