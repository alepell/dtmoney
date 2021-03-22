import Modal from "react-modal";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
        >
            <h2>teste</h2>
        </Modal>
    )
}