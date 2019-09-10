import React from 'react';
import {Button} from 'reactstrap';
import './ABButton.css'

export const ABButton = (props) => {
  const {color} = props;
  return (<Button className={`ab-button btn-${color} ${props.className}` } onClick={props.onClick} style={props.btnStyle}>
    {props.icon === 'reply' && <i className={`fa fa-reply btn-icon-left`}/>}

    <span className={'btn-title'}>
        {props.name}
      </span>
    {props.icon === 'share' && <i className={`fa fa-share btn-icon-left`}/>}
    {props.icon === 'bars'  && <i className={`fa fa-bars`}/> }
    {props.icon === 'close' && <i className={`fa fa-close`}/> }
    {props.icon === 'clock' && <i className={`fa fa-clock-o`}/> }
    {props.icon === 'check' && <i className={`fa fa-check`}/> }
    {props.icon === 'audion' && <i className={`fa fa-microphone`}/> }
    {props.icon === 'plus' && <i className={`fa fa-plus`}/> }
  </Button>)
};

ABButton.defaultProps = {   
  className:"",
  btnStyle: {},
  icon: "bars",
  name: "save",
  color: "black",
  onClick: () => {
    console.log('back button');
  }     
};
