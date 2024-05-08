import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllService from "../components/service/allService";

import "./styles/service.css";

const Service = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="service" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={50} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Skills and Expertise
						</div>

						<div className="subtitle projects-subtitle">
							In the realm of frontend development, I bring forth
							a comprehensive array of skills honed through years
							of hands-on experience and continuous learning.
							Proficient in HTML, CSS, and JavaScript, I adeptly
							translate design mockups into responsive and
							visually appealing web interfaces. Additionally, I
							leverage modern frameworks such as React.js to build
							dynamic and interactive user experiences, harnessing
							the power of component-based architecture for
							scalability and maintainability.
						</div>

						<div className="projects-list">
							<AllService />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
