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
        <section class="fundAnalysis">
          <h4>财务资金分析</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="fundAnalysis" style="height:100%;width:50%"></div>
            <div id="fundAnalysisPie" style="height:100%;width:50%"></div>
          </div>
        </section>
        <section class="yieldRate">
          <div class="title_yieldRate">
            <h4>事业部/子公司收益率TOP10</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <table id="yieldRate">
            <thead>
              <tr>
                <th>事业部</th>
                <th>收益率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in yieldRateData">
                <td>{{item.name}}</td>
                <td>{{item.percent}}%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="bottom_finance">
        <section class="operatingCosts">
          <h4>运营成本</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="operatingCosts" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="detail">
          <h4>收支明细</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="detail" style="height:100%;width:100%"></div>
          </div>
          <div class="data">
            <ul>
              <li v-for="item in detailData">
                <h2>{{item.value}}</h2>
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script src="../../assets/js/finance"></script>
<style lang="scss" scoped>
@import "../../assets/css/finance"

</style>
