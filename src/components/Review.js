import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CheckCircleOutline, Download, Pets } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const Review = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [icon, setIcon] = useState(<CheckCircleOutline style={{ color: grey[300], fontSize: '2rem' }} />);

    const handleReviewClick = () => {
        setShowModal(true);
        setIcon(<Pets style={{ color: grey[300], fontSize: '2rem' }} />);
        data.downloadPdf = true;
    };

    const handleClose = () => setShowModal(false);

    // Función para formatear la fecha en formato dd mmm yyyy
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric'  });
    };

    return (
        <div className="review-row">
            <div className="icon">
                <div className="icon-wrapper">
                    <span>{icon}</span>
                </div>
            </div>
            <div className="data">
                <span><strong className="type">{data.type}</strong>{data.downloadPdf && (<div className="completed"><span >Completed</span></div>)}</span>
                <p className="message">{data.message}</p>
                <div>
                    {data.downloadPdf && (
                        <span className="download">
                            <Download style={{ fontSize: '1rem', marginRight: '5px' }} /> Download PDF
                        </span>
                    )}
                    {data.downloadPdf && (
                        <span className="download">
                            <Download style={{ fontSize: '1rem', marginLeft: '5px' }} /> {data.type} XML
                        </span>
                    )}
                </div>
                <p className="submitted"><small>Submitted On: {formatDate(data.submittedOn)}</small></p>
            </div>
            <div className="button">
                <Button variant="btn btn-outline-primary" onClick={handleReviewClick}>Review {data.type}</Button>
            </div>

            {<Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review({data.type})</Modal.Title>
                </Modal.Header>
                <Modal.Body>Review({data.type}) Selected</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
};

export default Review;
