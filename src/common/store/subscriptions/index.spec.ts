import reducer, {initialState, updateAct} from "./index";

let state = initialState;

it("1- default state", () => {
    expect(state).toMatchSnapshot();
});

it("2- updateAct", () => {
    state = reducer(state, updateAct([["hive-148441", "GEMS", "guest", ""]]));
    expect(state).toMatchSnapshot();
});
