import React, { useState } from "react";
import Box from "./Box";
import objectData from "../public/objectData.json";

type ImageCanvasProps = {
	selectedItem: number[] | null;
};

const ImageCanvas: React.FC<ImageCanvasProps> = ({ selectedItem }) => {
	const [boxes, setBoxes] = useState(objectData.boxes);

	const onDelete = (boxes: any) => {
		objectData.boxes = objectData.boxes.filter((b: any) => b.points !== boxes);
		setBoxes(objectData.boxes);
	};

	return (
		<div className={"relative max-w-fit h-full"}>
			<img
				src={objectData.base64}
				alt='Object Image'
				className='object-cover'
			/>
			{boxes.map((box, index) => (
				<Box
					key={index}
					box={box}
					onDelete={onDelete}
					selectedItem={selectedItem}
				/>
			))}
		</div>
	);
};

export default ImageCanvas;
