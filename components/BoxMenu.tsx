import React, { useState } from "react";

interface BoxMenuProps {
	onSave: () => void;
	onCancel: () => void;
}

const BoxMenu: React.FC<BoxMenuProps> = ({ onSave, onCancel }) => {
	const [editedText, setEditedText] = useState("");
	const [editedClass, setEditedClass] = useState("");

	const handleSave = () => {
		onSave();
		setEditedText("");
		setEditedClass("");
	};
	const handleCancel = () => {
		onCancel();
		setEditedText("");
		setEditedClass("");
	};

	return (
		<form>
			<input
				type='text'
				placeholder='Edit Text'
				value={editedText}
				onChange={(e) => setEditedText(e.target.value)}
				className='block w-full mb-2 p-1 border border-gray-300'
			/>
			<input
				type='text'
				placeholder='Edit Class'
				value={editedClass}
				onChange={(e) => setEditedClass(e.target.value)}
				className='block w-full mb-2 p-1 border border-gray-300'
			/>
			<button
				type='button'
				onClick={handleSave}
				className='block w-full mb-2 p-1 border border-gray-300'
			>
				Save
			</button>
			<button
				type='button'
				onClick={handleCancel}
				className='block w-full mb-2 p-1 border border-gray-300'
			>
				Cancel
			</button>
		</form>
	);
};

export default BoxMenu;
