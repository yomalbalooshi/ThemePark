const Events = (props) => {
  return (
      <div className="event-grid">
      {props.events.map((event) => (
        <div className="event-card" key={event.id}>
          <img className="listing-img" src={event.img} alt={event.name} /> 
          <h3 className="name">{event.name}</h3>
          <p className="description" >{event.description}</p>
          </div>
          ))}      
    </div>
  )}
  
export default Events
