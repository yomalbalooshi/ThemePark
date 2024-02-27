import { NavLink } from 'react-router-dom'
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
      <div className="zonemap-main-div">
        <div className="zonemap-image-div">
          <div className="zonemap-imagecontainer-div">
            <img src="/images/zonesMap.svg" alt="try image" />
          </div>
        </div>
        <div className="zonemap-information-div">
          <h2 className="zonemap-information-title">Explore Our Zones</h2>
          <p className="zonemap-information-paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in
          </p>
          <ul className="homepage-zone-ul">
            <li className="homepage-zone-li">
              <NavLink to="zone/waterZone" className="zone1">
                Water Zone
              </NavLink>
            </li>
            <li className="homepage-zone-li">
              <NavLink to="zone/kidsZone" className="zone2">
                Kids Zone
              </NavLink>
            </li>
            <li className="homepage-zone-li">
              <NavLink to="zone/castleZone" className="zone3">
                Castle Zone
              </NavLink>
            </li>
            <li className="homepage-zone-li">
              <NavLink to="zone/beachZone" className="zone4">
                Beach Zone
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {themeParkData.map((themePark) => (
        <Zone key={themePark.mapName} {...themePark} />
      ))}
    </div>
  )
}
export default Home
