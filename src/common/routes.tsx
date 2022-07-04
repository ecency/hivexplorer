import {EntryFilter, ProfileFilter} from "./store/global/types";

const entryFilters = Object.values(EntryFilter);
const profileFilters = Object.values(ProfileFilter);

export default {
    HOME: `/`,
    ABOUT: `/about`,
    FAQ: `/faq`,
    MARKET: `/market`,
    AUTH: `/auth`,
    BLOCKS: `/blocks`,
    BLOCK_DETAILS: `/b/:number([\\d]+)`,
    FILTER: `/:filter(${entryFilters.join("|")})`,
    FILTER_TAG: `/:filter(${entryFilters.join("|")})/:tag`,
    ENTRY: `/:category/:username(@[\\w\\.\\d-]+)/:permlink`,
    USER: `/:username(@[\\w\\.\\d-]+)`,
    USER_FEED: `/:username(@[\\w\\.\\d-]+)/:section(feed)`,
    USER_SECTION: `/:username(@[\\w\\.\\d-]+)/:section(${profileFilters.join("|")}|wallet|points|engine|communities|settings|permissions)`,
    COMMUNITIES: `/communities`,
    COMMUNITY: `/:filter(${entryFilters.join("|")}|subscribers|activities|roles)/:name(hive-[\\d]+)`,
    DISCOVER: `/discover`,
    SEARCH: `/search/`,
    SEARCH_MORE: `/search-more/`,
    WITNESSES: `/witnesses`,
    PROPOSALS: `/proposals`,
    PROPOSAL_DETAIL: `/proposals/:id(\\d+)`
};
