import React  from 'react';
import { Button} from 'reactstrap';
import './AllButtons.css';


class BackButton extends React.Component{
    render(){
        return(
            <div>
                <button>
                    <i className="fa fa-reply"></i>Back
                </button>
                <button>
                    Forward<i className="fa fa-share"></i>
                </button>
                <button>
                    History<i className="fa fa-list"></i>
                </button>
                <button>
                    Cancel<i className="fa fa-times"></i>
                </button>
                <button>
                    Archive<i className="fa fa-clock-o"></i>
                </button>
                <button>
                    Send<i className="fa fa-check"></i>
                </button>        
            </div>
        )
    }
}
export default BackButton