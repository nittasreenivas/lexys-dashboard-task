import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import {Col,Row} from "react-bootstrap"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const Signin = () => {

    return(
        <div >
           
            <Row className="landing" >
               
        <Col ><LeftSide/></Col>
        
        <Col ><RightSide/></Col>
      </Row>
      
        </div>
    )
}

export default Signin