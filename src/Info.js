import "./styles.css";
import Clean from "./Clean";

export default function Info({ text, data, section }) {
  function check({ data, section }) {
    let sectionList = Object.values(section);
    for (let i = 0; i < sectionList.length; i++) {
      data[sectionList[i]] ? (data = data[sectionList[i]]) : (data = "");
    }
    return data;
  }
  data = check({ data, section });
  return data ? (
    data["text"] ? (
      <div class="info">
        <p>{text}</p>
        <p>
          <Clean data={data["text"]} />
        </p>
      </div>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
}
