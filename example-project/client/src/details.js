import './result.css';
import Marquee from "react-fast-marquee";
import { useHistory } from "react-router-dom";

function Details({styleDetails}){
    const noblur = false
    console.log(styleDetails)
    const history = useHistory()
    
    function back () {
        history.push('/taste')
    }
    
return (
    <div>
        <Marquee gradient = {noblur} direction = "right"> 
                <button onClick = {back} className= "saveButton" >back back back back back back back back back back back back</button>
        </Marquee>
     <div className="styleName"> {styleDetails.style}</div>
     <img  className="styleImg" src = {styleDetails.img} alt = {styleDetails.style} />
     <div className="styleDescript"> {styleDetails.descript}</div>
 
   </div>
)
}

export default Details;