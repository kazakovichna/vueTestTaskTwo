<template>
    <div class="wrapper">
        <div class="meet-info">
            <div class="meet-name" style="font-size: 26px">
                {{ meetingData.meeting_name }}
            </div>
            <div class="meet-name">
               Meeting Time: {{ meetingData.start_datetime }}
            </div>
            <div class="meet-name">
               Meeting Duration: {{ meetingData.duration }}
            </div>
            <div class="meet-name">
                Meeting Max Attendance: {{ meetingData.max_attendance }}
            </div>
        </div>
        <div class="meet-info">
            <BarChart :chartData="chartData" :options="options"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from  'vuex'
import BarChart from "../components/BarChart";

export default {
    name: "currentMeet",
    components: {BarChart},
    data: () => ({
        meetingId: null,
        meetingData: {},
        chartData: {
            labels: [],
            datasets: [
                {
                    label: 'Attendance',
                    borderColor: '#77b7cd',
                    pointBackgroundColor: '#77b7cd',
                    pointRadius: 4,
                    data: []
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
    methods: {
        ...mapActions([
            'fetchJsonData'
        ])
    },
    computed: {
        ...mapGetters([
            'getFileJson'
        ])
    },
    mounted() {
        this.meetingId = this.$route.params.id
        this.meetingData = this.getFileJson.meetings[this.meetingId]
        // console.log(this.meetingData.attendance)
        this.meetingData.attendance.forEach(item => {
            this.chartData.labels.push(item.time)
            this.chartData.datasets[0].data.push(item.cnt_people)
        })
    }
}
</script>

<style scoped>
.wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .meet-info {
        width: 90%;
        border-radius: 2px;
        padding: 20px;
        background-color: #f0f8ff;
        box-shadow: 0 4px 8px -3px #5a5a5a;
        margin-right: 20px;
        font-family: "Lucida Console", sans-serif;
        color: #414f52;
        font-weight: 900;
        font-size: 20px;
    }
    .meet-name {
        margin: 10px;
    }
</style>
