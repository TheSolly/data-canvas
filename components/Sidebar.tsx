import React from "react";
import objectData from "../public/objectData.json";

enum ClassName {
	Date = "Date",
	Number = "Number",
	Amount = "Amount",
	Supplier = "Supplier",
	Description = "Description",
	Name = "Name",
}

const Sidebar: React.FC = () => {
	const handleBoxClick = (boxId: number[]) => {
		// Implement logic to open popup menu in canvas for the selected box
	};

	return (
		<aside className='sidebar'>
			{Object.keys(ClassName).map((className, index) => (
				<>
					<div key={index}>
						<h3>{className}</h3>
					</div>
					<div>
						{objectData.boxes
							.filter((box) => box.class === className)
							.map((box, index) => (
								<div key={index} onClick={() => handleBoxClick(box.points)}>
									{box.text}
								</div>
							))}
					</div>
				</>
			))}
		</aside>
	);
};

export default Sidebar;
