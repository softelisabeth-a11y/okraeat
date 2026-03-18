//Compoments
import Modal from 'react-bootstrap/Modal';

//style
import { ModalCloser, Title } from './modalStyle';

//assets
import { X } from '../../../assets/icons/modal/Svg';


export default function CustumModal({ title, headColor, children, show, handleClose, info }) {
    return (
        <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
            <Modal.Header style={{ backgroundColor: headColor, padding: "5px" }}>
                <div></div>
                <Title style={{ fontSize: "16px", fontWeight: "500", lineHeight: "20.8px" }}>
                    {title}
                </Title>
                <ModalCloser onClick={handleClose} ><X /></ModalCloser>
            </Modal.Header>
            <Modal.Body>

                <p style={{color: "red"}}>{info}</p>
                
                {children}
            </Modal.Body>
        </Modal>
    )
}


