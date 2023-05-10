export interface Daily {
  date: string;
  humidity: number;
  temp: number;
  _id: string;
}

export interface Month {
  id: string;
  month: string;
  humidity: number;
  moisture: number;
  temp: number;
  _id: string;
}

export interface GetDataResponse {
  id: string;
  _id: string;
  __v: number;
  AverageHumidity: number;
  AverageMoisture: number;
  AverageTemp: number;
  dailyData: Array<Daily>;
  monthlyData: Array<Month>;
}
