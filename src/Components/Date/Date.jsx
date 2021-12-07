import styling from "./Date.module.css";

export default function Date({ date, title }) {
  var url = "https://pngimg.com/uploads/amazon/amazon_PNG5.png";
  if (title === "Amazon Gift Pay") {
  } else {
    url =
      "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png";
  }
  return (
    <>
      <div className={styling.Date}>{date}</div>
      <div>
        <img src={url} className={styling.myLogo} alt={title} />
      </div>
    </>
  );
}
