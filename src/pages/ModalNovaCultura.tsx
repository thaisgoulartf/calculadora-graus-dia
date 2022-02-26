import "../styles/modal.scss";

import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { uid } from "uid";
import { useCultura } from "../hooks/useCulture";
import { Cultura } from "../contexts/CulturaContext";

interface ModalCulturaProps {
  cultura: Cultura | undefined;
}

export function ModalNovaCultura(props: ModalCulturaProps) {
  const isEditing = props.cultura !== undefined;

  const [planta, setPlanta] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const history = useHistory();

  const { createCultura, updateCultura } = useCultura();

  async function handleCreateCultura(event: FormEvent) {
    event.preventDefault();
    createCultura({
      id: uid(),
      dataInicio: dataInicio,
      descricao: descricao,
      localizacao: localizacao,
      planta: planta,
    });
    history.push("/dashboard");
  }

  async function handleUpdateCultura(event: FormEvent) {
    event.preventDefault();
    updateCultura({
      id: props.cultura?.id!,
      dataInicio: dataInicio,
      descricao: descricao,
      localizacao: localizacao,
      planta: planta,
    });
    history.push("/dashboard");
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <strong>Calculadora Graus dia</strong>
        <p>Adicionar uma cultura</p>
        <form onSubmit={isEditing ? handleUpdateCultura : handleCreateCultura}>
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
