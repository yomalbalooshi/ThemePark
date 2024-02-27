const Events = (props) => {
  return (
      <div>
      <h1>events</h1>
      {props.events.map((event) => (
        <div key={event.id}>
          {/* <img className="listing-img" src={event.img} alt={event.name} /> */}
          <h3>{event.name}</h3>
          </div>
          ))}      
    </div>
  )}
  
export default Events
