import data from './project-data.js';

const ProjectData = {
    async get() {
        // const endpoint  = './project-data.json';
        // const options   = {}
        // const request   = new Request(endpoint, options);
        // const response  = await fetch(request);
        // const resJson   = await response.json();

        return data.data;
    }
}

export default ProjectData;