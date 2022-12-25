import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from "../common";
import Meta from "../../components/meta";
import Theme from "../../components/theme";
import { getMetaProps } from "../../util/get-meta-props";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import { _t } from "../../i18n";

const About = (props: PageProps) => {
  const [metaProps, setMetaProps] = useState({});

  useEffect(() => {
    setMetaProps(getMetaProps(props));
  }, []);

  return (
    <>
      <Meta {...metaProps} />
      <Theme global={props.global} />
      <Container className="data-table-hive about-container py-5">
        <div className="witness-header">
          <h1>{_t("about.page_title")}</h1>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: _t("about.page_description") }}
          />
        </div>
      </Container>
    </>
  );
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(About));
