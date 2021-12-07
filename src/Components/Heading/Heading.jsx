import styling from "./Heading.module.css";

export default function Heading({ title }) {
  return (
    <div className={styling.Heading}>
      <h1>{title}</h1>
    </div>
  );
}
