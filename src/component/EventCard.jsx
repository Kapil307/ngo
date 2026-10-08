export default function EventCard({event,showImpact=false}){
    return <article className="event-card">
        <div className="event-card-image">
            <img src={event.image} alt={event.title}/>
            </div><div className="event-card-content">
                <div className="event-card-meta">{event.date&&<span>
                    <i className="bi bi-calendar3"/> {event.date}
                    </span>}{event.location&&<span>
                        <i className="bi bi-geo-alt"/>
                         {event.location}</span>}
                         </div>
                         <h2>{event.title}</h2>
                         <p>{event.description}</p>
                         {showImpact&&<a href="/impact" className="green-btn">VIEW IMPACT</a>}
                         </div>
                         </article>}
