import { Line, LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';

const resultData =[
  {
    "student_id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 72,
    "math": 85
  },
  {
    "student_id": 2,
    "name": "Karim",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "student_id": 3,
    "name": "Ayesha",
    "physics": 88,
    "chemistry": 91,
    "math": 95
  },
  {
    "student_id": 4,
    "name": "Nusrat",
    "physics": 74,
    "chemistry": 80,
    "math": 77
  },
  {
    "student_id": 5,
    "name": "Hasan",
    "physics": 60,
    "chemistry": 58,
    "math": 62
  },
  {
    "student_id": 6,
    "name": "Jannat",
    "physics": 82,
    "chemistry": 79,
    "math": 88
  },
  {
    "student_id": 7,
    "name": "Siam",
    "physics": 69,
    "chemistry": 65,
    "math": 72
  },
  {
    "student_id": 8,
    "name": "Mim",
    "physics": 91,
    "chemistry": 89,
    "math": 93
  },
  {
    "student_id": 9,
    "name": "Rafi",
    "physics": 55,
    "chemistry": 60,
    "math": 58
  },
  {
    "student_id": 10,
    "name": "Tania",
    "physics": 77,
    "chemistry": 83,
    "math": 80
  }
]
const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
              <XAxis dataKey={"name"}></XAxis>
              <YAxis ></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;

