import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "./Data.css"
import { getdata } from "../../Redux/AppReducer/action";

const Data=()=>{
    const product = useSelector((store) => store.AppReducer.data)
    const dispatch=useDispatch()
    

    useEffect(()=>{
       dispatch(getdata())
        },[])

            
    return(
        <div className="productbox">
             {product.length > 0 && product.map(el => {
                        return <div key={el.id} >
                            <img className="pro_img" src={el.image} />
                            <h3 >{el.title}</h3>
                            <p><span>$169(60% OFF)</span>-${el.price}</p>
                            <button style={{ marginTop:"5px",padding:"3px 14px 3px 14px", fontSize:"14px", color: "white",background:"green",width:"40%",borderRadius:"10px" }}>Buy Now</button>
                        </div>
                    })}
        </div>
    )
}

export default Data