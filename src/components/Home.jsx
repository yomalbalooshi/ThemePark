import { Link } from 'react-router-dom'
import Zone from './Zone'
const Home = ({ themeParkData }) => {
  return (
    <div>
      <div className="zonemap-main-div">
        <div className="zonemap-image-div">
          <div className="zonemap-imagecontainer-div">
            <img src="/images/zonesMap.svg" alt="Map of all parks" />
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
            <div>
              {themeParkData.map((themePark) => (
                <li className="homepage-zone-li" key={themePark.mapId}>
                  <Link
                    to={{
                      pathname: `zone/${themePark.mapId}`,
                      state: themePark
                    }}
                  >
                    {themePark.mapName}
                  </Link>
                </li>
              ))}
              {/* <Zone key={themePark.mapName} {...themePark} /></div> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
