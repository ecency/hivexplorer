import React from "react";
import TestRenderer from "react-test-renderer";
import { StaticRouter } from "react-router-dom";

import UserAvatar from "./index";

jest.mock("../../constants/defaults.json", () => ({
  imageServer: "https://images.ecency.com"
}));

describe("UserAvatar", () => {
  it("(1) Should render small size", () => {
    const props = { username: "good-karma", size: "small" };
    const renderer = TestRenderer.create(
      <StaticRouter location="/@username" context={{}}>
        <UserAvatar {...props} />
      </StaticRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("(2) Should render normal size", () => {
    const props = { username: "good-karma", size: "normal" };
    const renderer = TestRenderer.create(
      <StaticRouter location="/@username" context={{}}>
        <UserAvatar {...props} />
      </StaticRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("(3) Should render medium size", () => {
    const props = { username: "good-karma", size: "medium" };
    const renderer = TestRenderer.create(
      <StaticRouter location="/@username" context={{}}>
        <UserAvatar {...props} />
      </StaticRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("(4) Should render large size", () => {
    const props = { username: "good-karma", size: "large" };
    const renderer = TestRenderer.create(
      <StaticRouter location="/@username" context={{}}>
        <UserAvatar {...props} />
      </StaticRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("(5) Should render xlarge size", () => {
    const props = { username: "good-karma", size: "xLarge" };
    const renderer = TestRenderer.create(
      <StaticRouter location="/@username" context={{}}>
        <UserAvatar {...props} />
      </StaticRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
