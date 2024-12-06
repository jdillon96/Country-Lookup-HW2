import "./styles.css";
import Clean from "./Clean";

export default function CountryName({ data }) {
  return data["Government"]["Country name"]["conventional short form"][
    "text"
  ] == "none" ? (
    <Clean
      data={
        data["Government"]["Country name"]["conventional long form"]["text"]
      }
    />
  ) : (
    <Clean
      data={
        data["Government"]["Country name"]["conventional short form"]["text"]
      }
    />
  );
}
