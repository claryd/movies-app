<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{movie.title}}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <div>Vote : {{movie.vote_average}}</div>
      <div>Overview : {{movie.overview}}</div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["movie"]
};
</script>

<style>
</style>