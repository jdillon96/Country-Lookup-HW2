import "./styles.css";
import Info from "./Info.js";
import Clean from "./Clean";
import CountryName from "./CountryName";

export default function Display({ data }) {
  function check({ data }) {
    data ? { data } : <></>;
  }
  return data.Introduction ? (
    <section class="display_boxes">
      <section class="info">
        <h2>
          <CountryName data={data} />
        </h2>
        <p class="background">
          <Clean data={data["Introduction"]["Background"]["text"]} />
        </p>
      </section>
      <section class="info">
        <h2>🏛️ Government 🏛️</h2>
        <Info
          text="Capital:"
          data={data}
          section={["Government", "Capital", "name"]}
        />
        <Info
          text="Type of Government:"
          data={data}
          section={["Government", "Government type"]}
        />
        <Info
          text="Head of State:"
          data={data}
          section={["Government", "Executive branch", "chief of state"]}
        />
        <Info
          text="Administrative Regions:"
          data={data}
          section={["Government", "Administrative divisions"]}
        />
      </section>
      <section class="info">
        <h2>🗺️ Geography 🗺️</h2>
        <Info
          text="Location: "
          data={data}
          section={["Geography", "Location"]}
        />
        <Info
          text="Total Area:"
          data={data}
          section={["Geography", "Area", "total "]}
        />
        <Info
          text="Highest Point: "
          data={data}
          section={["Geography", "Elevation", "highest point"]}
        />
        <Info
          text="Lowest Point:"
          data={data}
          section={["Geography", "Elevation", "lowest point"]}
        />
      </section>
      <section class="info">
        <h2>✌️ People and Culture ✌️</h2>
        <Info
          text="Language(s): "
          data={data}
          section={["People and Society", "Languages", "Languages"]}
        />
        <Info
          text="Language(s): "
          data={data}
          section={["People and Society", "Languages"]}
        />
        <Info
          text="Population: "
          data={data}
          section={["People and Society", "Population", "total"]}
        />
        <Info
          text="Median Age: "
          data={data}
          section={["People and Society", "Median age", "total"]}
        />
        <Info
          text="Life Expectancy: "
          data={data}
          section={[
            "People and Society",
            "Life expectancy at birth",
            "total population",
          ]}
        />
      </section>
      <section class="info">
        <h2>💰 Economy 💰</h2>
        <Info
          text="GDP: "
          data={data}
          section={[
            "Economy",
            "Real GDP (purchasing power parity)",
            "Real GDP (purchasing power parity) 2022",
          ]}
        />
        <Info
          text="Inflation: "
          data={data}
          section={[
            "Economy",
            "Inflation rate (consumer prices)",
            "Inflation rate (consumer prices) 2022",
          ]}
        />
        <Info
          text="Unemployment Rate: "
          data={data}
          section={["Economy", "Unemployment rate", "Unemployment rate 2022"]}
        />
      </section>
    </section>
  ) : (
    <></>
  );
}
