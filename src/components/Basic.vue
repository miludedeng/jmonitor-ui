<template>
  <div id="basic-panel" class="row page-panel panel-active">
    <div class="col-lg-12 panel-body">
        <div class="panel panel-default active">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 基本信息
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body basic-info" style="height:145px"><div>
                    <strong>PID: </strong>
                    <label style="font-weight:400">60762</label>
                </div><div>
                    <strong>User: </strong>
                    <label style="font-weight:400">liujing</label>
                </div><div>
                    <strong>Vendor: </strong>
                    <label style="font-weight:400">JetBrains s.r.o</label>
                </div><div>
                    <strong>VmName: </strong>
                    <label style="font-weight:400">OpenJDK 64-Bit Server VM</label>
                </div><div>
                    <strong>VmVersion: </strong>
                    <label style="font-weight:400">1.8.0_112-release</label>
                </div></div>
            <!-- /.panel-body -->
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#args" data-toggle="tab" aria-expanded="true">Args</a></li>
                    <li class=""><a href="#vmargs" data-toggle="tab" aria-expanded="false">Jvm 参数</a></li>
                    <li class=""><a href="#sysprops" data-toggle="tab" aria-expanded="false">系统属性</a></li>
                </ul>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body tab-content">
                <div class="tab-pane fade active in" id="args" style="height: 300px;overflow: scroll;"><div>
                    <label style="font-weight:400">[UNKNOWN]</label>
                </div></div>
                <div class="tab-pane fade" id="vmargs" style="height: 300px;overflow: scroll;"><div>
                    <label style="font-weight:400">-Dfile.encoding=UTF-8</label>
                </div><div>
                    <label style="font-weight:400">-XX:+UseConcMarkSweepGC</label>
                </div><div>
                    <label style="font-weight:400">-XX:SoftRefLRUPolicyMSPerMB=50</label>
                </div><div>
                    <label style="font-weight:400">-ea</label>
                </div><div>
                    <label style="font-weight:400">-Dsun.io.useCanonCaches=false</label>
                </div><div>
                    <label style="font-weight:400">-Djava.net.preferIPv4Stack=true</label>
                </div><div>
                    <label style="font-weight:400">-XX:+HeapDumpOnOutOfMemoryError</label>
                </div><div>
                    <label style="font-weight:400">-XX:-OmitStackTraceInFastThrow</label>
                </div><div>
                    <label style="font-weight:400">-Xverify:none</label>
                </div><div>
                    <label style="font-weight:400">-XX:ErrorFile=/Users/liujing/java_error_in_idea_%p.log</label>
                </div><div>
                    <label style="font-weight:400">-XX:HeapDumpPath=/Users/liujing/java_error_in_idea.hprof</label>
                </div><div>
                    <label style="font-weight:400">-Xbootclasspath/a:../lib/boot.jar</label>
                </div><div>
                    <label style="font-weight:400">-Xms128m</label>
                </div><div>
                    <label style="font-weight:400">-Xmx750m</label>
                </div><div>
                    <label style="font-weight:400">-XX:ReservedCodeCacheSize=240m</label>
                </div><div>
                    <label style="font-weight:400">-XX:+UseCompressedOops</label>
                </div><div>
                    <label style="font-weight:400">-Djb.vmOptionsFile=/Applications/IntelliJ IDEA CE.app/Contents/bin/idea.vmoptions</label>
                </div><div>
                    <label style="font-weight:400">-Didea.java.redist=jdk-bundled</label>
                </div><div>
                    <label style="font-weight:400">-Didea.home.path=/Applications/IntelliJ IDEA CE.app/Contents</label>
                </div><div>
                    <label style="font-weight:400">-Didea.executable=idea</label>
                </div><div>
                    <label style="font-weight:400">-Didea.platform.prefix=Idea</label>
                </div><div>
                    <label style="font-weight:400">-Didea.paths.selector=IdeaIC2016.3</label>
                </div></div>
                <div class="tab-pane fade" id="sysprops" style="height: 300px;overflow: scroll;"><div>
                    <strong>__idea.mac.env.lock=</strong>
                    <label style="font-weight:400">unlocked</label>
                </div><div>
                    <strong>awt.toolkit=</strong>
                    <label style="font-weight:400">sun.lwawt.macosx.LWCToolkit</label>
                </div><div>
                    <strong>java.specification.version=</strong>
                    <label style="font-weight:400">1.8</label>
                </div><div>
                    <strong>sun.cpu.isalist=</strong>
                    <label style="font-weight:400"></label>
                </div><div>
                    <strong>sun.jnu.encoding=</strong>
                    <label style="font-weight:400">UTF-8</label>
                </div><div>
                    <strong>sun.arch.data.model=</strong>
                    <label style="font-weight:400">64</label>
                </div><div>
                    <strong>idea.fatal.error.notification=</strong>
                    <label style="font-weight:400">disabled</label>
                </div><div>
                    <strong>sun.font.fontmanager=</strong>
                    <label style="font-weight:400">sun.font.CFontManager</label>
                </div><div>
                    <strong>java.vendor.url=</strong>
                    <label style="font-weight:400">https://www.jetbrains.com/</label>
                </div><div>
                    <strong>apple.awt.fileDialogForDirectories=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>sun.io.useCanonCaches=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>sun.boot.library.path=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib</label>
                </div><div>
                    <strong>jna.tmpdir=</strong>
                    <label style="font-weight:400">/Users/liujing/Library/Caches/IdeaIC2016.3/tmp</label>
                </div><div>
                    <strong>sun.awt.exception.handler=</strong>
                    <label style="font-weight:400">com.intellij.openapi.application.impl.AWTExceptionHandler</label>
                </div><div>
                    <strong>com.apple.mrj.application.live-resize=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>java.specification.vendor=</strong>
                    <label style="font-weight:400">Oracle Corporation</label>
                </div><div>
                    <strong>java.home=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre</label>
                </div><div>
                    <strong>file.separator=</strong>
                    <label style="font-weight:400">/</label>
                </div><div>
                    <strong>line.separator=</strong>
                    <label style="font-weight:400">
  </label>
                </div><div>
                    <strong>java.vm.specification.vendor=</strong>
                    <label style="font-weight:400">Oracle Corporation</label>
                </div><div>
                    <strong>java.specification.name=</strong>
                    <label style="font-weight:400">Java Platform API Specification</label>
                </div><div>
                    <strong>idea.home.path=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents</label>
                </div><div>
                    <strong>sun.boot.class.path=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/resources.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/rt.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/sunrsasign.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/jsse.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/jce.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/charsets.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/jfr.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/classes:../lib/boot.jar</label>
                </div><div>
                    <strong>sun.management.compiler=</strong>
                    <label style="font-weight:400">HotSpot 64-Bit Tiered Compilers</label>
                </div><div>
                    <strong>java.runtime.version=</strong>
                    <label style="font-weight:400">1.8.0_112-release-408-b6</label>
                </div><div>
                    <strong>apple.awt.fullscreencapturealldisplays=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>user.name=</strong>
                    <label style="font-weight:400">liujing</label>
                </div><div>
                    <strong>idea.paths.selector=</strong>
                    <label style="font-weight:400">IdeaIC2016.3</label>
                </div><div>
                    <strong>sun.java2d.pmoffscreen=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>sun.awt.noerasebackground=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>sun.java2d.noddraw=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>file.encoding=</strong>
                    <label style="font-weight:400">UTF-8</label>
                </div><div>
                    <strong>jnidispatch.path=</strong>
                    <label style="font-weight:400">/Users/liujing/Library/Caches/IdeaIC2016.3/tmp/jna3648712967430557360.tmp</label>
                </div><div>
                    <strong>idea.popup.weight=</strong>
                    <label style="font-weight:400">heavy</label>
                </div><div>
                    <strong>jna.loaded=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.io.tmpdir=</strong>
                    <label style="font-weight:400">/var/folders/kc/vwt2bt6d3hlgwzwpczw328v40000gn/T/</label>
                </div><div>
                    <strong>java.version=</strong>
                    <label style="font-weight:400">1.8.0_112-release</label>
                </div><div>
                    <strong>idea.xdebug.key=</strong>
                    <label style="font-weight:400">-Xdebug</label>
                </div><div>
                    <strong>java.vm.specification.name=</strong>
                    <label style="font-weight:400">Java Virtual Machine Specification</label>
                </div><div>
                    <strong>idea.jre.check=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.awt.printerjob=</strong>
                    <label style="font-weight:400">sun.lwawt.macosx.CPrinterJob</label>
                </div><div>
                    <strong>sun.os.patch.level=</strong>
                    <label style="font-weight:400">unknown</label>
                </div><div>
                    <strong>java.library.path=</strong>
                    <label style="font-weight:400">/Users/liujing/Library/Java/Extensions:/Library/Java/Extensions:/Network/Library/Java/Extensions:/System/Library/Java/Extensions:/usr/lib/java:.</label>
                </div><div>
                    <strong>java.vendor=</strong>
                    <label style="font-weight:400">JetBrains s.r.o</label>
                </div><div>
                    <strong>io.netty.processId=</strong>
                    <label style="font-weight:400">53783</label>
                </div><div>
                    <strong>jna.encoding=</strong>
                    <label style="font-weight:400">UTF8</label>
                </div><div>
                    <strong>java.rmi.server.randomIDs=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.rmi.server.disableHttp=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>sun.io.unicode.encoding=</strong>
                    <label style="font-weight:400">UnicodeBig</label>
                </div><div>
                    <strong>io.netty.machineId=</strong>
                    <label style="font-weight:400">9e43d860</label>
                </div><div>
                    <strong>idea.executable=</strong>
                    <label style="font-weight:400">idea</label>
                </div><div>
                    <strong>idea.platform.prefix=</strong>
                    <label style="font-weight:400">Idea</label>
                </div><div>
                    <strong>java.util.concurrent.ForkJoinPool.common.parallelism=</strong>
                    <label style="font-weight:400">4</label>
                </div><div>
                    <strong>gopherProxySet=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>CVS_PASSFILE=</strong>
                    <label style="font-weight:400">~/.cvspass</label>
                </div><div>
                    <strong>file.encoding.pkg=</strong>
                    <label style="font-weight:400">sun.io</label>
                </div><div>
                    <strong>idea.smooth.progress=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>sun.awt.enableExtraMouseButtons=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.class.path=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/lib/bootstrap.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/extensions.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/util.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/jdom.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/log4j.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/trove4j.jar:/Applications/IntelliJ IDEA CE.app/Contents/lib/jna.jar:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/lib/tools.jar</label>
                </div><div>
                    <strong>java.vm.vendor=</strong>
                    <label style="font-weight:400">JetBrains s.r.o</label>
                </div><div>
                    <strong>idea.java.redist=</strong>
                    <label style="font-weight:400">jdk-bundled</label>
                </div><div>
                    <strong>jb.vmOptionsFile=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/bin/idea.vmoptions</label>
                </div><div>
                    <strong>swing.bufferPerWindow=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>user.timezone=</strong>
                    <label style="font-weight:400">Asia/Harbin</label>
                </div><div>
                    <strong>idea.no.launcher=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>os.name=</strong>
                    <label style="font-weight:400">Mac OS X</label>
                </div><div>
                    <strong>java.vm.specification.version=</strong>
                    <label style="font-weight:400">1.8</label>
                </div><div>
                    <strong>apple.laf.useScreenMenuBar=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>user.country=</strong>
                    <label style="font-weight:400">CN</label>
                </div><div>
                    <strong>sun.cpu.endian=</strong>
                    <label style="font-weight:400">little</label>
                </div><div>
                    <strong>user.home=</strong>
                    <label style="font-weight:400">/Users/liujing</label>
                </div><div>
                    <strong>user.language=</strong>
                    <label style="font-weight:400">zh</label>
                </div><div>
                    <strong>idea.cycle.buffer.size=</strong>
                    <label style="font-weight:400">1024</label>
                </div><div>
                    <strong>log4j.defaultInitOverride=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.awt.graphicsenv=</strong>
                    <label style="font-weight:400">sun.awt.CGraphicsEnvironment</label>
                </div><div>
                    <strong>apple.awt.graphics.UseQuartz=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>idea.max.intellisense.filesize=</strong>
                    <label style="font-weight:400">2500</label>
                </div><div>
                    <strong>sun.java2d.d3d=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>java.net.preferIPv4Stack=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>path.separator=</strong>
                    <label style="font-weight:400">:</label>
                </div><div>
                    <strong>jna.nosys=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>os.version=</strong>
                    <label style="font-weight:400">10.12</label>
                </div><div>
                    <strong>java.endorsed.dirs=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/endorsed</label>
                </div><div>
                    <strong>java.runtime.name=</strong>
                    <label style="font-weight:400">OpenJDK Runtime Environment</label>
                </div><div>
                    <strong>sun.nio.ch.bugLevel=</strong>
                    <label style="font-weight:400"></label>
                </div><div>
                    <strong>jna.platform.library.path=</strong>
                    <label style="font-weight:400">/usr/lib:/usr/lib</label>
                </div><div>
                    <strong>java.vm.name=</strong>
                    <label style="font-weight:400">OpenJDK 64-Bit Server VM</label>
                </div><div>
                    <strong>java.vendor.url.bug=</strong>
                    <label style="font-weight:400">https://youtrack.jetbrains.com</label>
                </div><div>
                    <strong>java.util.concurrent.ForkJoinPool.common.threadFactory=</strong>
                    <label style="font-weight:400">com.intellij.concurrency.IdeaForkJoinWorkerThreadFactory</label>
                </div><div>
                    <strong>user.dir=</strong>
                    <label style="font-weight:400">/Applications/IntelliJ IDEA CE.app/Contents/bin</label>
                </div><div>
                    <strong>os.arch=</strong>
                    <label style="font-weight:400">x86_64</label>
                </div><div>
                    <strong>io.netty.serviceThreadPrefix=</strong>
                    <label style="font-weight:400">Netty </label>
                </div><div>
                    <strong>idea.dynamic.classpath=</strong>
                    <label style="font-weight:400">false</label>
                </div><div>
                    <strong>java.vm.info=</strong>
                    <label style="font-weight:400">mixed mode</label>
                </div><div>
                    <strong>java.vm.version=</strong>
                    <label style="font-weight:400">25.112-b6</label>
                </div><div>
                    <strong>java.rmi.server.hostname=</strong>
                    <label style="font-weight:400">localhost</label>
                </div><div>
                    <strong>idea.max.content.load.filesize=</strong>
                    <label style="font-weight:400">20000</label>
                </div><div>
                    <strong>java.ext.dirs=</strong>
                    <label style="font-weight:400">/Users/liujing/Library/Java/Extensions:/Applications/IntelliJ IDEA CE.app/Contents/jdk/Contents/Home/jre/lib/ext:/Library/Java/Extensions:/Network/Library/Java/Extensions:/System/Library/Java/Extensions:/usr/lib/java</label>
                </div><div>
                    <strong>apple.awt.UIElement=</strong>
                    <label style="font-weight:400">true</label>
                </div><div>
                    <strong>java.class.version=</strong>
                    <label style="font-weight:400">52.0</label>
                </div></div>
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic',
  data () {
    return {}
  }
}
</script>

<style scoped>
.panel-body {
  padding: 0 15px
}
</style>
