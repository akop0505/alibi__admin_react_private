import React ,{Component} from 'react'
import CasePreviewNav from './CasePreviewNav'
import CasePreviewBody from './CasePreviewBody'
import { CasePreviewFooter } from '../../components/ABCasePreview/CasePreviewFooter'

class CasePreview extends Component{
    render(){
        return(
            <div>
                <CasePreviewNav/>
                <CasePreviewBody/>
            </div>
            )
    }
}
export default CasePreview