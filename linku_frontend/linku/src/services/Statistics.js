import axios from 'axios';

export function getStatisticsInfos(){
    return axios.get('/statistics/');
}
