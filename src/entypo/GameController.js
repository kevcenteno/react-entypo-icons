import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--GameController';

let EntypoGameController = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.444,9.361c-0.882-4.926-2.854-6.379-3.903-6.379c-1.637,0-2.057,1.217-5.541,1.258C6.516,4.199,6.096,2.982,4.459,2.982c-1.049,0-3.022,1.453-3.904,6.379c-0.503,2.812-1.049,7.01,0.252,7.514c1.619,0.627,2.168-0.941,3.946-2.266C6.558,13.266,7.424,12.95,10,12.95c2.576,0,3.442,0.316,5.247,1.659c1.778,1.324,2.327,2.893,3.946,2.266C20.494,16.371,19.948,12.174,19.444,9.361z M6,10c-1.105,0-2-0.896-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C8,9.104,7.104,10,6,10z M13,10c-0.553,0-1-0.447-1-1s0.447-1,1-1c0.553,0,1,0.447,1,1S13.553,10,13,10z M15,8c-0.553,0-1-0.447-1-1s0.447-1,1-1c0.553,0,1,0.447,1,1S15.553,8,15,8z"/>
    </EntypoIcon>
);

export default EntypoGameController;
