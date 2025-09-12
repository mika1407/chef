import React from "react"
import avatar from "../images/user.png"
import Star from "./Star"

export default function Test() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContact => ({
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }))
    }

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
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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