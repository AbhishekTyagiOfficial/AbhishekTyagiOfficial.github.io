import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ClientsCard(props) {
    return (
        <div className="row justify-content-evenly mt-5 px-4 px-sm-5">
            <div className="card client-profile col-lg-4">
                <div className="card-body d-flex flex-column flex-sm-row flex-lg-column">
                    <div className="client-thumbnail mb-4 mb-sm-0 mb-lg-4">
                        <img src={props.clientImg} alt="" />
                    </div>
                    <div className="client-content">
                        <span className="client-subtitle text-uppercase">{props.clientSubtitle}</span>
                        <h3 className='client-title'>{props.clientName}</h3>
                        <span className="client-designation">{props.clientDesignation}</span>
                    </div>
                </div>
            </div>

            <div className="card client-review col-lg-7 p-0 ms-lg-3">
                <div className="card-body px-4 px-md-5">
                    <div className="title-area d-flex flex-column flex-md-row flex-lg-column flex-xl-row justify-content-between align-items-start align-items-md-center align-items-lg-start align-items-xl-center">
                        <div className="title-info my-md-4">
                            <h3 className="title mt-md-2">{props.title}</h3>
                            <span className="date">{props.date}</span>
                        </div>
                        <div className="rating mt-3 mt-md-0 mb-4 mb-md-0 mb-lg-4 mb-xl-0">
                            <i className='px-1 text-warning'><FaStar /></i>
                            <i className='px-1 text-warning'><FaStar /></i>
                            <i className='px-1 text-warning'><FaStar /></i>
                            <i className='px-1 text-warning'><FaStar /></i>
                            <i className='px-1 text-warning'><FaStar /></i>
                        </div>
                    </div>
                    <div className="description-area my-4">
                        <p className='description'>{props.review}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
