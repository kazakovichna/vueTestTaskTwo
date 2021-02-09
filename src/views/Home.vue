<template>
  <div class="home">
    <div class="info-div">
      <div class="inf-div">
        <div style="width: 100%">
          <div class="name-div"
               v-if="editShow !== 'name'"
          >
            <p>name:  {{fileJson.user.name}}</p>
            <p class="material-icons"
               style="cursor: pointer"
               @click="(editShow = 'name')"
            >create</p>
          </div>
          <div class="edit-name-div"
               v-else-if="editShow === 'name'"
          >
            <input type="text"
                   class="edit-input"
                   placeholder="Enter name"
                   v-model="fileJson.user.name">
            <div class="btn"
                 @click="applyData('name')"
            >
              <p>Apply</p>
            </div>
          </div>
        </div>

        <div style="width: 100%">
          <div class="name-div"
               v-if="editShow !== 'surname'"
          >
            <p>surname:  {{fileJson.user.surname}}</p>
            <p class="material-icons"
               style="cursor: pointer"
               @click="(editShow = 'surname')"
            >create</p>
          </div>
          <div class="edit-name-div"
               v-else-if="editShow === 'surname'"
          >
            <input type="text"
                   class="edit-input"
                   placeholder="Enter surname"
                   v-model="fileJson.user.surname">
            <div class="btn"
                 @click="applyData('surname')"
            >
              <p>Apply</p>
            </div>
          </div>
        </div>
      </div>
      <div class="inf-div">

        <div style="width: 100%">
          <div class="name-div"
               v-if="editShow !== 'email'"
          >
            <p>email:  {{fileJson.user.email}}</p>
            <p class="material-icons"
               style="cursor: pointer"
               @click="(editShow = 'email')"
            >create</p>
          </div>
          <div class="edit-name-div"
               v-else-if="editShow === 'email'"
          >
            <input type="text"
                   class="edit-input"
                   placeholder="Enter email"
                   v-model="fileJson.user.email">
            <div class="btn"
                 @click="applyData('email')"
            >
              <p>Apply</p>
            </div>
          </div>
        </div>

        <div style="width: 100%">
          <div class="name-div"
               v-if="editShow !== 'token'"
          >
            <p>token:  {{fileJson.user.token}}</p>
            <p class="material-icons"
               style="cursor: pointer"
               @click="(editShow = 'token')"
            >create</p>
          </div>
          <div class="edit-name-div"
               v-else-if="editShow === 'token'"
          >
            <input type="text"
                   class="edit-input"
                   placeholder="Enter token"
                   v-model="fileJson.user.token">
            <div class="btn"
                 @click="applyData('token')"
            >
              <p>Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="meeting-div">
      <div class="go_to_meeting waves-effect waves-light"
           @click="$router.push('/meetingList')"
      >
        <p>Meeting List</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    fileJson: {},
    editShow: ''
  }),
  computed: {
    ...mapGetters([
      'getFileJson'
    ])
  },
  methods: {
    ...mapActions([
            'applyDataAct'
    ]),
    editData(id) {
      this.editShow = id
    },
    applyData() {
      this.editShow = ''
      this.applyDataAct(this.fileJson)
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
  .inf-div {
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
  .name-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    box-shadow: none;
  }
  .go_to_meeting p {
    margin: 0!important;
  }
  .edit-name-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .edit-input {
    height: 50px;
    outline: none;

    font-size: 18px;
    color: #414f52;

    border-radius: 4px;
    border-color: #414f52;
    border-style: solid;
    border-width: 1px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 80px;
    cursor: pointer;
    background-color: azure;
    border-radius: 4px;
    border-color: #414f52;
    border-style: solid;
    border-width: 1px;
    transition: all 500ms ease;
  }
  .btn:hover {
    background-color: #414f52;
    color: white;
    border-radius: 4px;
    border-color: white;
    border-style: solid;
    border-width: 1px;
  }
</style>
