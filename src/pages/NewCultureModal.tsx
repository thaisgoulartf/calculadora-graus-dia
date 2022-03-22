import "../styles/modal.scss";

import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { uid } from "uid";
import { Culture } from "../contexts/CultureContext";
import { useCultureContext } from "../hooks/useCultureContext";
import { plants } from "../util/plants";

interface CultureModalProps {
  culture: Culture | undefined;
}

export function NewCultureModal(props: CultureModalProps) {
  const [plant, setPlant] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [localization, setLocalization] = useState("");
  const history = useHistory();

  const { createCulture } = useCultureContext();

  async function handleCreateCulture(event: FormEvent) {
    event.preventDefault();
    const plantacao = plants.find((element) => element.id === plant);
    if (plantacao) {
      createCulture({
        id: uid(),
        startDate: startDate,
        description: description,
        localization: localization,
        planta: plantacao,
      });
      history.push("/dashboard");
    }
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <strong>Calculadora Graus dia</strong>
        <p>Adicionar uma cultura</p>
        <form onSubmit={handleCreateCulture}>
          <label htmlFor="culturas">Cultura:</label>
          <select
            id="culturas"
            name="culturas"
            data-test="selecionar-culturas"
            placeholder="Cultura"
            onChange={(event) => setPlant(event.target.value)}
            value={plant}
          >
            <option disabled selected value="">
              Selecione uma opção
            </option>
            {plants.map((plant) => (
              <option value={plant.id}>{plant.id}</option>
            ))}
          </select>
          <label>Descrição:</label>
          <input
            type="text"
            data-test="description"
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <label>Data ínicio da cultura:</label>
          <input
            type="date"
            data-test="data"
            placeholder="Data início"
            onChange={(event) => setStartDate(event.target.value)}
            value={startDate}
          />
          <label>Localização da cultura:</label>
          <input
            type="text"
            data-test="localization"
            placeholder="Localização"
            onChange={(event) => setLocalization(event.target.value)}
            value={localization}
          />
          <Button type="submit" data-test="button-adicionar-cultura">
            Adicionar
          </Button>
          <p>
            <Link to="/dashboard"> Voltar </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
