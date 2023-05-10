import { useMemo } from "react";
import DashboardBox from "../../Components/DashboardBox";
import { useGetKpisQuery } from "../../State/api";
import { useTheme } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";
import BoxHeader from "../../Components/BoxHeader";
import WeatherDisplay from "../../Components/Weather";
import Weather from "../../Components/Weather";
import CropRecommendation from "../../Components/CropRecommendation";

const DashboardTiles = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  console.log("data: ", data);

  const monthlyValues = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, temp, humidity }) => {
        return {
          name: month.substring(0, 3),
          temp: temp,
          humidity: humidity,
        };
      })
    );
  }, [data]);

  const dailyValues = useMemo(() => {
    if (data) {
      console.log(data[0].dailyData);
    }
    return (
      data &&
      data[0].dailyData.map(({ date, temp, humidity }) => {
        return {
          name: date.substring(5, 10),
          temp: temp,
          humidity: humidity,
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea={"a"}>
        <BoxHeader
          title="Monthly Humidity and Temerature"
          subtitle=""
          sideText="May"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={monthlyValues}
            margin={{
              top: 15,
              right: 20,
              left: -20,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="90%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.secondary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="90%"
                  stopColor={palette.secondary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[6]}
            />
            <Tooltip />
            <Area
              type="monotone"
              stroke={palette.primary.main}
              fillOpacity={1}
              dataKey="humidity"
              dot={true}
              fill="url(#colorHumidity)"
            />
            <Area
              type="monotone"
              stroke={palette.secondary.main}
              fillOpacity={1}
              dataKey="temp"
              dot={true}
              fill="url(#colorTemp)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"b"}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={dailyValues}
            margin={{
              top: 15,
              right: 30,
              left: -20,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
              includeHidden={true}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"c"}>
        <Weather location="Ludhiana"></Weather>
      </DashboardBox>

      <DashboardBox gridArea={"d"}>
        <CropRecommendation location="Ludhiana"></CropRecommendation>
      </DashboardBox>
    </>
  );
};

export default DashboardTiles;
