import React from 'react';
import {create} from 'react-test-renderer';
import WeekTrending from '../components/Trending/WeekTrending';
import { Provider } from 'react-redux';
import store from '../store';

test("snapshot", () => {
  const c = create(<Provider store={store}><WeekTrending /></Provider>);
  expect(c.toJSON()).toMatchSnapshot();
});