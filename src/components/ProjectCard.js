import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FiX, FiChevronRight } from 'react-icons/fi';

export default function ProjectCard(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='mx-3'>
            <div className="card px-sm-3 py-sm-3 px-1 py-2" onClick={openModal}>
                <div className="card-body d-flex flex-column">
                    <div className="portfolio-thumbnail mb-4">
                        <img src={props.portfolioImage} alt="" />
                    </div>
                    <div className="category-list text-uppercase">
                        {props.category}
                    </div>
                    <div className="card-title mt-3">
                        {props.portfolioTitle}
                        <i className='icon ms-1'><HiArrowUpRight /></i>
                    </div>
                </div>
            </div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                ariaHideApp={false}
            >
                <button className="modal-close-btn" onClick={closeModal}>
                    <i><FiX /></i>
                </button>

                <div className="modal-dialog pe-auto modal-dialog-centered m-4 mt-5">
                    <div className="row align-items-center mt-4 mt-lg-0">
                        <div className="col-lg-6">
                            <div className="portfolio-thumbnail mb-3 mb-lg-0">
                                <img src={props.portfolioImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio-text ms-sm-3">
                                <div className="category-list text-uppercase">
                                    {props.category}
                                </div>
                                <h3 className="title">{props.portfolioTitle}</h3>
                                <p>{props.portfolioDescription}</p>
                            </div>

                            <div className='d-flex flex-column flex-xl-row'>
                                {props.gitHubLink !== "" && <div className="modal-btn-group ms-sm-3 text-center text-sm-start mt-2 mb-0 me-xl-5">
                                    <a href={props.gitHubLink} className="btn-primary modal-visit-btn text-uppercase" target='_blank' rel='noreferrer'>GitHub Repository <i style={{ fontSize: '18px' }}><FiChevronRight /></i></a>
                                </div>}

                                {props.portfolioLink !== "" && <div className="modal-btn-group ms-sm-3 text-center text-sm-start mt-2 mb-0">
                                    <a href={props.portfolioLink} className="btn-primary modal-visit-btn text-uppercase" target='_blank' rel='noreferrer'>Visit Project <i style={{ fontSize: '18px' }}><FiChevronRight /></i></a>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

            </ReactModal>
        </div>
    )
}
