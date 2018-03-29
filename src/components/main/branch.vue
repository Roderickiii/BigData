<template>
  <div class="bg">
    <header>
      <span class="time">
            <h1>{{currentTime}}</h1>
            <h3>{{currentDate}}</h3>
        </span>
      <router-link id="logo" to="/" exact>LOGO</router-link>
      <h1 class="title">信息化建设智能决策平台</h1>
      <nav>
        <router-link to="/" exact>
          <small>首页</small>
        </router-link>
        <router-link to="/project">
          <small>项目</small>
        </router-link>
        <router-link to="/finance">
          <small>财务</small>
        </router-link>
        <router-link to="/purchase">
          <small>采购</small>
        </router-link>
        <router-link to="/hr">
          <small>HR</small>
        </router-link>
        <router-link to="/branch">
          <small>分支机构</small>
        </router-link>
      </nav>
    </header>
    <div class="main">
      <div class="top_finance">
        <section class="projectIndicators">
          <h4>项目指标</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="projectIndicators" style="height:100%;width:100%"></div>
          </div>
          <div class="count"><span>目标</span>&nbsp;2000&nbsp;<span>个</span></div>
          <div class="legend">
            <small>已完成项目量<br>1000个</small>
            <small>正在施工项目量<br>400个</small>
            <small>未完成项目量<br>600个</small>
          </div>
        </section>
        <section class="capitalIncome">
          <h4>资金收入</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="capitalIncome" style="height:100%;width:100%"></div>
          </div>
        </section>
      </div>
      <div class="bottom_finance">
        <section class="staffChange">
          <h4>人员变动</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="staffChange" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="projectYield">
          <h4>项目收益率</h4>
          <div class="title_decorate"></div>
          <table id="projectYield">
            <thead>
              <tr>
                <th>项目名称</th>
                <th>收益率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projectYieldData">
                <td>{{item.name}}</td>
                <td>{{item.percent}}%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>
<script src="../../assets/js/branch"></script>
<style lang="scss" scoped>
@import "../../assets/css/branch"

</style>
