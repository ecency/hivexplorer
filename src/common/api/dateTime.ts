import moment from "moment";

export const CreatedDate = (created: string) => {
  return moment.utc(created).format("LL");
};

export const Date_time_table = (timeSet: string, timeFormat: string) => {
  return moment.utc(timeSet).format(timeFormat);
};
