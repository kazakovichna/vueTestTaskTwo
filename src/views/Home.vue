<template>
  <div class="home">
    <div class="info-div">
      <div class="name-div">
        <p style="opacity: 0.7">name:  </p><p>{{this.fileJson.user.name}}</p>
        <p>surname:  </p><p>{{this.fileJson.user.surname}}</p>
      </div>
      <div class="name-div">
        <p>email:  </p><p>{{this.fileJson.user.email}}</p>
        <p>token:  </p><p>{{this.fileJson.user.token}}</p>
      </div>
    </div>
    <div class="meeting-div">
      <div class="go_to_meeting waves-effect waves-light"
           @click="goToList()"
      >
        <p>Meeting List</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    fileJson: {}
  }),
  computed: {
    ...mapGetters([
            'getFileJson'
    ])
  },
  methods: {
    goToList() {
      this.$router.push('/meetingList')
    }
  },
  mounted() {
    this.fileJson = this.getFileJson
  }
}
</script>

<style>
  .home {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
  }
  .info-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .name-div {
    word-break: break-word;
    margin: 30px;
    width: 50%;
    padding: 20px;
    font-family: "Lucida Console", sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: black;
    opacity: 0.9;

    background-color: #f0f8ff;
    box-shadow: 0 4px 8px -3px #5a5a5a;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .name-div p {

  }
  .meeting-div {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .go_to_meeting {
    width: 20%;
    height: 60px;

    font-size: 20px;
    font-family: "Lucida Console", sans-serif;

    color: black;
    background-color: #f0f8ff;
    border-radius: 4px;
    box-shadow: 0 0 2px #000000;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease;
  }
  .go_to_meeting:hover {

    background-color: #414f52;
    color: white;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    box-shadow: none;
  }
  .go_to_meeting p {
    margin: 0!important;
  }
</style>
