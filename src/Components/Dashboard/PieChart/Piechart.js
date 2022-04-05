import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import useChartData from '../../Hooks/useChartData';

const Piechart = () => {
    const [chartsData, setChartsData] = useChartData();
    return (
        <div>
            <PieChart width={400} height={300}>
                <Pie data={chartsData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={chartsData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default Piechart;