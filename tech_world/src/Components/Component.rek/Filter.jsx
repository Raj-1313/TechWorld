
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom"
import "./filter.css"


const Filter = () => {

    const [serachParams, setsearchParams] = useSearchParams();
    const initiacategogry = serachParams.getAll("category")
    const initiasort = serachParams.getAll("sort")

    const [category, setCategory] = useState(initiacategogry || []);
    const [sort, setSort] = useState(initiasort[0] || "")

    const handleSort = (e) => {
        setSort(e.target.value)
    }



    const handleFilterCheckbox = (e) => {
        const newCategory = [...category]
        if (newCategory.includes(e.target.value)) {
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
        }
        else {
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }

    useEffect(() => {
        let params = {};
        params.category = category;
        sort && (params.sort = sort)
        setsearchParams(params)
    }, [category, setsearchParams, sort])

    return (
        <div style={{ width: "20%"}}>
            <div className="sortbox">
                <p >SORT</p>
                <div onClick={handleSort}>
                <input type="checkbox" value="asc" name="sortBy"  checked={sort==="asc"} style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>Low to high</label>
                    <br />
                    <input type="checkbox" value="desc" name="sortBy"  checked={sort==="desc"} style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>High to Low</label>
                </div>
            </div>
            <div className="filterbox"><p>FILTERS</p>
                <div>
                    <input type="checkbox" value="mens" onChange={handleFilterCheckbox} checked={category.includes("mens")} style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>mens</label>
                </div>
                <div>
                    <input type="checkbox" value="womens" onChange={handleFilterCheckbox} checked={category.includes("womens")} style={{ marginRight: "7px", marginTop: "5px" }}/>
                    <label>womens</label>
                </div>
                <div>
                    <input type="checkbox" value="beauty" onChange={handleFilterCheckbox} checked={category.includes("beauty")} style={{ marginRight: "7px", marginTop: "5px" }}/>
                    <label>beauty</label>
                </div>
                {/* <div>
                    <input type="checkbox" value="Thriller" onChange={handleFilterCheckbox} checked={category.includes("Thriller")}style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>shop</label>
                </div> */}
            </div>
        </div>

    )
}

export default Filter