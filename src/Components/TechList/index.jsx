import { useContext } from "react";

import { UserContext } from "../../Contexts/UserContext";
import Tech from "./Tech";
import { Empty, TechContainer } from "./styles";

const TechList = () => {
  const { techs } = useContext(UserContext);
  //console.log(techs);
  if (!techs.length) {
    return (
      <Empty>
        <h3>Sem tecnologias cadastradas</h3>
      </Empty>
    );
  } else {
    return (
      <TechContainer>
        {techs.map((tech, index) => (
          <Tech key={index} tech={tech} />
        ))}
      </TechContainer>
    );
  }
};

export default TechList;
