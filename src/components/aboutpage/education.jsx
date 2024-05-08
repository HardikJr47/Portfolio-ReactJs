import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./RNGPIT.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								R. N. G. Patel Institute of Technology
							</div>
							<div className="work-subtitle">
								Bachelor of Engineering (GTU)
							</div>
							<div className="work-duration">
								Jul 2014 - May 2018
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
