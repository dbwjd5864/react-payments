interface ModalItemProps {
	item: string;
	backgroundColor?: string;
}

const ModalItem = ({ item, backgroundColor = "#94dacd" }: ModalItemProps) => {
	return (
		<div className="modal-item-container cursor-pointer">
			<div
				className="modal-item-dot"
				style={{ backgroundColor }}
				id={item}
			></div>
			<span className="modal-item-name">{item}</span>
		</div>
	);
};

export default ModalItem;
