import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, id, show, name, description, image, width }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="modal-header">
					<i className="fas fa-close fa-2x" onClick={handleClose}></i>
				</div>

				<div className="body">
					<div className="image-container">
						<img src={image} alt={name} />
					</div>
					<div className="info">
						<h3 className="uppercase font-bold text:lg md:text-xl">{name}</h3>
						<p className="description">{description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Modal;
