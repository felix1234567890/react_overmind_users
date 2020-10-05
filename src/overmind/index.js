import { createOvermind } from "overmind";
import {
  createActionsHook,
  createStateHook,
  createReactionHook,
} from "overmind-react";
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
export const useActions = createActionsHook();
export const useState = createStateHook();
export const useReaction = createReactionHook();
