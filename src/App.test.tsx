import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {RootStateType} from './redux/store';

type PropsType = {
  state: RootStateType
}

test('renders learn react link', (props: any) => {
  const { getByText } = render(<App  state={props.state}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
