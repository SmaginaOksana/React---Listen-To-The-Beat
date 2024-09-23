import "./SpeedUpProcess.scss";
import logotip_1 from "../../assets/logotip_1.png";
import logotip_2 from "../../assets/logotip_2.png";
import logotip_3 from "../../assets/logotip_3.png";
import logotip_4 from "../../assets/logotip_4.png";
import logotip_5 from "../../assets/logotip_5.png";
import logotip_6 from "../../assets/logotip_6.png";

export default function SpeedUpProcess() {
  const sections = [
    {
      icon: logotip_1,
      color: "rgb(255, 216, 78)",
      title: "Auto Layout",
      paragraf:
        " Sed do eiusmod tempor incididunt ut consectetur adipisicingelit,do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      icon: logotip_2,
      color: "rgb(251, 99, 99)",
      title: "Variants",
      paragraf:
        "Rorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      icon: logotip_6,
      color: "rgb(166, 109, 245)",
      title: "Components",
      paragraf:
        "Dor sum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore ma iusmod",
    },
    {
      icon: logotip_5,
      color: "rgb(109, 214, 176)",
      title: "Atomic Design",
      paragraf:
        "Adipisicing elit, orem ipsum dolor sit amet, consectetur seddo eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      icon: logotip_4,
      color: "rgb(112, 140, 240)",
      title: "Animated",
      paragraf:
        "Morem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      icon: logotip_3,
      color: "rgb(160, 46, 142)",
      title: "Responsive",
      paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];
  return sections.map((section, index) => {
    const { icon, color, title, paragraf } = section;
    return (
      <div className="section" key={index}>
        <div>
          <img src={icon} alt={title} />
        </div>
        <div>
          <h3 style={{ color: color }}>{title}</h3>
          <p>{paragraf}</p>
        </div>
      </div>
    );
  });
}
