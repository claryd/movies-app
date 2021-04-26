<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-Eflex align-center">Molteo movies</div>
      <v-spacer></v-spacer>
      <SearchMovie v-on:childToParent="onSearchMovie" />
    </v-app-bar>
    <v-main>
      <v-card v-if="selectedMovie">
        <v-card-title>
          <div>Title : {{selectedMovie.title}}</div>
          <v-spacer></v-spacer>
          <v-icon color="black" @click="close">mdi-close</v-icon>
        </v-card-title>

        <v-card-text>
          <div>Vote : {{selectedMovie.vote_average}}</div>
          <div>Overview : {{selectedMovie.overview}}</div>
        </v-card-text>
      </v-card>
      <MovieList v-else />
    </v-main>
  </v-app>
</template>


<script>
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import ImdbService from "./services/imdb.service";

export default {
  name: "App",

  components: {
    MovieList,
    SearchMovie
  },

  data: () => ({
    selectedMovie: null
  }),

  methods: {
    onSearchMovie(id) {
      if (id) {
        const imdbService = new ImdbService();
        imdbService
          .getMovieById(id)
          .then(movie => {
            this.selectedMovie = movie;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    close() {
      this.selectedMovie = null;
    }
  }
};
</script>
