import React, { useEffect, useState } from 'react';

const useChartData = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, [])
    return [chartsData, setChartsData];
};

export default useChartData;