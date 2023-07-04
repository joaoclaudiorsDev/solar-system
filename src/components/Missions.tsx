import Title from "./Title";
import MissionCard from "./MissionCard";
import missions from "../data/missions";

function Missions() {
  return (
    <div data-testid = "missions">
        <Title
           headline="Missões"
        />
     <div data-testid = "missions-cards"> 
      <ul>
          {
              missions.map(mission => (
                <li key={mission.name}>
                  <MissionCard
                    name = {mission.name}
                    country = {mission.country}
                    year = {mission.year}
                    destination = {mission.destination}
                  />
                </li>
              ))
          }
      </ul>
      </div>  
    </div>  
  ) 
}

export default Missions;