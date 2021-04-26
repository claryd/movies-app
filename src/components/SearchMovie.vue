<template>
  <v-autocomplete
    clearable
    :loading="isLoading"
    :items="movies"
    :search-input.sync="search"
    hide-details
    item-text="title"
    item-value="id"
    label="Search for a movie..."
    solo-inverted
    v-on:click="getMovieDetail"
    v-on:keyup.enter="getMovieDetail"
    v-model="selectedMovieId"
  ></v-autocomplete>
</template>

<script>
import ImdbService from "../services/imdb.service";
export default {
  data: () => ({
    movies: [], // this is where all the movie data will be stored
    isLoading: true, // variable to determine if the results are still being fetched from the API
    search: null, // this is where the query will be stored
    selectedMovieId: null
  }),
  methods: {
    getMovies(params = "") {
      const imdbService = new ImdbService();
      imdbService
        .search(params)
        .then(movieList => {
          this.movies = movieList;
        })
        .catch(error => {
          console.log(error);
        });
      this.isLoading = false;
    },
    searchMovies(query) {
      this.getMovies(query);
    },
    getMovieDetail() {
      if (this.selectedMovieId) {
        this.$emit("childToParent", this.selectedMovieId);
      }
    },
    created() {}
  },
  watch: {
    search(query) {
      this.searchMovies(query);
    }
  }
};
</script>

<style>
</style>