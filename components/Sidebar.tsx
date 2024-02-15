import React from "react";
import objectData from "../public/objectData.json";

const Sidebar: React.FC = () => {
	const handleBoxClick = (boxId: number[]) => {
		// Implement logic to open popup menu in canvas for the selected box
	};

	return (
		<div>
			{Object.keys(objectData).map((className) => (
				<div key={className}>
					{className}
					{objectData.boxes
						.filter((box) => box.class === className)
						.map((box, index) => (
							<div key={index} onClick={() => handleBoxClick(box.points)}>
								{box.text}
							</div>
						))}
				</div>
			))}
		</div>
	);
};

export default Sidebar;
