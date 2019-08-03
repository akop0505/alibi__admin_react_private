import React, {Component} from 'react';

class Tags extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="card">
                    <div className="card-header">
                        Tags
                    </div>
                    <div className="card-body">
                        <p>Examples of tags</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>HashTag</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <p><a href="javascript:void(0)">#tag1</a></p>
                                </td>
                                <td><span className="h6">tag1 description</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <p><a href="javascript:void(0)">#tag2</a></p>
                                </td>
                                <td><span className="h6">tag2 description</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <p><a href="javascript:void(0)">#tag3</a></p>
                                </td>
                                <td><span className="h6">tag3 description</span></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;
