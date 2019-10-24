import React ,{Component} from 'react'
import {Nav as bNav, NavItem, NavLink } from 'reactstrap';
import {ABButton} from "../../components/ABButtons/ABButton";
import styled from 'styled-components';

const Nav = styled(bNav)`

 padding: 9px 35px 9px 35px !important;
 background-color:white;
`;



class CasePreviewNav extends Component{
    render(){
        return(
                <Nav>
                    <NavItem>
                        <ABButton color={'black'} name={'Copy link'}  icon={'share'}/>
                    </NavItem>
                    <NavItem>
                        <ABButton color={'black'} name={'Edit'}  icon={'edit'}/>
                    </NavItem>
                    <NavItem>
                        <ABButton color={'black'} name={'Add to group'}  icon={''}/>
                    </NavItem>
                    <NavItem>
                        <ABButton color={'black'} name={'Recipient list'}  icon={''}/>
                    </NavItem>
                    <NavItem className="ml-auto">
                        <ABButton color={'red'} name={'Delete'}  icon={'close'}/>
                    </NavItem>
                </Nav>
        )
    }
}
export default CasePreviewNav