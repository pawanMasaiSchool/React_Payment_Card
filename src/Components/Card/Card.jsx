import CaseBtn from "../CaseStudyBtn/CaseBtn";
import Date from "../Date/Date";
import Devices from "../Devices/Devices";
import Heading from "../Heading/Heading";
import styling from "./Card.module.css";

export default function Card({ clr, date, title, device1, device2 }) {
  return (
    <div className={styling.Card} style={{ backgroundColor: clr }}>
      {/* <img src={url} className={styling.myLogo} alt={title} /> */}
      <Date date={date} title={title} />
      <CaseBtn />
      <Heading title={title} />
      <Devices device1={device1} device2={device2} />
    </div>
  );
}
