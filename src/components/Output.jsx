export const Output = ({ change }) => {
  return (
    <>
      {change === "money insufficient" ? (
        <h3>{change}</h3>
      ) : (
        <>
          <h3>Return Change</h3>
          <table>
            <tbody>
              <tr>
                <th>Number</th>
                <td>{change["2000"]}</td>
                <td>{change["500"]}</td>
                <td>{change["100"]}</td>
                <td>{change["20"]}</td>
                <td>{change["10"]}</td>
                <td>{change["5"]}</td>
                <td>{change["1"]}</td>
              </tr>
              <tr>
                <th>Note</th>
                <td>2000</td>
                <td>500</td>
                <td>100</td>
                <td>20</td>
                <td>10</td>
                <td>5</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
