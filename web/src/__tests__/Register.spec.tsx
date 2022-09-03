import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Register from "../screens/register";
import { Wrapper } from "../utils/test-util";
import { createMemoryHistory } from "history";

describe("should test register feature", () => {
  it("should register success", async () => {
    const history = createMemoryHistory({ initialEntries: ["/register"] });
    render(
      <Wrapper history={history}>
        <Register />
      </Wrapper>
    );

    await act(async () => {
      fireEvent.change(await screen.findByPlaceholderText("Username"), {
        target: { value: "bob" },
      });

      fireEvent.change(await screen.findByPlaceholderText("Password"), {
        target: { value: "123" },
      });
      fireEvent.click(await screen.findByRole("button", { name: "Register" }));
    });

    await waitFor(() => {
      expect(history.location.pathname).toBe("/register");
    });
  });

  it("should register success", async () => {
    const history = createMemoryHistory({ initialEntries: ["/register"] });
    render(
      <Wrapper history={history}>
        <Register />
      </Wrapper>
    );

    await act(async () => {
      fireEvent.change(await screen.findByPlaceholderText("Username"), {
        target: { value: "bob" },
      });

      fireEvent.change(await screen.findByPlaceholderText("Password"), {
        target: { value: "123" },
      });
    });

    await act(async () => {
      fireEvent.change(await screen.findByPlaceholderText("Email"), {
        target: { value: "bob@gmail.com" },
      });

      fireEvent.click(await screen.findByRole("button", { name: "Register" }));
    });

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});
