import React, { useEffect, useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import { defaults } from 'chart.js';

defaults.font.size = 25

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      //   text: 'Chart.js Bar Chart',
    },
  },
};



// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     }
//   ],
// };

const hData = { "2022-09-24": 13, "2022-09-25": 12, "2022-09-26": 7, "2022-09-27": 6, "2022-09-28": 7, "2022-09-29": 16, "2022-09-30": 8 }

export function GChart() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const label = [];
    const mData = [];
    Object.keys(hData).forEach(key => {
      label.push(moment(key).format("DD/MM") )
      mData.push(hData[key]);
    })
    setData({
      labels:label,
      datasets: [
        {
          label: 'Beds occupancy',
          data: mData,
          backgroundColor: 'rgba(65,179,213,255)',
        },
      ]
    })
    setLoading(false)
  }, [])

  return !loading ? <Bar options={options} data={data} /> : null;
}
