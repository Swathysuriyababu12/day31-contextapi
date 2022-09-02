import "./widget.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "TOTAL STUDENTS",
        isMoney: "40000",
        link: <PeopleAltIcon />,
      };
      break;
    case "order":
      data = {
        title: "TEACHERS",
        isMoney: "1000",
        link: <PeopleAltSharpIcon />,
      };
      break;
    case "earning":
      data = {
        title: "PARENTS",
        isMoney: "5000 ",
        link: <PeopleOutlineIcon />,
      };
      break;
    case "balance":
      data = {
        title: "EARNINGS",
        isMoney: "1000000",
        link: <CurrencyRupeeIcon />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="titl">
          {data.link}
          {data.title}
        </span>
        <span className="count">{data.isMoney}</span>
      </div>
    </div>
  );
};

export default Widget;
