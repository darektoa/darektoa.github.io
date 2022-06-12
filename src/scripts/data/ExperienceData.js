import data from './experience-data.js';

const ExperienceData = {
    async get() {
        // const endpoint  = './experience-data.json';
        // const options   = {}
        // const request   = new Request(endpoint, options);
        // const response  = await fetch(request);
        // const resJson   = await response.json();

        return data.data;
    }
}

export default ExperienceData;