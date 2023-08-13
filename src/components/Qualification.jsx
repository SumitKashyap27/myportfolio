import React from "react";
import { Box,  } from "@chakra-ui/react";

const Qualification = () => {
  const entryStyles = {
    width: "calc(50% - 80px)",
    float: "left",
    padding: "10px",
    clear: "both",
    "&:nth-child(2n)": {
      float: "right",
      textAlign: "left",
    },
  };

  const titleStyles = {
    fontSize: "32px",
    marginBottom: "12px",
    position: "relative",
    color: "#fff",
  };

  const bigTitleStyles = {
    width: "24px",
    height: "24px",
    transform: "translate(8px, -50%)",
  };

  return (
    <Box
      fontFamily="Droid Sans, sans-serif"
      backgroundColor="#1D1D1D"
      minHeight="100vh"
      margin="0"
      position="relative"
      css={{
        "&:before": {
          content: "''",
          position: "fixed",
          top: "60px",
          left: "50%",
          bottom: "0px",
          transform: "translateX(-50%)",
          width: "4px",
          backgroundColor: "#fff",
        },
      }}
    >
      <Box
        width="calc(100% - 80px)"
        maxWidth="800px"
        margin="auto"
        position="relative"
        left="-5px"
        css={{
          ".entry": entryStyles,
          ".title": titleStyles,
          ".big": bigTitleStyles,
        }}
      >
        {/* Entry 1 */}
        <div className="entry">
          <div className="title">2011</div>
          <Box color="#aaa">
            <p>
              Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
              suscipit eveniet amet dignissimos. Doloremque et distinctio quod
              molestiae ut.
            </p>
          </Box>
        </div>

        {/* Entry 2 */}
        <div className="entry">
          <div className="title">2012</div>
          <Box color="#aaa">
            <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
          </Box>
        </div>

        {/* Entry 3 */}
        <div className="entry">
          <div className="title big">2013</div>
          <Box color="#aaa">
            <p>
              Rerum sit libero possimus amet excepturi. Exercitationem enim
              dolores sunt praesentium dolorum praesentium.
            </p>
          </Box>
        </div>

        {/* Add more entries following the same structure */}
      </Box>
    </Box>
  );
};

export default Qualification;
