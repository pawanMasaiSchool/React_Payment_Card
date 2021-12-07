import styling from "./Devices.module.css";

export default function Devices({ device1, device2 }) {
  return (
    <div className={styling.Devices}>
      {device1} - {device2}
      <img
        className={styling.myArrow}
        src="https://w7.pngwing.com/pngs/398/644/png-transparent-arrow-computer-icons-arrow-icon-in-flat-style-arrow-symbol-web-design-logo-ui-illustration-gray-arrow-logo-miscellaneous-angle-web-design.png"
        alt="->"
      />
    </div>
  );
}
