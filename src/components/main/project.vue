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
      <div class="left_project">
        <section class="projectManagement">
          <h4>项目管理</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="map" style="height:100%;width:100%"></div>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="装修项目" name="first">
              <el-input placeholder="输入关键字进行过滤" v-model="filterText1"></el-input>
              <el-tree class="filter-tree" :data="TabData1" :props="defaultProps" accordion :filter-node-method="filterNode" ref="tree1"></el-tree>
            </el-tab-pane>
            <el-tab-pane label="设计项目" name="second">
              <el-input placeholder="输入关键字进行过滤" v-model="filterText2"></el-input>
              <el-tree class="filter-tree" :data="TabData2" :props="defaultProps" accordion :filter-node-method="filterNode" ref="tree2"></el-tree>
            </el-tab-pane>
            <el-tab-pane label="金融项目" name="third">
              <el-input placeholder="输入关键字进行过滤" v-model="filterText3"></el-input>
              <el-tree class="filter-tree" :data="TabData3" :props="defaultProps" accordion :filter-node-method="filterNode" ref="tree3"></el-tree>
            </el-tab-pane>
          </el-tabs>
        </section>
        <section class="projectProgress">
          <h4>项目进度</h4>
          <div class="title_decorate"></div>
          <article @mouseenter="toArticleDetail(index)" @mouseleave="toArticleDetail(-1)" v-for="(item,index) in projectData">
            <h5>{{item.projectName}}</h5>
            <div class="details" v-show="activeIndex===index">
              <div class="title">{{item.title}}</div>
              <p>负责人：{{item.leadingOfficial}}</p>
              <p>实施团队：{{item.implementationTeam}}</p>
              <p>客户名：{{item.customerName}}</p>
              <p>额度：{{item.quota}}</p>
            </div>
            <span v-show="item.percent==20" class="projectBidding">项目招标</span>
            <span v-show="item.percent==40" class="projectConstruction">项目施工</span>
            <span v-show="item.percent==60" class="projectAcceptance">项目验收</span>
            <span v-show="item.percent==80" class="projectReceipts">项目收款</span>
            <span v-show="item.percent==100" class="projectCompletion">项目完成</span>
            <el-progress :text-inside="false" :show-text="false" :stroke-width="14" :percentage="item.percent" :status="item.status"></el-progress>
          </article>
          <div class="scale"></div>
        </section>
      </div>
      <div class="right_project">
        <section class="realTimeInformation">
          <div class="title_realTimeInformation">
            <h4>实时资讯</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <div class="informationBox">
            <div class="informationTitle">
              <span>信息</span>
              <span>时间</span>
            </div>
            <div class="scrollBox">
              <ul id="con1" ref="con1" :class="{anim:animate==true}">
                <li v-for="item in informationData">
                  <span class="name">{{item.name}}</span>
                  <span class="date">{{item.date}}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="shutdownProject">
          <div class="title_shutdownProject">
            <h4>停工项目 TOP 5</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <table id="shutdownProject">
            <thead>
              <tr>
                <th>项目名称</th>
                <th>停工原因</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in shutdownProjectData">
                <td>{{item.name}}</td>
                <td>{{item.reason}}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="completedProject">
          <div class="title_completedProject">
            <h4>已竣工项目 TOP 5</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <table id="completedProject">
            <thead>
              <tr>
                <th>项目名称</th>
                <th>预算成本</th>
                <th>实际成本</th>
                <th>项目利润成本</th>
                <th>项目满意度</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in completedProjectData">
                <td>{{item.name}}</td>
                <td>{{item.budgetaryCost}}</td>
                <td :class="item.actualCost>item.budgetaryCost?'red':''">{{item.actualCost}}</td>
                <td>{{item.projectProfitCost}}</td>
                <td>{{item.projectSatisfaction}}%</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="constructionProject">
          <div class="title_constructionProject">
            <h4>正在施工项目 TOP 5</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <table id="constructionProject">
            <thead>
              <tr>
                <th>项目名称</th>
                <th>施工进展</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in constructionProjectData">
                <td>{{item.name}}</td>
                <td>{{item.percent}}%</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="winningRate">
          <div class="title_winningRate">
            <h4>中标率 TOP 5</h4>
            <div class="title_decorate"></div>
          </div>
          <span class="more">更多</span>
          <table id="winningRate">
            <thead>
              <tr>
                <th>分支机构</th>
                <th>中标率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in winningRateData">
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
<script src="../../assets/js/project"></script>
<style lang="scss" scoped>
@import "../../assets/css/project"

</style>
<style lang="scss">
.el-tabs {
  position: absolute;
  top: 60px;
  left: 20px;
  .el-tabs__nav {
    background: rgba(17, 46, 80, .9);
    padding-bottom: 4px;
    border-radius: 4px
  }
  .el-tabs__active-bar {
    bottom: 4px;
  }
  .el-tabs__item {
    color: #fff;
  }
  .el-tabs__header {
    margin-bottom: 10px
  }
  .el-tabs__content {
    width: 288px;
    overflow-x: hidden;
    border-radius: 4px
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  #tab-first,
  #tab-second,
  #tab-third {
    padding: 0 20px
  }
}

.el-tree {
  width: 320px;
  overflow-y: scroll;
  max-height: 286px;
  padding: 10px;
  background: rgba(17, 46, 80, .9);
  .el-tree-node:focus>.el-tree-node__content,
  .el-tree-node__content:hover {
    background: transparent;
  }
}

.el-progress {
  width: 80%;
  float: left;
  .el-progress-bar__outer {
    background: #091f39
  }
  .el-progress-bar__innerText {
    display: block;
  }
}

.el-input__inner {
  height: 30px;
  background: rgba(17, 46, 80, .9);
  border: 1px solid rgba(0, 220, 250, .6);
  color: #6af6cd;
  &:hover {
    border: 1px solid rgba(0, 220, 250, .6);
  }
  &::-webkit-input-placeholder {
    color: #999
  }
}

.red {
  color: rgb(238, 62, 65);
}

</style>
