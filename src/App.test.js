import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { RenderRouteWithOutletContext } from '../test/RenderRouteWithOutletContext';

import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';
import TablePage from './pages/TablePage';

import { user, data } from '../test/mockedData';

jest.useFakeTimers();

describe('App test', () => {
  describe('Index Page', () => {
    test('should render the index page', async () => {
      render(<IndexPage />);

      const title = await screen.findByText(
        /this is the index page/i,
      );
      expect(title).toBeInTheDocument();
    });
  });

  describe('User Page', () => {
    test("should render card's zero state when there's no data", async () => {
      render(
        <RenderRouteWithOutletContext context={{ user: null }}>
          <UserPage />
        </RenderRouteWithOutletContext>,
      );

      const zeroState = await screen.findByText(/no user data/i);
      expect(zeroState).toBeInTheDocument();
    });

    test('should render card with user information', async () => {
      render(
        <RenderRouteWithOutletContext context={{ user }}>
          <UserPage />
        </RenderRouteWithOutletContext>,
      );

      const clientId = screen.getByText(user['client_id']);
      expect(clientId).toBeInTheDocument();
      const firstName = screen.getByText(user['first_name']);
      expect(firstName).toBeInTheDocument();
      const job = screen.getByText(user['job']);
      expect(job).toBeInTheDocument();
      const jobDescriptor = screen.getByText(user['job_descriptor']);
      expect(jobDescriptor).toBeInTheDocument();
    });
  });

  describe('Table Page', () => {
    test("should render tables's zero state when there's no data", async () => {
      render(
        <RenderRouteWithOutletContext context={{ data: [] }}>
          <TablePage />
        </RenderRouteWithOutletContext>,
      );

      const zeroState = await screen.findByText(/no data found/i);
      expect(zeroState).toBeInTheDocument();
    });

    test('should render table data', async () => {
      render(
        <RenderRouteWithOutletContext context={{ data }}>
          <TablePage />
        </RenderRouteWithOutletContext>,
      );

      const rows = screen.getAllByTestId('table-row');
      expect(rows.length).toBe(data.length);
    });

    test('should filter table', async () => {
      render(
        <RenderRouteWithOutletContext context={{ data }}>
          <TablePage />
        </RenderRouteWithOutletContext>,
      );

      const searchBox =
        screen.getByPlaceholderText(/search by account/i);

      fireEvent.change(searchBox, {
        target: { value: 'iraqi dinar' },
      });

      // fast-forward to debounced fn call
      jest.advanceTimersByTime(1000);

      // filtered table should have only one row
      await waitFor(async () => {
        const rows = screen.getAllByTestId('table-row');
        expect(rows.length).toBe(1);
      });
    });
  });
});
