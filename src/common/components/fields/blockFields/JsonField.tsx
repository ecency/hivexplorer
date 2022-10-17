
import React from 'react';
import './stringField.scss'
import { useSelector } from 'react-redux';
import { _t } from '../../../i18n';
import { Link } from 'react-router-dom';


const JsonField = (props:any) => {
    const {transactionOperations}=props;
    const currTheme = useSelector((state:any) => state.global.theme)
      const userType=[
        "voter",
        "author",
        "delegator",
        "delegatee"

      ]
    return (
       <>
       {transactionOperations.operations && transactionOperations.operations.map((op:any,index:number)=>{
        const opVal=op.value
        console.log('required auths',opVal.required_posting_auths)
        return(
            <table className={currTheme==="day"?'json-table json-table-day':'json-table json-table-night'} key={index}>
            <tbody>
            <tr>
                 <td>Type</td>
                 <td>{op.type}</td>
             </tr>
             <tr>
                 <td>value</td>
                 <td>
                    <table>
                        <tbody>
                           {opVal.id && 
                            <tr>
                                <td>{_t('trans_table.id')}</td>
                                <td>{opVal.id}</td>
                            </tr>
                            }
                            {Object.keys(opVal).map((item:string)=>{
                               return(
                                <>
                                 {console.log(item,typeof(item),userType.includes(item))}
                                {typeof(item)==="string" && userType.includes(item) ?
                                <tr>
                                <td>{_t(`trans_table.${item}`)}</td>
                                <td><img className='avatar-img' src={`https://images.ecency.com/u/${item}/avatar`} alt=""/> 
                               
                                <Link to={`/@${opVal[item]}`}>{opVal[item]}</Link>
                                </td>
                            </tr>:<></>}
                                </>
                               )
                            })}
                            { opVal.required_auths !== undefined ? 
                             opVal.required_auths.length !==0 ?
                             <tr>
                                <td>{_t('trans_table.required_auths')}</td>
                                <td><img className='avatar-img' src={`https://images.ecency.com/u/${opVal.required_auths[0]}/avatar`} alt=""/> 
                                
                                <Link to={`/@${opVal.required_auths[0]}`}>{opVal.required_auths[0]}</Link>
                                </td>
                            </tr>:<></>
                            :<></>
                            }
                             { opVal.required_posting_auths !== undefined ? 
                             opVal.required_posting_auths.length !==0 ?
                             <tr>
                                <td>{_t('trans_table.required_posting_auths')}</td>
                                <td><img className='avatar-img' src={`https://images.ecency.com/u/${opVal.required_posting_auths[0]}/avatar`} alt=""/> 
                                    <Link to={`/@${opVal.required_posting_auths[0]}`}>{opVal.required_posting_auths[0]}</Link>
                                </td>
                            </tr>:<></>
                            :<></>
                            }
                           {opVal.json && 
                            <tr>
                                <td>{_t('trans_table.json')}</td>
                                <td>{opVal.json}</td>
                            </tr>
                            }
                               
                        </tbody>
                    </table>
                </td>
             </tr>
            </tbody>
         </table>
        )
       })}
       </>
    )

};
export default JsonField;