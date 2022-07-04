import React, { Component } from 'react';
//import styled from 'styled-components';

import { makeGroupKey } from '../store/entries';
import _c from '../util/fix-class-names';
import { PageProps } from './common';
import { Entry } from '../store/entries/types';

/*const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;*/

interface Props extends PageProps {
    loading: boolean;
    setLoading: (isLoading: boolean) => void;
    reload: () => void;
}

interface State {
    entryList: Entry[];
    promoted: Entry[];
}

class EntryIndexPage extends Component<Props, State> {
    state: State = {
        entryList: [],
        promoted: [],
    };

    componentDidMount() {
        const {global, fetchEntries} = this.props;
        fetchEntries(global.filter, global.tag, false);
        this.loadEntries();
    }

    componentDidUpdate(prevProps: Readonly<PageProps>): void {
        const {global, fetchEntries} = this.props;
        const {global: pGlobal, entries: pEntries} = prevProps;

        // page changed.
        if (!global.filter) {
            return;
        }

        if (!(global.filter === pGlobal.filter && global.tag === pGlobal.tag)) {
            fetchEntries(global.filter, global.tag, false);
        }

        if (this.props.entries !== pEntries) {
            this.loadEntries();
        }
    }

    loadEntries = () => {
        const { entries, global } = this.props;
        const { filter, tag } = global;
        const groupKey = makeGroupKey(filter, tag);
        const data = entries[groupKey];

        if (data === undefined) {
            return;
        }

        this.setState({
            entryList: data.entries
        });

        if (this.props.loading !== data.loading) {
            this.props.setLoading(data.loading);
        }
    }

    bottomReached = () => {
        const {global, entries, fetchEntries} = this.props;
        const {filter, tag} = global;
        const groupKey = makeGroupKey(filter, tag);

        const data = entries[groupKey];
        const {loading, hasMore} = data;

        if (!loading && hasMore) {
            fetchEntries(filter, tag, true);
        }
    }

    render() {
        const { global } = this.props;

        let containerClasses = 'app-content overflow-hidden entry-index-page';

        return (
            <div className={containerClasses}>
                <div className="tags-side">
                    {!global.isMobile && (
                        <>
                        </>
                    )}
                </div>
                <div className={_c(`entry-page-content ${this.props.loading ? "loading" : ""}`)}>
                    <div className={_c(`entry-list ${this.props.loading ? "loading" : ""}`)}>
                    </div>
                </div>
                <div className="side-menu">
                </div>
            </div>
        );
    }
}

export default (props: Props) => <EntryIndexPage {...props}/>;
