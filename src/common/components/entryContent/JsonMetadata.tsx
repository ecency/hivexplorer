import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const JsonMetadata = (props: any) => {
  const { data } = props;
  return (
    <>
      {data && (
        <>
          <table className="time-date-table">
            <tbody>
              {Object.keys(data).map((key, i) => {
                return (
                  <tr key={i}>
                    <td>{key}</td>
                    {typeof data[key] !== "object" ? (
                      <td>{data[key]}</td>
                    ) : (
                      <td>
                        <table style={{ width: "100%" }}>
                          <tbody>
                            {data[key].map((val: string, j: number) => {
                              return (
                                <tr key={j}>
                                  {key === "tags" && <td key={j}>{val}</td>}
                                  {key === "users" && <td><Link to={`/@${val}`}>{val}</Link></td>}
                                  {key === "image" && <td><a href={val} target="_blank">{val}</a></td>}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default JsonMetadata;
