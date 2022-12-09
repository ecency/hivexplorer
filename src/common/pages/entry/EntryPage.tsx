import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { pageMapDispatchToProps, pageMapStateToProps } from "../../pages/common";
import { withPersistentScroll } from "../../components/with-persistent-scroll";
import Theme from "../../components/theme";
import "./EntryPage.scss";
import { _t } from "../../i18n";
import { getDiscussion } from "../../api/urls";
import { Accordion, Card, Container } from "react-bootstrap";
import EntryBody from "./EntryBody";
import BackToTopButton from "../../components/Buttons/BackToTop";
import EntryVotes from "./EntryVotes";
import EntryProperties from "./EntryProperties";
import { showLessIcon, showMoreIcon } from "../../img/svg";
import SpinnerEffect from "../../components/loader/spinner";
import ToggleButton from "react-toggle-button";
import DefaultImage from "../../img/default-avatar.png";

const EntryPage = (props: any) => {
  const { match } = props;
  const userName = match.params.user_id;
  const permLink = match.params.permlink;
  const [entry, setEntry] = useState<any>();
  const currTheme = useSelector((state: any) => state.global.theme);
  const themeContrastColor = currTheme === "day" ? "black" : "white";
  const [openBody, setOpenBody] = useState(true);
  const [openProperties, setOpenProperties] = useState(false);
  const [openVotes, setOpenVotes] = useState(false);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getDiscussion(userName, permLink);
        setEntry(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Theme global={props.global} />
      <Container className="entry-content-container">
        <>
          {" "}
          {loading && <SpinnerEffect />}
          {!loading &&
            entry &&
            Object.keys(entry)
              .slice(0, 1)
              .map((key, i: number) => {
                return (
                  <>
                    <h2>{entry[key].title}</h2>
                    <div key={i}>
                      <div className="entry-header">
                        <div className="mr-2">
                          <img
                            className="avatar-img"
                            onError={(e: any) => {
                              e.target.src = { DefaultImage };
                            }}
                            src={`https://images.ecency.com/u/${entry[key].author}/avatar`}
                            alt=""
                          />
                        </div>
                        <div>
                          <h4>
                            <Link to={`/@${entry[key].author}`}>{entry[key].author}</Link>
                          </h4>
                          <p>{entry[key].created}</p>
                        </div>
                        <div className="toggle-button-container">
                          <p>{_t("entry.rendered_data")}</p>
                          <div>
                            <ToggleButton
                              inactiveLabel={""}
                              activeLabel={""}
                              value={state}
                              text="n"
                              onToggle={() => {
                                setState(!state);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {entry[key].parent_author && (
                        <div className="entry-parent">
                          <Card>
                            <Card.Header>
                              <p className="m-0">
                                {_t("entry.view_response")}{" "}
                                <a
                                  href={`/@${entry[key].parent_author}/${entry[key].parent_permlink}`}
                                >{`@${entry[key].parent_author}/${entry[key].parent_permlink}`}</a>
                              </p>
                            </Card.Header>
                          </Card>
                        </div>
                      )}
                      <Accordion
                        className={currTheme === "day" ? "accordion-day" : "accordion_night"}
                        defaultActiveKey={["0"]}
                        alwaysOpen={true}
                      >
                        <Accordion.Item eventKey="0" onClick={() => setOpenBody(!openBody)}>
                          <Accordion.Header>
                            <span>{_t("entry.body")}</span>
                            <span>
                              {openBody
                                ? showLessIcon(themeContrastColor)
                                : showMoreIcon(themeContrastColor)}
                            </span>
                          </Accordion.Header>
                          <Accordion.Body>
                            {entry[key].body && (
                              <>
                                {state ? (
                                  <pre className="pre-raw-format">{entry[key].body}</pre>
                                ) : (
                                  <EntryBody body={entry[key].body} />
                                )}
                              </>
                            )}
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="1"
                          onClick={() => setOpenProperties(!openProperties)}
                        >
                          <Accordion.Header>
                            <span>{_t("entry.properties")}</span>
                            <span>
                              {openProperties
                                ? showLessIcon(themeContrastColor)
                                : showMoreIcon(themeContrastColor)}
                            </span>
                          </Accordion.Header>
                          <Accordion.Body>
                            {entry[key] && <EntryProperties entries={entry[key]} />}
                          </Accordion.Body>
                        </Accordion.Item>
                        {entry[key].active_votes.length !== 0 && (
                          <Accordion.Item
                            className="votes-accordion"
                            eventKey="2"
                            onClick={() => setOpenVotes(!openVotes)}
                          >
                            <Accordion.Header>
                              <span>
                                <span className="mr-2">{_t("entry.votes")}</span>{" "}
                                {entry[key].active_votes && (
                                  <span>{` (${entry[key].active_votes.length}) `}</span>
                                )}
                              </span>
                              <span>
                                {openVotes
                                  ? showLessIcon(themeContrastColor)
                                  : showMoreIcon(themeContrastColor)}
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <EntryVotes
                                votes={entry[key].active_votes}
                                user={entry[key].author}
                                permlink={entry[key].permlink}
                              />
                            </Accordion.Body>
                          </Accordion.Item>
                        )}
                        <div className="pl-5">
                          {entry &&
                            Object.keys(entry)
                              .slice(1)
                              .map((key, i: number) => {
                                return (
                                  <>
                                    <div key={i}>
                                      <div className="permlink-discussion-content">
                                        <Accordion
                                          className={
                                            currTheme === "day"
                                              ? "accordion-day"
                                              : "accordion_night"
                                          }
                                          defaultActiveKey={["0"]}
                                          alwaysOpen={true}
                                        >
                                          <Accordion.Item
                                            eventKey="0"
                                            onClick={() => setOpenBody(!openBody)}
                                          >
                                            <Accordion.Body>
                                              <div>
                                                <p>
                                                  <img
                                                    className="avatar-img"
                                                    src={`https://images.ecency.com/u/${entry[key].author}/avatar`}
                                                    alt=""
                                                  />{" "}
                                                  <Link to={`@${entry[key].author}`}>
                                                    {entry[key].author}
                                                  </Link>
                                                </p>
                                                <p>
                                                  {" "}
                                                  <Link
                                                    to={`/${entry[key].category}/@${entry[key].author}/${entry[key].permlink}`}
                                                  >
                                                    {entry[key].permlink}
                                                  </Link>
                                                </p>
                                              </div>

                                              {entry[key].body && (
                                                <>
                                                  {state ? (
                                                    <pre className="pre-raw-format">
                                                      {entry[key].body}
                                                    </pre>
                                                  ) : (
                                                    <EntryBody body={entry[key].body} />
                                                  )}
                                                </>
                                              )}
                                            </Accordion.Body>
                                          </Accordion.Item>
                                          <Accordion.Item
                                            eventKey="1"
                                            onClick={() => setOpenProperties(!openProperties)}
                                          >
                                            <Accordion.Header>
                                              <span>{_t("entry.properties")}</span>
                                              <span>
                                                {openProperties
                                                  ? showLessIcon(themeContrastColor)
                                                  : showMoreIcon(themeContrastColor)}
                                              </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                              {entry[key] && (
                                                <EntryProperties entries={entry[key]} />
                                              )}
                                            </Accordion.Body>
                                          </Accordion.Item>
                                          {entry[key].active_votes.length !== 0 && (
                                            <Accordion.Item
                                              eventKey="2"
                                              onClick={() => setOpenVotes(!openVotes)}
                                            >
                                              <Accordion.Header>
                                                <span>
                                                  <span className="mr-2">{_t("entry.votes")}</span>{" "}
                                                  {entry[key].active_votes && (
                                                    <span>{` (${entry[key].active_votes.length}) `}</span>
                                                  )}
                                                </span>
                                                <span>
                                                  {openVotes
                                                    ? showLessIcon(themeContrastColor)
                                                    : showMoreIcon(themeContrastColor)}
                                                </span>
                                              </Accordion.Header>
                                              <Accordion.Body>
                                                <EntryVotes
                                                  user={entry[key].author}
                                                  permlink={entry[key].permlink}
                                                />
                                              </Accordion.Body>
                                            </Accordion.Item>
                                          )}
                                        </Accordion>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                        </div>
                      </Accordion>
                    </div>
                  </>
                );
              })}
        </>
      </Container>
      <BackToTopButton />
    </>
  );
};
export default connect(
  pageMapStateToProps,
  pageMapDispatchToProps
)(withPersistentScroll(EntryPage));
