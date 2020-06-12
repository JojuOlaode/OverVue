/* eslint-disable */
/**
 * @jest-environment jsdom
 */
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import App from "../../../src/App";
import Vuex from "vuex";
import store from "../../../src/store/state/index";
import * as All from "quasar";
const { Quasar, date } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});
const deepEqual = require('lodash.isequal')
const cloneDeep = require('lodash.clonedeep')

/**
 * @description: Testing functionality of undo redo
 */

describe("Lifecycle methods", () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, Vuex, { components });
  let wrapper; 
  test('on Created', () => {
    const subscribe = jest.fn();
    wrapper = mount(App, {
      mocks: {
        $store: { 
          state: store 
        }
      },
      data(){
        return {
          doneAction: [],
          undoneAction: [],
          isTimetraveling: false,
          initialState: {}
        }
      }
    });

  });
  
  test('on Mounted', () => {

  });

});