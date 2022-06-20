import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../pages/index";

test("Check filter", async () => {
  const profile = {
    name: "Dr. Lay Raphael",
    city: "Citampian",
    country: "Indonesia",
    qunoScoreNumber: 8.5,
    ratingsAverage: 4.8,
    treatmentsLastYear: 2490,
    yearsExperience: 15,
    basePrice: 1355.76,
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Laurianne McNuff",
        country: "Russia",
        date: "2019-12-06T00:06:42Z",
        headline: "consequat morbi a ipsum",
        content:
          "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
      },
      {
        patientName: "Ingram Wabey",
        country: "Portugal",
        date: "2020-01-27T08:58:17Z",
        headline: "nulla nunc purus phasellus in felis donec",
        content:
          "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
      },
      {
        patientName: "Yancey Niess",
        country: "Colombia",
        date: "2020-07-25T13:35:03Z",
        headline: "vestibulum ac est",
        content:
          "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
      },
    ],
    slug: "dr-lay-raphael",
    qunoScoreText: "Excelent",
  };

  render(<App profiles={[profile]} />);

  await waitFor(() => {
    screen.getByRole("profile-cont");
  });

  const buttonElement = screen.getByRole("bestQunoscore");
  userEvent.click(buttonElement);

  const headingElements = screen.getAllByRole("qunoScoreText");
  expect(headingElements[0].textContent === "Excelent");
  screen.debug();
});
