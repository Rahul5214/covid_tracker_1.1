const url = 'https://api.covid19india.org/data.json';

const getData = async () => {
    try {
        const response = await fetch(url);
        const { statewise } = await response.json();
        return statewise;
    } catch (error) {
        console.log(error);
    }
}


export default getData;