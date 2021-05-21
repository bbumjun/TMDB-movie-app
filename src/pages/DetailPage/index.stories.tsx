import React from "react";
import { Story } from "@storybook/react";
import DetailPage from "./index";
import { MemoryRouter, Route } from "react-router";
import Header from "components/organizms/Header";
import Footer from "components/organizms/Footer";
export default {
  component: DetailPage,
  title: "DetailPage",
  decorators: [
    (Story: any) => (
      <MemoryRouter initialEntries={["/contents/movie/331482"]}>
        <Route path="/contents/:contentType/:id">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
};
const Template: Story = () => (
  <>
    <Header />
    <DetailPage />;
    <Footer />
  </>
);

export const Default = Template.bind({});
Default.args = {};
