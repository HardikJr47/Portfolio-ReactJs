import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { image, logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank">
					<div className="project-container">
						<img
							className="thumbnail-img"
							src={image}
							alt={title}
						/>
						<div className="project-title">{title}</div>
						<div className="project-logo">
							{logo.map((img, index) => (
								<img key={index} src={img} alt={img} />
							))}
						</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
