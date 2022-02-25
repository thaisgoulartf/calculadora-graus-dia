// import { ButtonHTMLAttributes } from "react";
import "../styles/dashboard.scss";
import "../styles/button.scss";

export function InputCultura(props: any) {
  return (
    <div className="search-wrapper">
      <span>{props.icon}</span>
      <input type="search" placeholder="Cultura"></input>
    </div>
  );
}
