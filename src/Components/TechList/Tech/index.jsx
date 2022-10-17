import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";

import trash from "../../../Assets/Img/Vector.png";
import { TechLi } from "./styles";

const Tech = ({ tech }) => {
  const { removeTech } = useContext(TechContext);
  return (
    <TechLi>
      <h2>{tech.title}</h2>
      <div>
        <span>{tech.status}</span>
        <img onClick={() => removeTech(tech)} src={trash} alt="Apagar Tech" />
      </div>
    </TechLi>
  );
};

export default Tech;
