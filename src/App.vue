<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <div class="header-div">
      <div class="home-btn"
           style="cursor: pointer"
           @click="$router.push('/')"
      >
        <span class="material-icons">
          home
        </span>
      </div>
      <div class="profile-div">
        {{ $store.getters.getFileJson.user.name }}
      </div>
    </div>
    <div class="body-div">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
              'fetchJsonData'
      ])
    },
    mounted() {
      this.fetchJsonData()
    }
  }
</script>
<style>
  .header-div {
    padding: 20px;
    height: 40px;
    background-color: #414f52;
    box-shadow: 0 0 2px -4px #000000;

    color: white;
    font-family: "Lucida Console", sans-serif;
    font-size: 22px;
    font-weight: 900;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body-div {
    background-color: #b0bcbd;
  }
</style>
