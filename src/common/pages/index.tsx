import { pageMapDispatchToProps, pageMapStateToProps, PageProps } from './common';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

import Meta from '../components/meta';
import Theme from '../components/theme';
import { makeGroupKey } from '../store/entries';
import { getMetaProps } from '../util/get-meta-props';

const EntryIndexContainer = loadable(() => import('./entry-index'));

const IndexCon = (props: PageProps) => {
  const [metaProps, setMetaProps] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMetaProps(getMetaProps(props));
  }, []);

  const reload = () => {
    const { global, fetchEntries, invalidateEntries } = props;
    invalidateEntries(makeGroupKey(global.filter, global.tag));
    fetchEntries(global.filter, global.tag, false);
  }

  return <>
    <Meta {...metaProps} />
    <Theme global={props.global}/>
    <EntryIndexContainer
      {...props}
      loading={loading}
      setLoading={setLoading}
      reload={reload}
    />
  </>;
};

export default connect(pageMapStateToProps, pageMapDispatchToProps)(IndexCon);