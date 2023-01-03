import React from "react";
import { connect } from "react-redux";

import { pageMapDispatchToProps, pageMapStateToProps } from "../../pages/common";
import { withPersistentScroll } from "../with-persistent-scroll";
import { _t } from "../../i18n";
import StringField from "../fields/blockFields/StringField";
import ObjectField from "../fields/blockFields/ObjectField";

const EntryProperties = (props: any) => {
  const { entries } = props;
  // {const renderedBody = ;}
  const EntryType = [
    "author",
    "permlink",
    "category",
    "created",
    "json_metadata",
    "last_update",
    "depth",
    "children",
    "last_payout",
    "cashout_time",
    "total_payout_value",
    "curator_payout_value",
    "pending_payout_value",
    "promoted",
    "body_length",
    "author_reputation",
    "root_title",
    "beneficiaries",
    "max_accepted_payout",
    "percent_hbd",
    "post_id",
    "net_rshares",
    "author_curate_reward"
  ];
  return (
    <>
      {entries &&
        Object.keys(entries).map((key, index: number) => {
          return (
            <div key={index}>
              {typeof entries[key] !== "object"
                ? EntryType.includes(key) && (
                    <StringField
                      key={index}
                      value={entries[key]}
                      item={key}
                      number={index}
                      label_for="entry"
                    />
                  )
                : EntryType.includes(key) && (
                    <ObjectField
                      key={index}
                      value={entries[key]}
                      item={key}
                      number={index}
                      label_for="entry"
                    />
                  )}
            </div>
          );
        })}
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(EntryProperties));
