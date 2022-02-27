import { useEffect, useState } from "react";
import { GiCorn } from "react-icons/gi";
import "../styles/button.scss";
import "../styles/culturetabs.scss";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Cultura } from "../contexts/CulturaContext";

import { useHistory } from "react-router-dom";
import { getSpecificCultura } from "../util/function_utils";
import { useCurrentCultura } from "../hooks/useCurrentCultura";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCulturaContext } from "../hooks/useCulturaContext";

interface CulturaProps {
  cultura: Cultura;
}

export function CultureTab(props: CulturaProps) {
  const { user } = useAuthContext();
  const { culturas, removeCultura, updateCultura } = useCulturaContext();
  const { currentCultura, updateCurrentCultura, checkCurrentCulturaRemoved } =
    useCurrentCultura();
  const [isActive, setIsActive] = useState(
    props.cultura.id === currentCultura?.id
  );
  const history = useHistory();

  useEffect(() => {
    if (props.cultura.id == currentCultura?.id) {
      updateIsActive(true);
    } else {
      updateIsActive(false);
    }
  }, [currentCultura, isActive]);

  async function handleDeleteCultura() {
    await removeCultura(props.cultura.id);
    const wasCurrentRemoved = checkCurrentCulturaRemoved(props.cultura.id);
    const alreadyHasCultura = culturas && culturas.length > 0;
    if (wasCurrentRemoved && alreadyHasCultura) {
      updateCurrentCultura(culturas[0]);
    }
    history.push("/dashboard");
  }

  function handleUpdateCultura() {
    history.push("/edit-cultura-modal/" + props.cultura.id);
  }

  function setAsCurrentCultura() {
    if (culturas) {
      const thisCultura = getSpecificCultura(culturas, props.cultura.id);
      if (thisCultura) {
        updateCurrentCultura(thisCultura);
        updateIsActive(true);
      }
    }
  }

  function updateIsActive(value: boolean) {
    setIsActive(value);
  }

  return (
    <div
      className={`container ${isActive ? "active" : null}`}
      onClick={() => setAsCurrentCultura()}
    >
      <div>
        {<GiCorn />}
        <span className="labelCultura">{props.cultura.descricao}</span>
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
