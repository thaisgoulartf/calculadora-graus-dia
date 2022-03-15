import "../styles/modal.scss";

import React, { FormEvent, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { useCultureContext } from "../hooks/useCultureContext";
import { getSpecificCulture } from "../util/function_utils";
import { plants } from "../util/plants";

export function EditCultureModal() {
  const { cultures, createCulture, updateCulture } = useCultureContext();
  const { id } = useParams<{ id: string }>();
  const culture = getSpecificCulture(cultures!, id);

  const [plant, setPlant] = useState(culture?.planta.id);
  const [description, setDescription] = useState(culture?.description);
  const [startDate, setStartDate] = useState(culture?.startDate);
  const [localization, setLocalization] = useState(culture?.localization);
  const history = useHistory();

  async function handleUpdateCultura(event: FormEvent) {
    event.preventDefault();
    const plantacao = plants.find((element) => element.id === plant);
    if (plantacao) {
      updateCulture({
        id: culture?.id!,
        startDate: startDate!,
        description: description!,
        localization: localization!,
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
        <form onSubmit={handleUpdateCultura}>
          <label htmlFor="culturas">Cultura:</label>
          <select
            id="culturas"
            name="culturas"
            data-test="selecionar-culturas-edit"
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
            data-test="description-edit"
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <label>Data ínicio da cultura:</label>
          <input
            type="date"
            data-test="data-edit"
            placeholder="Data início"
            onChange={(event) => setStartDate(event.target.value)}
            value={startDate}
          />
          <label>Localização da cultura:</label>
          <input
            type="text"
            placeholder="Localização"
            data-test="localization-edit"
            onChange={(event) => setLocalization(event.target.value)}
            value={localization}
          />
          <Button type="submit" data-test="button-adicionar-cultura-edit">
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
