import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import ServiceList from './';
import Service from "./Service";
import DataService from "../../../dataService/DataService";
import { mocked } from 'ts-jest/utils';

jest.mock('../../../dataService/DataService');
const props = {refresh: false};
const serviceList = [{
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
},
  {
    name: 'Second Service',
    status: {
      name: 'Second Service',
      url: 'https://secondservice.com',
      addTime: {
        epochSecond: 1234567,
        nano: 123345,
      },
      status: "UNKNOWN"
    },
  }]



test('render calls getAllService api', () => {
  mocked(DataService.getAllServices).mockResolvedValue(serviceList);
  render(<ServiceList {...props}/>);
  expect(DataService.getAllServices).toHaveBeenCalledTimes(1);

});

test('renders all service list', async () => {
  mocked(DataService.getAllServices).mockResolvedValue(serviceList);
  render(<ServiceList {...props}/>);
  expect(await screen.findAllByTestId("service")).toHaveLength(serviceList.length);
});
