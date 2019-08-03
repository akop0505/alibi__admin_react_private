import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        Events
                    </div>
                    <div className="card-body">
                        <p>Coming Soon</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>column 1</th>
                                <th>column 2</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    test
                                </td>
                                <td>row</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
