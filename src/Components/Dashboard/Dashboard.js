import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, [])
    console.log(chartsData);
    return (
        <div>
            <h2>This is Dashboard</h2>
            <LineChart width={600} height={350} data={chartsData}>
                <Line type={'monotone'} dataKey='revenue'></Line>
                <Line type={'monotone'} dataKey='sell' stroke="#82ca9d"></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment"></YAxis>
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
            </LineChart>

        </div>
    );
};

export default Dashboard;