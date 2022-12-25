import moment from "moment";
import React from "react";
import Tooltip from "../../tooltip";
import { Date_time_table } from "../../../api/dateTime";
import { _t } from "../../../i18n";

export const DateTimeTable = (timeDate: string) => {
  return Date_time_table(`${timeDate}`, "YYYY-MM-DDThh:mm:ss");
};

export const TimestampField = (props: any) => {
  const { timestamp } = props;
  return (
    <Tooltip content={DateTimeTable(`${timestamp}`)}>
        <span className="d-inline-flex align-items-center">
          <span className="ms-1">{moment.utc(`${timestamp}`).fromNow()}</span>
        </span>
    </Tooltip>
  );
};
