import { createOvermind } from "overmind";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

const onInitialize = async ({ actions }) => {
  await actions.loadUsers();
};
const config = {
  state,
  actions,
  effects,
  onInitialize,
};

export const overmind = createOvermind(config, { devtools: true });
