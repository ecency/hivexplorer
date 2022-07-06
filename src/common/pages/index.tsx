import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from './common';
import React, { useEffect, useState } from 'react';
import Meta from '../components/meta';
import Theme from '../components/theme';
import { getMetaProps } from '../util/get-meta-props';
import { connect } from 'react-redux';
import { withPersistentScroll } from '../components/with-persistent-scroll';

const Index = (props: PageProps) => {
  const [metaProps, setMetaProps] = useState({});

  useEffect(() => {
    setMetaProps(getMetaProps(props));
  }, []);

  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <div>Test page</div>
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(withPersistentScroll(Index));