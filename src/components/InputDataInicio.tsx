import "../styles/dashboard.scss";
import "../styles/button.scss";

export function InputDataInicio(props: any) {
  return (
    <div className="search-wrapper">
      <span>{props.icon}</span>
      <input type="date" placeholder="Data ínicio"></input>
    </div>
  );
}
