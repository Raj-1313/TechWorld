import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "./Data.css"
import { getdata } from "../../Redux/AppReducer/action";

const Data=()=>{
    const product = useSelector((store) => store.AppReducer.data)
    const dispatch=useDispatch()
    const location =useLocation()
    const [serachParams]=useSearchParams();

    useEffect(()=>{
        if(location ||product.length===0){
            const sortBy=serachParams.get("sort")
            const getdataParams={
                params:{
                    category:serachParams.getAll('category'),
                    _sort :sortBy && "price",
                    _order:sortBy
                }
            }
            dispatch(getdata(getdataParams))
        }
            },[product.length,dispatch,location.search])

            
    return(
        <div className="productbox">
             {product.length > 0 && product.map(el => {
                        return <Link to={`/products/${el.id}`}><div key={el.id} >
                            <img className="pro_img" src={el.image} />
                            <h3 >{el.title}</h3>
                            <p><span>$169(60% OFF)</span>-${el.price}</p>
                            <button style={{ marginTop:"5px",padding:"3px 14px 3px 14px", fontSize:"14px", color: "white",background:"green",width:"40%",borderRadius:"10px" }}>Buy Now</button>
                        </div></Link>
                    })}
        </div>
    )
}

export default Data