<template>
  <div id="mon-panel" class="row page-panel panel-active">
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> Cpu使用率
            </div>
            <!-- /.panel-heading -->
            <div id="cpuPrecent" class="panel-body" style="height: 300px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1490192329883"><div style="position: relative; overflow: hidden; width: 423px; height: 270px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="423" height="270" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 423px; height: 270px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
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
            <div id="heapPrecent" class="panel-body" style="height: 300px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1490192329884"><div style="position: relative; overflow: hidden; width: 423px; height: 270px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="423" height="270" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 423px; height: 270px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 监视
                <div class="pull-right">
                    <div class="btn-group">
                        运行时间:<span id="up-time"> {{UpTime}}</span>
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
                        <button type="button" class="btn btn-default btn-xs btn-dogc">
                            &nbsp;Do GC&nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body" style="height:401px">
                <div class="col-md-8">
                    <fieldset class="sp-fs">
                        <legend>Old</legend>
                        <div id="old-top" style="height: 312.3px; background-color: rgb(238, 238, 238);"></div>
                        <div id="old-foot" style="height: 34.7px; background-color: rgb(104, 125, 21);"></div>
                    </fieldset>
                </div>
                <div class="col-md-4">
                    <div>
                        <fieldset class="sp-fs">
                            <legend>Eden</legend>
                            <div id="eden-top" style="height: 41px; background-color: rgb(238, 238, 238);"></div>
                            <div id="eden-foot" style="height: 164px; background-color: rgb(243, 178, 32);"></div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset class="sp-fs">
                            <legend>Sur from</legend>
                            <div id="from-top" style="height:48px;background-color: #eee;"></div>
                            <div id="from-foot" style="height:0px;background-color: #d66312;"></div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset class="sp-fs">
                            <legend>Sur to</legend>
                            <div id="to-top" style="height: 33.12px; background-color: rgb(238, 238, 238);"></div>
                            <div id="to-foot" style="height: 14.88px; background-color: rgb(214, 99, 18);"></div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <!-- /.panel-body -->
        </div>
    </div>
</div>
</template>

<script>
// import echarts from 'echarts'
export default {
  name: 'Monitor',
  data () {
    return {
      heapUsed: '17M',
      heapMax: '683M',
      nonHeapUsed: '31M',
      nonHeapMax: 'n/a',
      threadCount: 17,
      threadPeak: 17,
      threadCreated: 306,
      totalLoadedClasses: 3999,
      gcTime: '0: 0m',
      gcRuns: 375,
      oldSpaceUsed: '4M',
      oldSpaceCap: '85M',
      oldSpaceMax: '512M',
      edenSpaceUsed: '16M',
      edenSpaceCap: '23M',
      edenSpaceMax: '255M',
      sur1SpaceUsed: '0B',
      sur1SpaceCap: '512K',
      sur1SpaceMax: '85M',
      sur2SpaceUsed: '96K',
      sur2SpaceCap: '512K',
      sur2SpaceMax: '85M'
    }
  }
}
</script>

<style scoped>
.sp-fs {
    border: 2px solid #bbb;
    height: 100%;
}
.sp-fs legend {
    font-size: 14px;
    margin-bottom: 0px;
}
</style>
