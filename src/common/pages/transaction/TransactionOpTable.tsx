import React from "react"
import { useSelector } from 'react-redux';

const TransactionOpTable=(props:any)=>{
  const {opTrans}=props
  const currTheme = useSelector((state:any) => state.global.theme)
    return (
        <table className={currTheme==='day'?'text-dark trans-table':'text-white trans-table'} >
        <tbody>
          <tr>
            <td>Type</td>
            <td>{opTrans.type}</td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <table>
                <tbody>
                 {opTrans.value.id &&  <tr>
                    <td>id</td>
                    <td>{opTrans.value.id}</td>
                  </tr>}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
}
export default TransactionOpTable