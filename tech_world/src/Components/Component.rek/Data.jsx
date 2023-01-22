import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "./Data.css"
import {getdata} from"../../Redux/AppReducer/action"


const Data=()=>{
    const product = useSelector((store) => store.AppReducer.data)
    const dispatch=useDispatch()
    

    useEffect(()=>{
       dispatch(getdata())
        },[])

            
    return(
        <div className="productbox">
             {product.length > 0 && product.map(el => {
                        return <Link to={`/products/${el.id}`}><div key={el.id} >
                            <img className="pro_img" src={el.img_url} />
                            <h3 >{el.brand}</h3>
                            <p>₹{el.approx_price_EUR}</p>
                            <hr></hr>
                            <p className="fest">Fest offer ₹28945</p>
                            <p>Incl 2500* off with Bank cash</p>
                            <button className="btn">Buy Now</button>
                        </div></Link>
                    })}
        </div>
    )
}

export default Data