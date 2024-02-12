import React from 'react';

export default function FeaturesCard(props) {
    return (
        <div className="col-xl-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay={props.aosDelay} data-aos-once="true">
            <div className="card px-sm-4 py-sm-4 px-1 py-2">
                <div className="card-body d-flex flex-column">
                    <h1 className="icon mb-4">
                        {props.icon}
                    </h1>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
