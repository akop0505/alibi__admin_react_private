import React ,{Component} from 'react';
import{Button, Col} from 'reactstrap';
import PlacePicker from "../../components/PlacePicker";
import Grid from '@material-ui/core/Grid';

class CaseCreator extends Component{
    render(){
        return(
            <div>
                <div>
                    Case creator:
                </div>
                <div>
                    <i className="fa fa-user fa-lg mt-4"></i><span>John Owlson (id:abcfe)</span>
                </div>
                <div>
                    Case time:
                </div>
                <div>
                    <i className="fa fa-calendar-o fa-lg mt-4"></i><span>12:26 (UTC+3) — 03.02.2019</span>
                </div>
                <div>
                    Case location:
                </div>
                <div>
                    <i className="fa fa-map-marker fa-lg mt-4"></i><span>DE, Berlin, Heiligental 43</span>
                </div>
                <Col col="6" sm="4" md="2" xs="2">
                    <Button  block color="secondary" aria-pressed="true">
                        <span style={{margin:"5px"}}>Open GPS data</span>
                    </Button>
                </Col>
                <Grid item xs={8}>
                        <PlacePicker/>
                </Grid>
            </div>
        )
    }
}
export default CaseCreator