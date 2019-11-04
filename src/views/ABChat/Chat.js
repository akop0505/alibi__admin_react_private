import React ,{Component} from 'react'
import ChatNav from './ChatNav'
import ChatBody from './ChatBody'


class Chat extends Component{
    render(){
        return(
            <div>
                <ChatNav/>
                <ChatBody/>
            </div>
            )
    }
}
export default Chat