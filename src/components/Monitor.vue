<template>
  <div id="mon-panel" class="row page-panel panel-active">
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> Cpu使用率
            </div>
            <!-- /.panel-heading -->
            <div id="cpuPrecent" class="panel-body">
              <cpu-usage :usage="cpuPrecent | floatReadable" />
            </div>
            <!-- /.panel-body -->
        </div>
    </div>
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 堆内存使用
                <div class="pull-right heap-wrapper">
                    <div class="btn-group">
                        Heap:
                        <span>{{heapUsed}}</span>/
                        <span>{{heapMax}}</span>&nbsp;&nbsp;
                        NonHeap:
                        <span>{{nonHeapUsed}}</span>/
                        <span>{{nonHeapMax}}</span>
                    </div>
                </div>
            </div>
            <div id="heapPrecent" class="panel-body">
              <mem-usage :usage="heapPrecent | floatReadable" />
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 监视
                <div class="pull-right">
                    <div class="btn-group">
                        运行时间:<span id="up-time"> {{uptime}}</span>
                    </div>
                </div>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover" style="margin-bottom: 0">
                        <tbody>
                            <tr>
                                <td>实时线程数:</td>
                                <td>{{threadCount}}</td>
                            </tr>
                            <tr>
                                <td>最大线程数:</td>
                                <td>{{threadPeak}}</td>
                            </tr>
                            <tr>
                                <td>共创建线程数:</td>
                                <td>{{threadCreated}}</td>
                            </tr>
                            <tr>
                                <td>Class Loaded:</td>
                                <td>{{totalLoadedClasses}}</td>
                            </tr>
                            <tr>
                                <td>GC Time:</td>
                                <td> {{gcTime}}</td>
                            </tr>
                            <tr>
                                <td>GC 执行次数:</td>
                                <td>{{gcRuns}}</td>
                            </tr>
                            <tr>
                                <td>Old Space:</td>
                                <td>{{oldSpaceUsed}} / {{oldSpaceCap}} / {{oldSpaceMax}}</td>
                            </tr>
                            <tr>
                                <td>Eden Space:</td>
                                <td>{{edenSpaceUsed}} / {{edenSpaceCap}} / {{edenSpaceMax}}</td>
                            </tr>
                            <tr>
                                <td>Survival from</td>
                                <td>{{sur1SpaceUsed}} / {{sur1SpaceCap}} / {{sur1SpaceMax}}</td>
                            </tr>
                            <tr>
                                <td>Survival to</td>
                                <td>{{sur2SpaceUsed}} / {{sur2SpaceCap}} / {{sur2SpaceMax}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.table-responsive -->
            </div>
            <!-- /.panel-body -->
        </div>
    </div>
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 实时堆内存
                <div class="pull-right">
                    <div class="btn-group">
                        <button type="button" @click="doGC" class="btn btn-default btn-xs btn-dogc">
                            &nbsp;Do GC&nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <heap-graph :old="oldSpacePrecent"
              :eden="edenSpacePrecent"
              :from="sur1SpacePrecent"
              :to="sur2SpacePrecent" />
        </div>
    </div>
</div>
</template>

<script>
// import echarts from 'echarts'
import cpuUsage from '@/components/monitor/CpuUsage'
import memUsage from '@/components/monitor/MemUsage'
import heapGraph from '@/components/monitor/HeapGraph'
export default {
  name: 'Monitor',
  computed: {
    vmId () {
      return this.$route.query.vmId
    }
  },
  data () {
    return {
      method: 'vm_mon_info',
      doGCMethod: 'vm_do_gc',
      timer: null,
      doGCLock: false,
      cpuPrecent: 0,
      heapPrecent: 0,
      heapUsed: '',
      heapMax: '',
      nonHeapUsed: '',
      nonHeapMax: '',
      uptime: '',
      threadCount: 0,
      threadPeak: 0,
      threadCreated: 0,
      totalLoadedClasses: 0,
      gcTime: '',
      gcRuns: 0,
      oldSpaceUsed: '',
      oldSpaceCap: '',
      oldSpaceMax: '',
      edenSpaceUsed: '',
      edenSpaceCap: '',
      edenSpaceMax: '',
      sur1SpaceUsed: '',
      sur1SpaceCap: '',
      sur1SpaceMax: '',
      sur2SpaceUsed: '',
      sur2SpaceCap: '',
      sur2SpaceMax: '',
      oldSpacePrecent: 0,
      edenSpacePrecent: 0,
      sur1SpacePrecent: 0,
      sur2SpacePrecent: 0
    }
  },
  components: {
    cpuUsage,
    memUsage,
    heapGraph
  },
  methods: {
    doGC () {
      if (this.doGCLock) {
        return false
      }
      this.doGCLock = true
      this.$http.get(this.$url + this.doGCMethod + '/' + this.vmId).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            alert('gc success')
          } else {
            alert(m.message)
            console.log(m.message)
          }
        } else {
          console.log('gc failed')
        }
        this.doGCLock = false
      })
    },
    updateData () {
      this.$http.get(this.$url + this.method + '/' + this.vmId).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            this.cpuPrecent = m.data.CPUPrecent
            this.heapPrecent = m.data.HeapPrecent
            this.heapUsed = m.data.HeapUsed
            this.heapMax = m.data.HeapMax
            this.nonHeapUsed = m.data.NonHeapUsed
            this.nonHeapMax = m.data.NonHeapMax
            this.uptime = m.data.UpTime
            this.threadCount = m.data.ThreadCount
            this.threadPeak = m.data.ThreadPeak
            this.threadCreated = m.data.ThreadCreated
            this.totalLoadedClasses = m.data.TotalLoadedClasses
            this.gcTime = m.data.GCTime
            this.gcRuns = m.data.GCRuns
            this.oldSpaceUsed = m.data.OldSpaceUsed
            this.oldSpaceCap = m.data.OldSpaceCap
            this.oldSpaceMax = m.data.OldSpaceMax
            this.edenSpaceUsed = m.data.EdenSpaceUsed
            this.edenSpaceCap = m.data.EdenSpaceCap
            this.edenSpaceMax = m.data.EdenSpaceMax
            this.sur1SpaceUsed = m.data.Sur1SpaceUsed
            this.sur1SpaceCap = m.data.Sur1SpaceCap
            this.sur1SpaceMax = m.data.Sur1SpaceMax
            this.sur2SpaceUsed = m.data.Sur2SpaceUsed
            this.sur2SpaceCap = m.data.Sur2SpaceCap
            this.sur2SpaceMax = m.data.Sur2SpaceMax
            this.oldSpacePrecent = m.data.OldSpacePrecent
            this.edenSpacePrecent = m.data.EdenSpacePrecent
            this.sur1SpacePrecent = m.data.Sur1SpacePrecent
            this.sur2SpacePrecent = m.data.Sur2SpacePrecent
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get jvm monitor info failed')
        }
      })
    }
  },
  filters: {
    floatReadable (val) {
      return val.toFixed(2)
    }
  },
  mounted () {
    this.updateData()
    this.timer = setInterval(() => {
      this.updateData()
    }, 1000)
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(this.timer)
    next()
  }
}
</script>

<style scoped>
</style>
