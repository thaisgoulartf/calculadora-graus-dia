import { useState } from "react";
import { GiCorn } from "react-icons/gi";
import "../styles/culturetabs.scss";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Cultura } from "../contexts/CulturaContext";
import { useCultura } from "../hooks/useCulture";
import { useHistory } from "react-router-dom";

interface CulturaProps {
  cultura: Cultura;
}

export function CultureTab(props: CulturaProps) {
  const [isActive, setIsActive] = useState(false);
  const { removeCultura, updateCultura } = useCultura();
  const history = useHistory();

  function handleDeleteCultura() {
    removeCultura(props.cultura.id);
    history.push("/dashboard");
  }

  function handleUpdateCultura() {
    history.push("/editCulturaModal/" + props.cultura.id);
  }

  return (
    <div
      className={`container ${isActive ? "active" : null}`}
      onClick={(e) => setIsActive((state) => !state)}
    >
      <div>
        {<GiCorn />}
        <span>{props.cultura.descricao}</span>
      </div>
      <div className="containerActions">
        <div className="edit" onClick={handleUpdateCultura}>
          <BiEditAlt />
        </div>
        <div className="trash" onClick={handleDeleteCultura}>
          <BsTrash />
        </div>
      </div>
    </div>
  );
}
