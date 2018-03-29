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
      <div class="left">
        <section class="profitAndLoss">
          <h4>整体盈亏分析</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="profitAndLoss" style="height:90%;width:100%"></div>
          </div>
        </section>
        <section class="newCustomers">
          <h4>新增客户排名</h4>
          <div class="title_decorate"></div>
          <table id="newCustomers">
            <thead>
              <tr>
                <th></th>
                <th>区域</th>
                <th>分支机构</th>
                <th>当前</th>
                <th>上月</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in newCustomersData">
                <td>{{index+1}}</td>
                <td>{{item.area}}</td>
                <td>{{item.name}}</td>
                <td>{{item.currentCount}}个</td>
                <td>{{item.lastCount}}个</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="annualTarget">
          <h4>年度目标</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="target" style="height:20vh;width:100%"></div>
          </div>
          <div id="rotate"></div>
          <div class="legend">
            <small>已完成项目量</small>
            <small>正在施工项目量</small>
            <small>未完成项目量</small>
          </div>
          <div class="Day">剩余
            <span class="count">{{daysRemaining}}</span>&nbsp;天</div>
        </section>
      </div>
      <div class="center">
        <section class="groupIndex">
          <h4>集团指标</h4>
          <div class="title_decorate"></div>
          <ul>
            <li>
              <div class="title">项目指标</div>
              <div class="charts">
                <div id="project" style="height:65%;width:65%"></div>
              </div>
              <div class="data">
                <p>计划完成：
                  <span>30,000,000</span>
                </p>
                <p>实际完成：
                  <span style="color: #00fb41">20,000,000</span>
                </p>
                <p>同比上月：
                  <span style="color: #00fb41">上升20%</span>
                </p>
              </div>
            </li>
            <li>
              <div class="title">产值指标</div>
              <div class="charts">
                <div id="outPutValue" style="height:65%;width:65%"></div>
              </div>
              <div class="data">
                <p>计划完成：
                  <span>30,000,000</span>
                </p>
                <p>实际完成：
                  <span>10,000,000</span>
                </p>
                <p>同比上月：
                  <span>0%</span>
                </p>
              </div>
            </li>
            <li>
              <div class="title">回笼指标</div>
              <div class="charts">
                <div id="steamAgain" style="height:65%;width:65%"></div>
              </div>
              <div class="data">
                <p>计划完成：
                  <span>30,000,000</span>
                </p>
                <p>实际完成：
                  <span style="color: #ee3e41">15,000,000</span>
                </p>
                <p>同比上月：
                  <span style="color: #ee3e41">下降20%</span>
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section class="domesticRanking">
          <div class="title_map">
            <h4>工程一览</h4>
            <div class="title_decorate"></div>
          </div>
          <div class="charts">
            <div id="map" style="height:100%;width:98%"></div>
          </div>
          <ul>
            <div class="aside_title">TOP 10</div>
            <div class="aside_subTitle">各事业部分支指标完成百分比</div>
            <li v-for="item in undertakingsIndexData">
              <span class="name">{{item.name}}</span>
              <span class="percent">{{item.percent}}%</span>
            </li>
          </ul>
        </section>
        <section class="purchaseMaterial">
          <div class="title_material">
            <h4>材料采购趋势</h4>
            <div class="title_decorate"></div>
          </div>
          <el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click">
            <span class="el-dropdown-link">
              {{selectText}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click='selectText = "全部项目"'>全部项目</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectText = "内装项目"'>内装项目</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectText = "外装项目"'>外装项目</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="tips">
            <span>主材涨跌率10%</span>
            <span>辅材涨跌率12%</span>
          </div>
          <div class="charts">
            <div id="purchaseMaterial" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="biddingAnalysis">
          <h4>投标分析</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="liquidFillSphere" style="height:100%;width:100%"></div>
          </div>
          <div class="data">
            <p>投标率：50%</p>
            <small>共投标：1022个</small>
            <br>
            <small>中标：1000个</small>
            <br>
            <small>中标金额：10,000,000元</small>
          </div>
        </section>
      </div>
      <div class="right">
        <section class="personnelComparison">
          <h4>人员对比</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="personnelComparison" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="projectStatus">
          <h4>项目状态</h4>
          <div class="title_decorate"></div>
          <div class="charts">
            <div id="projectStatus" style="height:100%;width:60%"></div>
          </div>
          <div class="tips">
            <span>
              <small class="blue"></small>已竣工项目：3821个</span>
            <br>
            <span>
              <small class="yellow"></small>正在施工项目：5164个</span>
            <br>
            <span>
              <small class="red"></small>停工项目：1023个</span>
          </div>
        </section>
        <section class="information">
          <div class="title_information">
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
      </div>
    </div>
  </div>
</template>
<script src="../../assets/js/index"></script>
<style lang="scss" scoped>
@import "../../assets/css/index"

</style>
<style lang="scss">
.el-dropdown {
  width: 100px;
  border: 1px solid #00d9fb;
  border-radius: 4px;
  padding: 2px 10px;
  margin-right: 0 !important;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  >* {
    color: #00d9fb !important;
    outline: none;
  }
}

.el-dropdown-menu {
  width: 120px;
  background: #112e50;
  border: 1px solid #00d9fb;
  li {
    transition: all 0.3s;
    &:hover {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background: #1a4373;
}

.el-popper[x-placement^=bottom] {
  margin-top: 8px;
  .popper__arrow::after {
    display: none;
  }
}

.el-dropdown-link {
  margin-right: 0 !important;
  width: 100%;
  display: block;
  i {
    float: right;
    margin-top: 3px
  }
}

.popper__arrow {
  border-bottom-color: #00d9fb !important
}

</style>
