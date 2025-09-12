import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"

export default function Star(props) { 

    let favoriteStatus = props.isFilled ? "Remove from favorites" : "Add to favorites"
    let starIcon = props.isFilled ? starFilled : starEmpty
    let altStatus = props.isFilled ? "filled star icon" : "empty star icon"
    console.log(favoriteStatus)
    console.log(altStatus)

    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={favoriteStatus}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={altStatus}
                className="favorite"               
            />
        </button>
    )
}
