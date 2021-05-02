import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Service from './';
import {AxiosResponse} from 'axios'
import DataService from "../../../../dataService/DataService";
import { mocked } from 'ts-jest/utils';

jest.mock('../../../../dataService/DataService');


const mock_service = {
  name: 'First Service',
  status: {
    name: 'First Service',
    url: 'https://firstservice.com',
    addTime: {
      epochSecond: 1234567,
      nano: 123345,
    },
    status: "OK"
  },
};

let props = {service: mock_service, onDeleteService: jest.fn()};

test('renders Service Name', () => {
  render(<Service {...props}/>);
  const serviceName = screen.getByText("First Service");
  expect(serviceName).toBeInTheDocument();
});

test('renders Service URL', () => {
  render(<Service {...props}/>);
  const serviceUrl = screen.getByText("URL: https://firstservice.com");
  expect(serviceUrl).toBeInTheDocument();
});

test('renders Delete button', () => {
  const { container, getByText } = render(<Service {...props}/>);
  const deleteText = getByText("Delete");
  const deleteButton = container.getElementsByClassName("delete-button");
  expect(deleteText).toBeInTheDocument();
  expect(deleteButton).toHaveLength(1)
});

test('applies class status-active when status is OK', () => {
  const { container } = render(<Service {...props}/>);
  const serviceTileActive = container.getElementsByClassName("flexItem status-active");
  expect(serviceTileActive).toHaveLength(1);
});

test('does not apply class status-fail when status is OK', () => {
  const { container } = render(<Service {...props}/>);
  const serviceTileFail = container.getElementsByClassName("flexItem status-fail");
  expect(serviceTileFail).toHaveLength(0);
});

test('applies class status-fail when status is not OK', () => {
  let props = {service: {...mock_service, status: {...mock_service.status, status: "UNKNOWN"}}, onDeleteService: ""};
  const { container } = render(<Service {...props}/>);
  const serviceTileFail = container.getElementsByClassName("flexItem status-fail");
  expect(serviceTileFail).toHaveLength(1);
});

test('does not apply class status-active when status is not OK', () => {
  const props = {service: {...mock_service, status: {...mock_service.status, status: "UNKNOWN"}}, onDeleteService: ""};
  const { container } = render(<Service {...props}/>);
  const serviceTileActive = container.getElementsByClassName("flexItem status-active");
  expect(serviceTileActive).toHaveLength(0);
});

test('calls onClick prop when clicked',  () => {
  mocked(DataService.deleteService).mockResolvedValue();
  const { getByText, asFragment } = render(<Service {...props}/>);
  fireEvent.click(getByText(/Delete/))
  expect(DataService.deleteService).toHaveBeenCalledWith(props.service.name);
});