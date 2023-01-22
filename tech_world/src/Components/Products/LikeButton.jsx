import React from 'react'
import "./LikeButton.css"

const LikeButton = () => {
    return (
        <div>
            <label className="like">
                <input type="checkbox" />
                <div className="hearth" />
            </label>
        </div>
    )
}

export default LikeButton