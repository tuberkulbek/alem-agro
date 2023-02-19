import { entriesType } from "../../app/redux/main"

type ModalType = {
    onClose?: () => void;
    modalInfo: entriesType | null
}

const Modal: React.FC<ModalType> = ({modalInfo, onClose}) => {
    return (
        <div className="modal">
            <button onClick={onClose} className="modal-button">X</button>
            <div>
                Description: {modalInfo?.Description}
            </div>
            <div>
                API: {modalInfo?.API}
            </div>
            <div>
                Link: {modalInfo?.Link}
            </div>
            <div>
                Category: {modalInfo?.Category}
            </div>
        </div>
    )
}

export default Modal