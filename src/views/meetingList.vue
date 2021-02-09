<template>
    <div class="wrapper">
        <div class="meeting-label">
            Your Meetings
        </div>
        <div class="meeting-items">
            <div class="meeting-item"
                 v-for="item in this.meetingMas"
                 :key="item.meeting_name"
                 @click="goToCurrentMeeting(item)"
            >
                <div class="meeting-item-name">
                    {{ item.meeting_name }}
                </div>
                <div class="meeting-item-time">
                    {{ item.start_datetime }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

export default {
    name: "meetingList",
    data: () => ({
        meetingMas: []
    }),
    computed: {
        ...mapGetters([
            'getFileJson'
        ])
    },
    methods: {
        goToCurrentMeeting(item) {
            this.$router.push(`/meetingList/${this.meetingMas.indexOf(item)}`)
        }
    },
    mounted() {
        this.meetingMas = this.getFileJson.meetings
    }

}
</script>

<style scoped>
    .wrapper {
        padding-bottom: 40px;
        min-height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .meeting-label {
        width: 100%;
        padding: 20px 0 5px 40px;

        font-family: "Lucida Console", sans-serif;
        font-weight: 900;
        font-size: 26px;
        color: #414f52;
    }
    .meeting-items {
        width: 95%;

        font-family: "Lucida Console", sans-serif;
        font-weight: 900;
        font-size: 20px;
        color: #414f52;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .meeting-item {
        border-radius: 2px;
        padding: 20px;
        background-color: #f0f8ff;
        box-shadow: 0 4px 8px -3px #5a5a5a;
        margin-right: 20px;
        transition: all 500ms ease;
    }
    .meeting-item:hover {
        background-color: #414f52;
        color: white;
        box-shadow: none;
    }
</style>
