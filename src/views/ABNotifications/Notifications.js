import React ,{Component} from 'react'
import NotificationsNav from './NotificationsNav'
import NotificationsTamplate from './NatificationsTamplate'


class Notifications extends Component{
    render(){
        return(
            <div>
                <NotificationsNav/>
                <NotificationsTamplate/>
            </div>
            )
    }
}
export default Notifications