import React, { Component } from "react";
import { Chrono } from "react-chrono";
import { Box } from "@chakra-ui/react";

class EducationTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 768px)").matches,
    };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", handler);
  }

  render() {
    const items = [
      {
        title: "example",
        cardTitle: "example",
        cardSubtitle: "example",
        cardDetailedText: "example",
      },
      {
        title: "example",
        cardTitle: "example",
        cardSubtitle: "example",
        cardDetailedText: "example",
      },
      {
        title: "example",
        cardTitle: "example",
        cardSubtitle: "example",
        cardDetailedText: "example",
      },
      {
        title: "example",
        cardTitle: "example",
        cardSubtitle: "example",
        cardDetailedText: "example",
      },
    ];

    const timelineMode = this.state.matches ? "HORIZONTAL" : "VERTICAL";

    const timelineTheme = {
      primary: "#01bf71",
      secondary: "#010606",
      cardBgColor: "#f7f8fa",
      cardForeColor: "#010606",
      titleColor: "#fff",
    };

    return (
      <Box
        width="100%"
        height="400px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        backgroundColor="#010606" // Dark background color
        overflow="hidden"
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "20%",
            background: "linear-gradient(to bottom, #010606, transparent)", // Wave-like gradient
            zIndex: -1,
            transform: "skewY(-5deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "20%",
            background: "linear-gradient(to bottom, #010606, transparent)", // Wave-like gradient
            zIndex: -1,
            transform: "skewY(5deg)",
          }}
        />
        <Chrono
          items={items}
          mode={timelineMode}
          slideShow={false}
          itemWidth={250}
          hideControls={true}
          cardHeight={100}
          borderLessCards={true}
          theme={timelineTheme}
        />
      </Box>
    );
  }
}

export default EducationTimeline;
