import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from './common';
import React, { useEffect, useState } from 'react';
import Meta from '../components/meta';
import Theme from '../components/theme';
import { getMetaProps } from '../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../components/with-persistent-scroll';
import { useTranslation } from 'react-i18next';


const About = (props: PageProps) => {
  const {t}=useTranslation()
  const [metaProps, setMetaProps] = useState({});

  useEffect(() => {
    console.log(getMetaProps(props))
    setMetaProps(getMetaProps(props));
  }, []);

  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div className='card-row'>{t("about.page_title")}</div>
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(About));