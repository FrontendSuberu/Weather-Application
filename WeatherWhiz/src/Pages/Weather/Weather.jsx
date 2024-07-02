import Display from "../components/DisplayField/Display"
import Dataheader from "../components/Dataheader/Dataheader"
import Mobilenav from "../components/MobileNav/Mobilenav"
import "../Weather/weather.css"

export default function Weather() {

  return (
    <div className="weather">

      {/* header */}
      <Dataheader />


      <div className="dataDisplay">
        {/* display */}
        <Display />
      </div>


      <div className="mobile_nav">
        <Mobilenav />
      </div>

    </div>
  )
}
