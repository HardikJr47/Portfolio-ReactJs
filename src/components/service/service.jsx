import React from "react";
import { Link } from "react-router-dom";

import "./styles/service.css";

const Project = (props) => {
	const { logo, title, link } = props;

	return (
		<>
			<div className="service">
				<Link to={link}>
					<div className="service-container">
						<div className="service-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="service-title">{title}</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Project;
