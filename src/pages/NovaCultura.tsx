import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import alface from "../assets/images/alface.png";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import { uid } from "uid";

import "../styles/autenticacao.scss";
import { calculate, calculateGrausDias } from "../util/function_utils";
import { getWeatherToday } from "../services/consultaWeatherToday";
import { useCultura } from "../hooks/useCulture";

export function NovaCultura() {
  const [planta, setPlanta] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const history = useHistory();

  const { createCultura } = useCultura();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position.coords.latitude, position.coords.longitude);
  //   });
  // }, []);

  async function handleCreateCultura(event: FormEvent) {
    event.preventDefault();

    createCultura({ id: uid(), dataInicio: dataInicio, descricao: descricao, localizacao: localizacao, planta: planta, });
    // removeCultura('3');
    // updateCultura({ id: '2', dataInicio: dataInicio, descricao: descricao, localizacao: localizacao, planta: planta, });

    history.push("/dashboard");
  }

  // async function handleSingleOut() {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // }

  function onCalculateGrausDias(event: FormEvent) {
    event.preventDefault();

    console.log("asd");
    const avgTemp = [25, 24, 26, 21, 20];
    const grausDias = calculateGrausDias(avgTemp, 10, 900);
    console.log(grausDias);
  }

  async function testeAxios(event: FormEvent) {
    event.preventDefault();
    console.log(await getWeatherToday());
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
          <form onSubmit={handleCreateCultura}>
            <label htmlFor="culturas">Cultura:</label>
            <select
              id="culturas"
              name="culturas"
              placeholder="Cultura"
              // ref={register}
              onChange={(event) => setPlanta(event.target.value)}
              value={planta}
            >
              <option value="milho">Milho</option>
              <option value="arroz">Arroz</option>
              <option value="feijao">Feijão</option>
            </select>
            <label htmlFor="descricao">Descrição:</label>
            <input
              id="descricao"
              type="text"
              placeholder="Descrição"
              name="descricao"
              // ref={register}
              onChange={(event) => setDescricao(event.target.value)}
              value={descricao}
            />
            <label htmlFor="dataInicio">Data ínicio da cultura:</label>
            <input
              id="dataInicio"
              type="date"
              placeholder="Data início"
              name="dataInicio"
              // ref={register}
              onChange={(event) => setDataInicio(event.target.value)}
              value={dataInicio}
            />
            <label htmlFor="localização">Localização da cultura:</label>
            <input
              id="localização"
              type="text"
              placeholder="Localização"
              name="localizacao"
              // ref={register}
              onChange={(event) => setLocalizacao(event.target.value)}
              value={localizacao}
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