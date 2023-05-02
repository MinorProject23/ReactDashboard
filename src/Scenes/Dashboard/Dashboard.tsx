import { Box, useMediaQuery, useTheme } from "@mui/material";
import DashboardBox from "../../Components/DashboardBox";

type Props = {};

const gridTemplateLargeScreen = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreen = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(40px , 1fr))",
              gridTemplateAreas: gridTemplateLargeScreen,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreen,
            }
      }
    >
      <DashboardBox gridArea={"a"}></DashboardBox>
      <DashboardBox gridArea={"b"}></DashboardBox>
      <DashboardBox gridArea={"c"}></DashboardBox>
      <DashboardBox gridArea={"d"}></DashboardBox>
      <DashboardBox gridArea={"e"}></DashboardBox>
      <DashboardBox gridArea={"f"}></DashboardBox>
      <DashboardBox gridArea={"g"}></DashboardBox>
      <DashboardBox gridArea={"h"}></DashboardBox>
      <DashboardBox gridArea={"i"}></DashboardBox>
      <DashboardBox gridArea={"j"}></DashboardBox>
    </Box>
  );
};

export default Dashboard;
