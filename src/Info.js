import "./styles.css";
import Clean from "./Clean";

export default function Info({ text, data, section }) {
  function check({ data, section }) {
    let SectionList = Object.values(section);
    for (let i = 0; i < SectionList.length; i++) {
      data[SectionList[i]] ? (data = data[SectionList[i]]) : (data = "");
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
