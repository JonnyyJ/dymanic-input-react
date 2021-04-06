import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe("<App />", ()=>{
  test('add input', () => {
    render(<App />);
    const btnAdd = screen.getByTestId("btn-add");
    fireEvent.click(btnAdd)
    const container = screen.queryAllByTestId("container")
    expect(container).toHaveLength(2)
  });
  test('remove input', () => {
    render(<App />);
    const btnRemove = screen.getByTestId("btn-remove");
    fireEvent.click(btnRemove)
  });
})

