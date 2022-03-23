import { ButtonHTMLAttributes } from "react";
import "../styles/autenticacao.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <button {...props} />;
}
