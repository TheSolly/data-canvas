import React, { useState } from "react";
import Box from "./Box";
import BoxMenu from "./BoxMenu";
import objectData from "../public/objectData.json";

const ImageCanvas: React.FC = () => {
	const [boxes, setBoxes] = useState(objectData.boxes);

	const handleBoxDoubleClick = (boxId: number[]) => {
		// Implement logic to show popup menu for editing text and class
	};

	const handleSaveChanges = () => {
		// Implement logic to save changes for the session
	};

	const handleCancel = () => {
		// Implement logic to cancel changes for the session
	};

	const handleDeleteBox = (boxId: number[]) => {
		// Implement logic to delete a box
	};

	return (
		<div className='relative'>
			<img
				src={`data:image/png;base64,${objectData.base64}`}
				alt='Object Image'
			/>
			{boxes.map((box, index) => (
				<Box
					key={index}
					box={box}
					onDoubleClick={handleBoxDoubleClick}
					onDelete={handleDeleteBox}
				/>
			))}
			<BoxMenu onSave={handleSaveChanges} onCancel={handleCancel} />
		</div>
	);
};

export default ImageCanvas;