import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./seo-web.png"
								alt="seo-web"
								className="work-image"
							/>
							<div className="work-title">Seo Web Creative</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">
								Nov 2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./oliveconcepts.jpeg"
								alt="oliveconcepts"
								className="work-image"
							/>
							<div className="work-title">OliveConcepts</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">
								Jan 2022 - Aug 2023
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./unnamed.jpg"
								alt="unnamed"
								className="work-image"
							/>
							<div className="work-title">Ksky Technologies</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">
								Nov 2020 - Apr 2021
							</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
