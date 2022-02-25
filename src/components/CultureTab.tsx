import { useState } from "react";
import { GiCorn } from "react-icons/gi";
import "../styles/button.scss";
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
    console.log(props.cultura)
    removeCultura(props.cultura.id)
    history.push("/dashboard")
  }

  function handleUpdateCultura() {
    // history.push({pathname: "/novaCulturaModal", state: { cultura: props.cultura }});
  }

  return (
    <div
      className={`container ${isActive ? "active" : null}`}
      // onClick={() => setIsActive((prevState) => !prevState)}
    >
      <div>
        {<GiCorn />}
        <span className="labelCultura">{props.cultura.descricao}</span>
      </div>
      <div>
        <button className="edit" onClick={handleUpdateCultura}>
          <BiEditAlt />
        </button>
        <button className="trash" onClick={handleDeleteCultura}>
          <BsTrash />
        </button>
      </div>
    </div>
  );
}
