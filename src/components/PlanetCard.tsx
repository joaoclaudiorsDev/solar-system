type PlanetProps = {
    planetName: string;
    planetImage: string;
  }

function PlanetCard({ planetName, planetImage }: PlanetProps) {
    return (
      <div data-testid="planet-card">
        <img src= {planetImage} alt={`Planeta ${planetName}`}> </img>
        <p data-testid="planet-name"> {planetName}</p>
      </div>
    );
  }
  
  export default PlanetCard;