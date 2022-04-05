import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, [])
    console.log(chartsData);
    return (
        <div className='dashboard heading'>
            <h2>Dashboard</h2>
            <div className='parent-charts'>
                <div>
                    <h3 className='heading'>All reports</h3>
                    <LineChart width={600} height={350} className="line-chart" data={chartsData}>
                        <Line type={'monotone'} dataKey='revenue'></Line>
                        <Line type={'monotone'} dataKey='sell' stroke="#82ca9d"></Line>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="investment"></YAxis>
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                    </LineChart>
                </div>
                <div>
                    <h3 className='heading'>Selling report</h3>
                    <BarChart
                        width={600}
                        height={350}
                        data={chartsData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="month" scale="point" padding={{ left: 25, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <Bar dataKey="revenue" fill="#8884d8" /> */}
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;