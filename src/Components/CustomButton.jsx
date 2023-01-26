import React from "react";
import { Builder } from "@builder.io/react";

export const CustomButton = (props) => {
	return (
		<button
			style={{
				backgroundColor: props.backgroundColor,
				borderRadius: "8px",
				fontFamily: "monospace",
				color: "#FFF",
                border: 0,
                padding: '10px'
			}}
		>
			Hey! {props.title}
		</button>
	);
};

// Make sure that every page where renders Builder
// content calls the file containing this function call
Builder.registerComponent(CustomButton, {
	name: "CustomButton",
	inputs: [
        { name: "title", type: "text" },
        { name: 'backgroundColor', type: 'color' }
    ],
	image: "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
});
