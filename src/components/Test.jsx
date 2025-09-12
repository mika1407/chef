import React from "react"
import avatar from "../images/user.png"
import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"

export default function Test() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }))
    }

    let favoriteStatus = contact.isFavorite ? "Remove from favorites" : "Add to favorites"
    let altStatus = contact.isFavorite ? "filled star icon" : "empty star icon"
    console.log(favoriteStatus)
    console.log(altStatus)

    return (
        <main className="main-test">
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <div className="info-container">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        aria-label={favoriteStatus}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={altStatus}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                    </div>
                </div>
            </article>
        </main>
    )
}