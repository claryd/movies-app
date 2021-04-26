import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOP_MOVIES = 'movie/top_rated';
const SEARCH = 'search/movie';
const GET = 'movie';
const API_KEY = 'bd1d945db4e876abf137e76cc51d08ef';

export default class ImdbService {

    /* 
     *  Fetch list of the top 100 imdb movies
     *  returns movieList[].
     */
    async getDiscoverMovieList() {
        let movieList = [];
        let pageNb = this.getPageAmount(100, 20);
        for (let i = 1; i <= pageNb; i++) {
            const response = await axios.get(`${BASE_URL}/${TOP_MOVIES}?api_key=${API_KEY}&page=${i}`);
            movieList = movieList.concat(response.data.results);
        }
        return movieList;
    }

    /* 
     *  Fetch autocomplete
     *  returns movieList[].
     */
    async search(params) {
        let movieList = [];
        const response = await axios.get(`${BASE_URL}/${SEARCH}?api_key=${API_KEY}&query=${params}`);
        movieList = response.data.results;
        return movieList;
    }

    /* 
     *  Fetch movie with provided id
     *  returns movie.
     */
    async getMovieById(id) {
        let movie;
        if (id) {
            const response = await axios.get(`${BASE_URL}/${GET}/${id}?api_key=${API_KEY}`);
            movie = response.data;
        }
        return movie;
    }

    /* 
     *  Get number of pages to fetch
     */
    getPageAmount(resultNb, elementNbByPage) {
        return resultNb / elementNbByPage;
    }

}