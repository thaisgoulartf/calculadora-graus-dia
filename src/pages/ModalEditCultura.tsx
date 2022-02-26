import "../styles/modal.scss";

import React, { FormEvent, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { useCultura } from "../hooks/useCulture";
import { getCurrentCultura } from "../util/function_utils";

export function ModalEditCultura() {
  const { culturas, createCultura, updateCultura } = useCultura();
  const { id } = useParams<{ id: string }>();
  const cultura = getCurrentCultura(culturas!, id);

  const [planta, setPlanta] = useState(cultura?.planta);
  const [descricao, setDescricao] = useState(cultura?.descricao);
  const [dataInicio, setDataInicio] = useState(cultura?.dataInicio);
  const [localizacao, setLocalizacao] = useState(cultura?.localizacao);
  const history = useHistory();

  async function handleUpdateCultura(event: FormEvent) {
    event.preventDefault();
    updateCultura({
      id: cultura?.id!,
      dataInicio: dataInicio!,
      descricao: descricao!,
      localizacao: localizacao!,
      planta: planta!,
    });
    history.push("/dashboard");
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
            placeholder="Cultura"
            onChange={(event) => setPlanta(event.target.value)}
            value={planta}
          >
            <option disabled selected value="">
              Selecione uma opção
            </option>
            <option value="milho">Milho</option>
            <option value="arroz">Arroz</option>
            <option value="feijao">Feijão</option>
          </select>
          <label>Descrição:</label>
          <input
            type="text"
            placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
            value={descricao}
          />
          <label>Data ínicio da cultura:</label>
          <input
            type="date"
            placeholder="Data início"
            onChange={(event) => setDataInicio(event.target.value)}
            value={dataInicio}
          />
          <label>Localização da cultura:</label>
          <input
            type="text"
            placeholder="Localização"
            onChange={(event) => setLocalizacao(event.target.value)}
            value={localizacao}
          />
          <Button type="submit">Adicionar</Button>
          <p>
            <Link to="/dashboard"> Voltar </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
