import React ,{Component, Fragment} from 'react'
import CasePreviewNav from './CasePreviewNav'
import CasePreviewBody from './CasePreviewBody'
import { CasePreviewFooter } from '../../components/ABCasePreview/CasePreviewFooter'

class CasePreview extends Component{
    render(){
        return(
            <Fragment>
                <CasePreviewNav/>
                <CasePreviewBody/>
            </Fragment>
            )
    }
}
export default CasePreview