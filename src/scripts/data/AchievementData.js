import data from './achievement-data.js';

const AchivementData = {
    async get() {
        // const endpoint  = './achivement-data.json';
        // const options   = {}
        // const request   = new Request(endpoint, options);
        // const response  = await fetch(request);
        // const resJson   = await response.json();

        return data.data;
    }
}

export default AchivementData;