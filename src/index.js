import React from "react";
import { render } from "react-dom";
import Timeline from "react-visjs-timeline";
import moment from "moment";
// import style from "./../prota.css";

const options = {
  width: "100%",
  height: window.innerHeight * 0.97,
  stack: false,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: "range",
  orientation: "top",
  stack: true,
  editable: true,
  format: {
    minorLabels: {
      minute: "h:mma",
      hour: "ha",
      day: "dd D"
    }
  }
  // template: function (item, element, data) {
  //   console.log('template', item)
  //   return <b>{item.content}</b>;
  // }
};

const groups = [
  {
    id: 1,
    content: "Ideate",
    items: [
      "The Idea",
      "The Overview Statement",
      "The Market",
      "Customer Personas"
    ]
  },
  {
    id: 2,
    content: "Validate",
    items: ["The Team", "Surveys", "Interviews", "Advisors", "Experiments"]
  },
  {
    id: 3,
    content: "Create",
    items: [
      "The Roadmap",
      "The Overview Story",
      "Funnel Stages and KPIs",
      "UI Spec",
      "Tech Stack Decisions",
      "Data Architecture",
      "UX Flowchart",
      "Brand Foundations",
      "The Name",
      "The Logo",
      "Finances",
      "Legal",
      "Style Tiles",
      "Wireframes",
      "Mockups",
      "Prototype"
    ]
  },
  {
    id: 4,
    content: "Grow",
    items: [
      "Private Alpha",
      "Landing Page",
      "Private Beta",
      "Public Beta",
      "Initial Iterations",
      "Exploring Product-Market Fit"
    ]
  },
  {
    id: 5,
    content: "Fund",
    items: [
      "When/If to Raise Money",
      "The Pitch",
      "Closing Your First Round",
      "Communicating with Investors"
    ]
  }
];

const items = [];
groups.forEach(group => {
  group.items.forEach(item => {
    items.push({
      id: items.length,
      start: moment()
        .startOf("day")
        .add(items.length, "days"),
      end: moment()
        .startOf("day")
        .add(items.length + 7, "days"), // end is optional
      content: item,
      group: group.id
    });
  });
});

const App = () => (
  <div className="timeline">
    <Timeline options={options} items={items} groups={groups} />
  </div>
);

render(<App />, document.getElementById("root"));
