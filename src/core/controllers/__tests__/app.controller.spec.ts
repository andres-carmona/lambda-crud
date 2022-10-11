import { AppController } from "../app.controller"

describe("AppController", () => {
  test("retrieveUrl", async () => {
    const controller = new AppController();
    const response = await controller.retrieveUrl();

    expect(response).toMatch("Hello from my endpoint.");
  })
})