import LoaderImg from "../assets/image/loader.gif";
import React from "react";
import {Spinner} from "react-bootstrap";

export const Loader = () => {
    return (
        <Spinner animation="border" role="status" variant='primary'>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

