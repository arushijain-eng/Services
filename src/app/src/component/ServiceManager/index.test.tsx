import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ServiceManager from './';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import userEvent from "@testing-library/user-event";

test('render create button', () => {
  const {container} = render(<ServiceManager/>);
  const createAnchor = container.getElementsByTagName("a");
  expect(createAnchor).toHaveLength(1);
  expect(screen.getByText('Create')).toBeInTheDocument();
});

test('render refresh button', () => {
  const {container} = render(<ServiceManager/>);
  const refreshButton = container.getElementsByClassName("refresh-Button");
  expect(refreshButton).toHaveLength(1);
  expect(screen.getByText('Refresh')).toBeInTheDocument();
});

test('renders service list when url is /', () => {
  const history = createMemoryHistory()
  history.push('/')
  const {container} = render(
      <Router history={history}>
        <ServiceManager />
      </Router>
  )
  expect(container.getElementsByClassName("service-list")).toHaveLength(1);
  expect(container.getElementsByClassName("create-form")).toHaveLength(0);
});

test('renders create page when url is /create', () => {
  const history = createMemoryHistory()
  history.push('/')
  const {container} = render(
      <Router history={history}>
        <ServiceManager />
      </Router>
  )
  userEvent.click(screen.getByText(/create/i))
  expect(container.getElementsByClassName("create-form")).toHaveLength(1);
  expect(container.getElementsByClassName("service-list")).toHaveLength(0);
});

