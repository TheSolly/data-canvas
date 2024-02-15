import React, { useState } from "react";

interface BoxMenuProps {
	onSave: () => void;
	onCancel: () => void;
	onDelete: () => void;
	setBoxText: (text: string) => void;
	setBoxClass: (text: string) => void;
}

const BoxMenu: React.FC<BoxMenuProps> = ({
	onSave,
	onCancel,
	onDelete,
	setBoxText,
	setBoxClass,
}) => {
	const [editedText, setEditedText] = useState("");
	const [editedClass, setEditedClass] = useState("");

	const handleSave = () => {
		onSave();
		if (editedText) {
			setBoxText(editedText);
		}
		if (editedClass) {
			setBoxClass(editedClass);
		}
	};
	const handleCancel = () => {
		onCancel();
	};

	const handleDelete = () => {
		onDelete();
	};

	return (
		<form>
			<input
				type='text'
				placeholder='Edit Text'
				value={editedText}
				onChange={(e) => setEditedText(e.target.value)}
				className='block w-full mb-2 p-1 border border-gray-300 rounded-md shadow-md'
			/>
			<input
				type='text'
				placeholder='Edit Class'
				value={editedClass}
				onChange={(e) => setEditedClass(e.target.value)}
				className='block w-full mb-2 p-1 border border-gray-300 rounded-md shadow-md'
			/>
			<button
				type='button'
				onClick={handleSave}
				className='block w-full mb-2 p-1 border border-gray-300 shadow-md bg-blue-500 text-white rounded-md'
			>
				Save
			</button>
			<button
				type='button'
				onClick={handleCancel}
				className='block w-full mb-2 p-1 border border-gray-300 shadow-md bg-gray-500 text-white rounded-md'
			>
				Cancel
			</button>
			<button
				type='button'
				onClick={handleDelete}
				className='block w-full mb-2 p-1 border border-gray-300 shadow-md bg-red-500 text-white rounded-md'
			>
				Delete
			</button>
		</form>
	);
};

export default BoxMenu;
