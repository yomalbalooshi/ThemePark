import Zone from './Zone'
const Home = () => {
  const themeParkData = [
    {
      parkName: 'FantasyLand',
      attractions: [
        { id: 'attraction1', x: 100, y: 150, color: 'blue' },
        { id: 'attraction2', x: 300, y: 250, color: 'green' }
      ]
    },
    {
      parkName: 'AdventureLand',
      attractions: [
        { id: 'attraction1', x: 200, y: 180, color: 'red' },
        { id: 'attraction2', x: 400, y: 280, color: 'orange' }
      ]
    }
  ]
  return (
    <div>
      <h1>homepage</h1>
      {/* SVG FILE IMPORTING LINE */}
      <img src="/images/1.svg" alt="try image" width="1200px" height="400px" />
      {themeParkData.map((themePark) => (
        <Zone key={themePark.parkName} {...themePark} />
      ))}
    </div>
  )
}
export default Home
