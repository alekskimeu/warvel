import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, name, description, image, width }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="modal-header">
					<h3 className="uppercase font-bold">Zaka Warrior</h3>
					<i className="fas fa-close" onClick={handleClose}></i>
				</div>

				<div className="body">
					<div className="image-container">
						<img src={image} alt={name} />
					</div>
					<div className="info">
						<h3 className="uppercase font-bold">{name}</h3>
						<p className="description">{description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Modal;
