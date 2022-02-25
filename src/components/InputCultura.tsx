// import { ButtonHTMLAttributes } from "react";
import "../styles/dashboard.scss";
import "../styles/button.scss";

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
// vai precisar dessas props
// (props: ButtonProps)

export function InputCultura(props: any) {
  return (
    // <button className="button" {...props}/>

    <div className="search-wrapper">
      <span>{props.icon}</span>
      <input type="search" placeholder="Cultura"></input>
    </div>
  );
}
