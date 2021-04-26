<template>
  <div class="movie-list">
    <h1 class="movie-list__title">Top 100 movie list</h1>
    <v-expansion-panels>
      <MovieDetail v-for="movie in movieList" :key="movie.title" :movie="movie" />
    </v-expansion-panels>
  </div>
</template>

<script>
import MovieDetail from "./MovieDetail";
import ImdbService from "../services/imdb.service";
export default {
  name: "MovieList",
  components: {
    MovieDetail
  },
  data() {
    return {
      movieList: []
    };
  },

  async created() {
    const imdbService = new ImdbService();
    const movieList = await imdbService.getDiscoverMovieList();
    this.movieList = movieList;
  }
};
</script>

<style>
.movie-list__title {
  margin: 10px;
}
</style>