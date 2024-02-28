const BuyTicket = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <section>
      <h1>Buy Ticket</h1>
      <form onSubmit={handleSubmit}>
        <select>
          <option selected disabled>
            Select a Zone
          </option>
          <option value="zone1">Zone 1</option>
          <option value="zone2">Zone 2</option>
          <option value="zone3">Zone 3</option>
          <option value="zone4">Zone 4</option>
        </select>
        <input type="number" placeholder="Number of Tickets" />
        <button type="submit">Buy</button>
      </form>
    </section>
  )
}

export default BuyTicket
