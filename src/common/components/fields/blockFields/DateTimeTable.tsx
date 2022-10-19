import moment from "moment"
import React from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Date_time_table } from "../../../api/dateTime"
import { _t } from "../../../i18n"

export const DateTimeTable=(timeDate:string)=>{
    return(
        <>
            <table className='time-date-table'>
               <tbody>
               <tr>
                    <td>{_t('common.date')}</td>
                    <td>{Date_time_table(`${timeDate}`,"YYYY-MM-DD")}</td>
                </tr>
                <tr>
                    <td>{_t('common.time')}</td>
                    <td>{Date_time_table(`${timeDate}`,`hh:mm:ss`)}</td>
                </tr>
               </tbody>
            </table>
        </>
    )
}

export const TimestampField=(props:any)=>{
    const {timestamp}=props
    return (
        <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">
          {DateTimeTable(`${timestamp}`)}
        </Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
          ref={ref}
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
       
            <span className="ms-1">{moment(`${timestamp}`).fromNow()}</span>
          </Button>
        )}
      </OverlayTrigger>
    )
}