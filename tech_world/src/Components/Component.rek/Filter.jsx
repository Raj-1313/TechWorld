
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom"
import "./filter.css"


const Filter = () => {





    return (
        <div className="sorting">
            <div className="sortbox">
                <p >SORT</p>
                <input type="checkbox" value="asc" name="sortBy" style={{ marginRight: "7px", marginTop: "5px" }} />
                <label>ASC</label>
                <br />
                <input type="checkbox" value="desc" name="sortBy" style={{ marginRight: "7px", marginTop: "5px" }} />
                <label>DESC</label>
            </div>
            <div className="filterbox">
                <p>FILTERS</p>
                <div>
                    <input type="checkbox" value="mens" style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>mens</label>
                </div>
                <div>
                    <input type="checkbox" value="womens" style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>womens</label>
                </div>
                <div>
                    <input type="checkbox" value="beauty" style={{ marginRight: "7px", marginTop: "5px" }} />
                    <label>beauty</label>
                </div>

            </div>
        </div>

    )
}

export default Filter