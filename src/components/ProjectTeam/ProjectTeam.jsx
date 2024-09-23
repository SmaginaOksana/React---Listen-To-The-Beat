import instagramBlue from "../../assets/instagramBlue.png";
import telegram from "../../assets/telegram.png";
import linkedin from "../../assets/linkedin.png";
import "./ProjectTeam.scss";
export default function ProjectTeam() {
  const persons = [
    {
      nameTeam: "team1",
      name: "Pieter Omvlee",
      profession: "Designer",
    },
    {
      nameTeam: "team2",
      name: "Loyd Maywe",
      profession: "Php developer",
    },
    {
      nameTeam: "team3",
      name: "Latte Macchiato",
      profession: "CEO Company",
    },
    {
      nameTeam: "team4",
      name: "Cheese Cake",
      profession: "Art Director",
    },
  ];

  const icons = [instagramBlue, telegram, linkedin];

  return persons.map((person, index) => {
    const { nameTeam, name, profession } = person;
    return (
      <div className={nameTeam} key={index}>
        <div className="personData">
          <h5>{name}</h5>
          <span>{profession}</span>
          <div>
            {icons.map((icon, index) => {
              return <img src={icon} alt={icon} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  });
}
