import { useEffect, useState } from "react";
import { GiCorn } from "react-icons/gi";
import "../styles/button.scss";
import "../styles/culturetabs.scss";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

import { useHistory } from "react-router-dom";
import { getSpecificCulture } from "../util/function_utils";
import { useCurrentCulture } from "../hooks/useCurrentCulture";
import { useCultureContext } from "../hooks/useCultureContext";
import { Culture } from "../contexts/CultureContext";

interface CultureProps {
  culture: Culture;
}

export function CultureTab(props: CultureProps) {
  const { cultures, removeCulture } = useCultureContext();
  const { currentCulture, updateCurrentCulture, checkCurrentCultureRemoved } =
    useCurrentCulture();
  const [isActive, setIsActive] = useState(
    props.culture.id === currentCulture?.id
  );
  const history = useHistory();

  useEffect(() => {
    if (!currentCulture) return;
    if (props.culture.id == currentCulture.id) {
      updateIsActive(true);
    } else {
      updateIsActive(false);
    }
  }, [currentCulture]);

  async function handleDeleteCulture() {
    await removeCulture(props.culture.id);
    const wasCurrentRemoved = checkCurrentCultureRemoved(props.culture.id);
    const alreadyHasCulture = cultures && cultures.length > 0;
    if (wasCurrentRemoved && alreadyHasCulture) {
      updateCurrentCulture(cultures[0]);
    }
    history.push("/dashboard");
  }

  function handleUpdateCulture() {
    history.push("/edit-cultura-modal/" + props.culture.id);
  }

  function setAsCurrentCulture() {
    if (cultures) {
      const thisCulture = getSpecificCulture(cultures, props.culture.id);
      if (thisCulture) {
        updateCurrentCulture(thisCulture);
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
      onClick={() => setAsCurrentCulture()}
    >
      <div>
        {<GiCorn />}
        <span className="labelCultura" data-test="label-description-cultura">
          {props.culture.description}
        </span>
      </div>
      <div className="containerActions">
        <div
          className="edit"
          data-test="button-edit"
          onClick={handleUpdateCulture}
        >
          <BiEditAlt />
        </div>
        <div
          className="trash"
          data-test="button-delete"
          onClick={handleDeleteCulture}
        >
          <BsTrash />
        </div>
      </div>
    </div>
  );
}
