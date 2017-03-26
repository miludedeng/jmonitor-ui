<template>
    <div class="content">
        <div id="memGraph"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: {
    usage: String
  },
  data () {
    return {
      options: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [{
          name: 'Heap使用率',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: {
            value: this.usage,
            name: 'Heap'
          }
        }]
      }
    }
  },
  methods: {
    drawGraph (id) {
      this.chart = echarts.init(document.getElementById(id))
      this.chart.setOption(this.options)
    }
  },
  watch: {
    usage (newVal, oldVal) {
      this.options.series[0].data.value = newVal
      this.chart.setOption(this.options, true)
    }
  },
  mounted () {
    this.drawGraph('memGraph')
  }
}
</script>

<style scoped>
#memGraph {
    /*需要制定具体高度，以px为单位*/
    height: 300px;
}
</style>
