import axios from 'axios';

export function getStatisticsInfos(){
    return axios.get('/api/statistics/');
}
