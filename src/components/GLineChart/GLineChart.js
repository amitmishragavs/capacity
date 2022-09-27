import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import { defaults } from 'chart.js';

defaults.font.size = 12

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    }
  },
};
const hData = { "2022-09-24": 13, "2022-09-25": 12, "2022-09-26": 7, "2022-09-27": 6, "2022-09-28": 7, "2022-09-29": 16, "2022-09-30": 8 }


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels: Object.keys(hData).map(key=>moment(key).format("DD/MM")),
  datasets: [
    {
      label: 'Beds occupancy',
      data: Object.keys(hData).map(key=> hData[key]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};


export function GLineChart() {

    
    // const [data, setData] = useState({});
    // const [loading, setLoading] = useState(true);
  
  
    // useEffect(() => {
    //   const label = [];
    //   const mData = [];
    //   Object.keys(hData).forEach(key => {
    //     label.push(moment(key).format("DD/MM") )
    //     mData.push(hData[key]);
    //   })
    //   setData({
    //     labels:label,
    //     datasets: [
    //       {
    //         label: 'Beds Availabilty',
    //         data: mData,
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(65,179,213,255)',
    //       },
    //     ]
    //   })
    //   setLoading(false)
    // }, [])


  return <Line options={options} data={data} />;
}
