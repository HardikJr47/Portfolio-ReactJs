import React from "react";

import Service from "./service";

import INFO from "../../data/user";

import "./styles/allService.css";

const AllService = () => {
	return (
		<div className="all-service-container">
			{INFO.service.map((service, index) => (
				<div className="all-service" key={index}>
					<Service logo={service.logo} title={service.title} />
				</div>
			))}
		</div>
	);
};

export default AllService;
