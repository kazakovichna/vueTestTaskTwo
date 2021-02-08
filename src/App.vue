<template>
  <div id="app">
    <div class="header-div">
      <div class="home-btn">
        Home Button
      </div>
      <div class="profile-div">
        Name
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
      console.log('kek')
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
