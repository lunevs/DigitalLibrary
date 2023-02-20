import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faRemove} from "@fortawesome/free-solid-svg-icons";
import "./testLoader.style.css";


const TestLoader = () => {

    const [files, setFiles] = useState({});
    const inputHandler = useRef(null);

    const handleInputClick = () => {
        inputHandler.current.click();
    }

    const addNewFile = (event) => {
        const { files: newFiles } = event.target;
        let newState = {...files};
        for(let i = 0; i < newFiles.length; i++) {
            newState = {
                ...newState,
                [newFiles[i].name]: newFiles[i]
            };
        }
        setFiles(newState);
    }

    const handleRemoveImage = (fName) => {
        console.log(`remove file ${fName}`)
        delete files[fName];
        setFiles({ ...files });
    }

    const previewImage = (imgUrl) => {

    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imageModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upload-block bg-light border border-secondary rounded-2">
                <span className="load-label" onClick={handleInputClick}>
                    <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                    upload new book screenshot
                </span>
                <input type="file" ref={inputHandler} onChange={addNewFile} multiple />
                <div className="images-block">
                    {Object.keys(files).map((fileName, index) => {
                        const file = files[fileName];
                        return (
                            <div className="image-item" key={index}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`image preview ${fileName}`}
                                    className="image-preview"
                                    onClick={() => previewImage(URL.createObjectURL(file))}
                                />
                                <FontAwesomeIcon
                                    icon={faRemove}
                                    className="trash-icon"
                                    onClick={() => handleRemoveImage(fileName)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default TestLoader;