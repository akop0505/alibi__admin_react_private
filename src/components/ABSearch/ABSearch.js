import React from 'react';
import './ABSearch.css';
import { Input } from 'reactstrap';

export const ABSearch = (props) => {
    return (
    <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <Input type="text" className="form-control-search" placeholder="Search"/>
    </div>)
}