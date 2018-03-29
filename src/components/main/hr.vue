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
      <div class="left_hr">
        <section class="education">
          <h4>学历程度发展</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="education" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="sourceArea">
          <h4>来源地结构</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="sourceArea" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="turnoverRate">
          <h4>人员离职率</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="turnoverRate" style="height:100%;width:100%"></div>
          </div>
        </section>
      </div>
      <div class="center_hr">
        <section class="sexRatio">
          <h4>男女比例</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="sexRatio" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="ageStructure">
          <h4>年龄结构</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="ageStructure" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="personnelComparison">
          <h4>人员对比</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="personnelComparison" style="height:100%;width:100%"></div>
          </div>
        </section>
      </div>
      <div class="right_hr">
        <section class="seniorityStructure">
          <h4>工龄结构</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="seniorityStructure" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="netProfit">
          <h4>人均净利润</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="netProfit" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="perCapita">
          <h4>人均盈利能力</h4>
          <div class="title_decorate"></div>
          <table id="perCapita">
            <thead>
              <tr>
                <th>事业部</th>
                <th>盈利率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in perCapitaData">
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
<script src="../../assets/js/hr"></script>
<style lang="scss" scoped>
@import "../../assets/css/hr"

</style>
