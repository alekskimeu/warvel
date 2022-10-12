import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Modal.css";

const Modal = ({ handleClose, id, show, name, description, image, width }) => {
	useEffect(() => {
		AOS.init();
	});

	const showHideClassName = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="modal-header">
					<i className="fas fa-close fa-2x" onClick={handleClose}></i>
				</div>

				<div className="body">
					<div
						className="image-container"
						data-aos="zoom-in"
						data-aos-duration="1600"
					>
						<img src={image} alt={name} />
					</div>
					<div className="info" data-aos="fade-up" data-aos-duration="1600">
						<h3 className="uppercase font-bold text:lg md:text-xl">{name}</h3>
						<p className="description">{description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Modal;
