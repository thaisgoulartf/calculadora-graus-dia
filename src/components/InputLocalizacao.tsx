import "../styles/dashboard.scss";
import "../styles/button.scss";

export function InputLocalizacao(props: any) {
  return (
    <div className="search-wrapper">
      <span>{props.icon}</span>
      <input type="local" placeholder="Localização"></input>
    </div>
  );
}
