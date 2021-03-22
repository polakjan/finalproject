import React, { useContext, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { UserContext } from "../Hike";
import Modal from "react-bootstrap/Modal";

function Admin(props) {
    const user = useContext(UserContext);
    console.log(props);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function deleteEntity() {
        const id = props.props.id;
        const response = fetch(`/api/entity/${id}/destroy`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify({
                id: id,
            }),
        });

        location.href = "/";
    }

    return (
        <>
            {user && user.role === "admin" ? (
                <div>
                    <Button variant="danger" onClick={handleShow}>
                        Delete entity
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Do you really want to delete this entity?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                            <Button variant="danger" onClick={deleteEntity}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ) : null}
        </>
    );
}

export default Admin;
