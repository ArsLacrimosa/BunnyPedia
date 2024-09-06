import data from "../data/bunnypedia_domestic.json";
import "./BunnyTable.css";

export default function BunnyTable() {
  let headers = Object.keys(data[0]);
  let rows = data.map((category) => Object.values(category));
  console.log(headers);
  return (
    <table className="bunny-table">
      <thead>
        {headers.map((header) => (
          <th id="header">{header}</th>
        ))}
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((category_data, index) => (
                <td key={index}>{category_data}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
