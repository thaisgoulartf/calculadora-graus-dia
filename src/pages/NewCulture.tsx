import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import { Button } from "../components/Button";

import { uid } from "uid";

import "../styles/autenticacao.scss";
import { auth } from "../services/firebase";
import { useCultureContext } from "../hooks/useCultureContext";
import { plants } from "../util/plants";

export function NewCulture() {
  const [planta, setPlanta] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [localization, setLocalization] = useState("");
  const history = useHistory();

  const { createCulture } = useCultureContext();

  async function handleCreateCulture(event: FormEvent) {
    event.preventDefault();

    const plant = plants.find((element) => element.id === planta);
    if (plant) {
      createCulture({
        id: uid(),
        startDate: startDate,
        description: description,
        localization: localization,
        planta: plant,
      });

      history.push("/dashboard");
    }
  }

  async function handleSingleOut() {
    auth
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={alface} alt="agricultor" />
      </aside>
      <main>
        <div className="content">
          <strong>Calculadora Graus dia</strong>
          <p>Adicionar uma cultura</p>
          <form onSubmit={handleCreateCulture}>
            <label htmlFor="culturas">Cultura:</label>
            <select
              id="cultures"
              name="cultures"
              placeholder="Cultura"
              onChange={(event) => setPlanta(event.target.value)}
              value={planta}
            >
              <option disabled selected value="">
                Selecione uma opção
              </option>
              {plants.map((plant) => (
                <option value={plant.id}>{plant.id}</option>
              ))}
            </select>
            <label htmlFor="description">Descrição:</label>
            <input
              id="description"
              type="text"
              placeholder="Descrição"
              name="description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
            <label htmlFor="startDate">Data ínicio da cultura:</label>
            <input
              id="startDate"
              type="date"
              placeholder="Data início"
              name="startDate"
              onChange={(event) => setStartDate(event.target.value)}
              value={startDate}
            />
            <label htmlFor="localização">Localização da cultura:</label>
            <input
              id="localização"
              type="text"
              placeholder="Localização"
              name="localization"
              onChange={(event) => setLocalization(event.target.value)}
              value={localization}
            />
            <Button type="submit">Adicionar</Button>
            <p>
              <Link to="/"> Voltar </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
