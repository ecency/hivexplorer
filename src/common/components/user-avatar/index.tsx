import React, { Component } from "react";
import { Link } from "react-router-dom";

import defaults from "../../constants/defaults.json";

interface Props {
  username: string;
  size?: string;
}

export class UserAvatar extends Component<Props> {
  render() {
    const { username, size } = this.props;
    const imgSize =
      size === "xLarge" ? "large" : size === "normal" || size === "small" ? "small" : "medium";
    const cls = `user-avatar ${size}`;
    const imageSrc = `${defaults.imageServer}/u/${username}/avatar/${imgSize}`;

    return <><span className={cls} style={{ backgroundImage: `url(${imageSrc})` }} /><Link to={`/@${username}`}>{username}</Link></>;
  }
}

export default (p: Props) => {
  const props = {
    username: p.username,
    size: p.size
  };

  return <UserAvatar {...props} />;
};
