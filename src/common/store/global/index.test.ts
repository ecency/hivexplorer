import reducer, { initialState, themeChangeAct, setLangAct } from "./index";

import { Theme } from "./types";
import { locationChangeAct } from "../common";

let state = initialState;

it("1- default state", () => {
  expect(state).toMatchSnapshot();
});

it("2- location change. should change filter and tag", () => {
  state = reducer(state, locationChangeAct("/trending/bitcoin"));
  expect(state).toMatchSnapshot();
});

it("3- theme change", () => {
  state = reducer(state, themeChangeAct(Theme.night));
  expect(state).toMatchSnapshot();
});

it("4- Set lang act", () => {
  state = reducer(state, setLangAct("tr-TR"));
  expect(state).toMatchSnapshot();
});
