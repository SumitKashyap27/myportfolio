import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";

const AnimatedBox = motion(Box);

const Qualification = () => {
  const bigScreenMode = "VERTICAL_ALTERNATING";
  const smallScreenMode = "VERTICAL";

  const [oss1, oss2, oss3, oss4] = [
    "Ranked 26th out of 1000+ participants in DevScript's Winter of Code",
    // ... (other items)
  ];

  const [int1, int2, int3, int4, int5, int6] = [
    "Conducted website benchmarking and created sitemaps based on similar agencies.",
    // ... (other items)
  ];

  const history = [
    {
      title: "May 2022 to Aug 2022",
      cardTitle: "Web Developer Apprentice",
      cardSubtitle: "Brand Geeks Inc",
      cardDetailedText: [int1, int2, int3, int4, int5, int6],
    },
    {
      title: "Dec 2020 to Feb 2021",
      cardTitle: "Open-source Contributor",
      cardSubtitle: "DevScript",
      cardDetailedText: [oss1, oss2, oss3, oss4],
    },
    // ... (other items)
  ];

  const mode = window.innerWidth <= 850 ? smallScreenMode : bigScreenMode;

  return (
    <AnimatedBox
      fontFamily="Nunito, sans-serif"
      padding="2rem 0"
      textAlign="center"
      backgroundColor="#232323"
      position="relative"
      zIndex="3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      id={'qualification'}
    >
      <Text fontSize="3xl" fontWeight="bold" color="white" mb="2rem">
        My Educational Journey
      </Text>
      <Chrono
        items={history}
        mode={mode}
        hideControls
        theme={{
          primary: "#5969BA",
          secondary: "#E6E8FA",
          cardBgColor: "#d0d0d0",
        }}
      />
    </AnimatedBox>
  );
};

export default Qualification;
