import React from 'react';

export default function ProgessBar(props) {
    return (
        <div className="progress-chart my-4">
            <h6 className="text-uppercase">{props.skill}</h6>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${props.percentage}%` }}  aria-valuenow={props.percentage} aria-valuemin="0" aria-valuemax="100"><span className='progress-label'>{props.percentage}%</span></div>
            </div>
        </div>
    )
}
