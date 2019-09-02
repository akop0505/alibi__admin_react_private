import React from 'react';
import './EventsStyle.css';

class EvenntsContacts extends React.Component{
    render(){
        return(
            <div className='contactsTable'>
                <div className='allContacts'>
                <table className='contactTable'>
                    <tbody>
                    <tr >
                        <td className='contactKey'>Contact 1:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Email:</td>
                        <td className='contactValue'>Emailsupport@gmail.com</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Contact 3:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Contact 4:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    <tr className='oneContact'>
                        <td className='contactKey'>Contact 5:</td>
                        <td className='contactValue'>+375 29 456 78 90</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default EvenntsContacts