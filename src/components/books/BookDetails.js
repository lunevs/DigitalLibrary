import React from "react";
import {useParams} from "react-router-dom";

const BookDetails = () => {
    const id = useParams().id;
    return (
        <h2>
            {id}
        </h2>
    );
}

export default BookDetails;
