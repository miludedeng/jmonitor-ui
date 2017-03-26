<template>
    <div class="content">
        <div id="cpuGraph"></div>
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
          name: 'CPU使用率',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: {
            value: this.usage,
            name: 'CPU'
          }
        }]
      }
    }
  },
  methods: {
    // 绘图
    drawGraph (id) {
      // 绘图方法
      this.chart = echarts.init(document.getElementById(id))
      // 皮肤添加同一般使用方式
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
    this.drawGraph('cpuGraph')
  }
}
</script>

<style scoped>
#cpuGraph {
    /*需要制定具体高度，以px为单位*/
    height: 300px;
}
</style>
