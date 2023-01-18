import "./all.css"
import Data from "./Data"
import Filter from "./Filter"

const AllData = () => {
    return (
        <div style={{ display: "flex", marginTop: "28px" }}>
     <Filter />
     <Data />
            </div>
        
    )
}

export default AllData