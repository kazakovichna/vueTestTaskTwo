<script>
    import { Line } from 'vue-chartjs'

    export default {
        name: "BarChart",
        extends: Line,
        props: {
            chartData: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        mounted() {
            // да да я знаю)))
            setTimeout(() => {
                this.renderChart(this.chartData, this.options)
            }, 100)
        }
    }
</script>

<style scoped>

</style>
