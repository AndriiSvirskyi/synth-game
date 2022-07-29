import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import style from './BandWidth.module.css'

const data = [
  {
    "name": "11:53:19 a.m.",
    "uv": 0,
    "pv": 0,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .5,
    "pv": .4,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .7,
    "pv": .6,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": 1.1,
    "pv": 1.3,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .8,
    "pv": 1.1,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .6,
    "pv": .4,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .8,
    "pv": .2,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .6,
    "pv": .1,
  },
  {
    "name": "11:53:19 a.m.",
    "uv": .8,
    "pv": .1,
  },
  {
    "name": "11:59:29 a.m.",
    "uv": .6,
    "pv": .2,
  },
  {
    "name": "01:05:19 p.m.",
    "uv": .5,
    "pv": .7,
  }
]

export default function BandWidth() {
  return (
    <div className={style.container}>
      <h2 className={style.label}><span className={style.label_strong}>BANDWIDTH</span> OVER TIME</h2>
      <ResponsiveContainer className={style.chart} width="" height={400}>
        <AreaChart height={300} data={data} 
          margin={{ top: 20, right: 20, left: 0, bottom: 70 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis tickLine={false} tick={{ fill: '#687388', fontSize: 16, fontFamily: 'Plus Jakarta Sans' }} angle={-39} dataKey="name" textAnchor="end" />
          <YAxis unit=' Mb/s' dx={-5} tick={{ fill: '#687388', fontSize: 16, fontFamily: 'Plus Jakarta Sans' }} width={90} />
          <CartesianGrid  stroke="rgba(104, 115, 136, 0.1)" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
