
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { ConfigItems } from '../../../../config';
const JsonMetadata = (props: any) => {
    const { data } = props
    return (
        <>
            {data &&
                <>
                    <table className='time-date-table'>
                        <tbody>
                            {Object.keys(data).map((key, i) => {
                                return (
                                    <>
                                        {typeof (data[key]) !== "object" ?
                                            <tr key={i}>
                                                <td>{key}</td>
                                                <td>{data[key]}</td>
                                            </tr>
                                            :
                                            <>
                                                {key === "tags" &&
                                                    <tr key={i}>
                                                        <td>{key}</td>
                                                        <td>
                                                            <table style={{ width: "100%" }}>
                                                                <tbody>
                                                                    {data[key].map((val: string, j: number) => {
                                                                        return (
                                                                            <tr key={j}>
                                                                                <td key={j}>{val}</td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                }
                                                {key === "users" &&
                                                    <tr key={i}>
                                                        <td>{key}</td>
                                                        <td>
                                                            <table style={{ width: "100%" }}>
                                                                <tbody>
                                                                    {data[key].map((val: string, j: number) => {
                                                                        return (
                                                                            <tr key={j}>
                                                                                <td><Link to={`/@${val}`}>{val}</Link></td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                }
                                                {key === "image" &&
                                                    <tr key={i}>
                                                        <td>{key}</td>
                                                        <td>
                                                            <table style={{ width: "100%" }}>
                                                                <tbody>
                                                                    {data[key].map((val: string, j: number) => {
                                                                        return (
                                                                            <tr key={j}>
                                                                                <td><a href={val} target="_blank">{val}</a></td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                }
                                            </>
                                        }
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            }
        </>
    )
};
export default JsonMetadata;