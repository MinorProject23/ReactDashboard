import { Box, useMediaQuery } from "@mui/material";
import DashboardTiles from "./DashboardTiles";

const gridTemplateLargeScreen = `
  "a b"
  "a b"
  "a b"
  "c d"
  "c d"
  "c d"
  
`;

const gridTemplateSmallScreen = `
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
`;

const Dashboard = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      rowGap={"1.5rem"}
      columnGap={isAboveMediumScreen ? "1rem" : "0rem"}
      sx={
        isAboveMediumScreen
          ? {
              gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(6, minmax(60px , 1fr))",
              gridTemplateAreas: gridTemplateLargeScreen,
            }
          : {
              gridTemplateRows: "repeat(12, minmax(80px , 1fr))",
              gridTemplateAreas: gridTemplateSmallScreen,
            }
      }
    >
      <DashboardTiles />
    </Box>
  );
};

export default Dashboard;
