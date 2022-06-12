import data from './skill-data.js';

const SkillData = {
    async get() {
        // const endpoint  = './skill-data.json';
        // const options   = {}
        // const request   = new Request(endpoint, options);
        // const response  = await fetch(request);
        // const resJson   = await response.json();

        return data.data;
    }
}

export default SkillData;