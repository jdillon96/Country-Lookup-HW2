import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import Search from "./Search";
import Display from "./Display";
import Footer from "./Footer";

export default function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const hyperlink = encodeURIComponent(country);
    const url = `https://raw.githubusercontent.com/factbook/factbook.json/master${hyperlink}.json`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [country]);

  return (
    <div className="App">
      <Title text="Country Lookup" />
      <Search action={setCountry} />
      <Display name={country} data={data} />
      <Footer />
    </div>
  );
}
