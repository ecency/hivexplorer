import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from './common';
import React, { useEffect, useState } from 'react';
import Meta from '../components/meta';
import Theme from '../components/theme';
import { getMetaProps } from '../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../components/with-persistent-scroll';
import { _t } from '../i18n';



const About = (props: PageProps) => {
  const [metaProps, setMetaProps] = useState({});

  useEffect(() => {
    setMetaProps(getMetaProps(props));
  }, []);

  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div className='card-row'>{_t("about.page_title")}</div>
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(About));