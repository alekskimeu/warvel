import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, name, description, image, width }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassName}>
			<section
				className="modal-main"
				style={{
					minWidth: width ? width : "45%",
				}}
			>
				<div className="modal-header">
					<h3 className="uppercase font-bold">{name}</h3>
					<i className="fas fa-close" onClick={handleClose}></i>
				</div>

				<div className="body">
					<img src={image} alt={name} />
					<p className="description">{description}</p>
				</div>
			</section>
		</div>
	);
};

export default Modal;
