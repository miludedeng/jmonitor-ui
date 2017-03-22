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
                        Heap: <span id="heap-used">28M</span>/<span id="heap-max">683M</span>&nbsp;&nbsp; NonHeap:
                        <span id="non-heap-used">29M</span>/<span id="non-heap-max">n/a</span>
                    </div>
                </div>
            </div>
            <!-- /.panel-heading -->
            <div id="heapPrecent" class="panel-body" style="height: 300px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1490192329884"><div style="position: relative; overflow: hidden; width: 423px; height: 270px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="423" height="270" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 423px; height: 270px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
            <!-- /.panel-body -->
        </div>
    </div>
    <div class="col-lg-6">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 监视
                <div class="pull-right">
                    <div class="btn-group">
                        运行时间:<span id="up-time"> 0:54m</span>
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
                                <td id="thr-count">14</td>
                            </tr>
                            <tr>
                                <td>最大线程数:</td>
                                <td id="thr-max-count">15</td>
                            </tr>
                            <tr>
                                <td>共创建线程数:</td>
                                <td id="total-thr-count">27</td>
                            </tr>
                            <tr>
                                <td>Class Loaded:</td>
                                <td id="class-loaded">3951</td>
                            </tr>
                            <tr>
                                <td>GC Time:</td>
                                <td id="gc-time"> 0: 0m</td>
                            </tr>
                            <tr>
                                <td>GC 执行次数:</td>
                                <td id="gc-runs">14</td>
                            </tr>
                            <tr>
                                <td>Old Space:</td>
                                <td id="old-mem">8M / 85M / 512M</td>
                            </tr>
                            <tr>
                                <td>Eden Space:</td>
                                <td id="eden-mem">20M / 25M / 255M</td>
                            </tr>
                            <tr>
                                <td>Survival from</td>
                                <td id="sur1-mem">0B / 9M / 85M</td>
                            </tr>
                            <tr>
                                <td>Survival to</td>
                                <td id="sur2-mem">160K / 512K / 85M</td>
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
export default {
  name: 'Monitor',
  data () {
    return {}
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
