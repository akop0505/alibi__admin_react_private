import React from 'react';
import './EventsStyle.css';

class EventsHeader extends React.Component{
    render(){
        return(
            <div className="cardHeader">
                <span className='eventTime'>04/01/2019  12:45</span>
                <div className='headerName'>Kraft Beer</div>
                <div className='headerTopic'>The best beer for you</div>
            </div>
        )
    }
}
export default EventsHeader