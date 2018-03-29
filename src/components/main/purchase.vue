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
        <section class="materialPurchase">
          <div class="title_materialPurchase">
            <h4>材料采购趋势分析</h4>
            <div class="title_decorate"></div>
          </div>
          <el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click">
            <span class="el-dropdown-link">
              {{selectMaterialText}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click='selectMaterialText = "全部项目"'>全部项目</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMaterialText = "内装项目"'>内装项目</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMaterialText = "外装项目"'>外装项目</span></el-dropdown-item>
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
        <section class="materialRate">
          <div class="title_materialRate">
            <h4>主材涨跌率</h4>
            <div class="title_decorate"></div>
          </div>
          <el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click">
            <span class="el-dropdown-link">
              {{selectMainMaterial}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click='selectMainMaterial = "全部材料";drawMaterialRateLine()'>全部材料</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMainMaterial = "玻璃";drawMaterialRateLine()'>玻璃</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMainMaterial = "大理石";drawMaterialRateLine()'>大理石</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="tips">
            <span>{{selectMainMaterial}}涨跌率19%</span>
          </div>
          <div class="charts">
            <div id="materialRate" style="height:100%;width:100%"></div>
          </div>
        </section>
        <section class="materialRanking">
          <div class="title_yieldRate">
            <h4>材料价格排名</h4>
            <div class="title_decorate"></div>
          </div>
          <el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click">
            <span class="el-dropdown-link">
              {{selectMaterialPrice}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click='selectMaterialPrice = "全部材料"'>全部材料</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMaterialPrice = "玻璃"'>玻璃</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectMaterialPrice = "大理石"'>大理石</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <table id="materialRanking">
            <thead>
              <tr>
                <th>事业部</th>
                <th>收益率</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in materialRankingData">
                <td>{{item.name}}</td>
                <td>{{item.percent}}%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="bottom_finance">
        <section class="supplierRanking">
          <div class="title_supplierRanking">
            <h4>供应商排名</h4>
            <div class="title_decorate"></div>
          </div>
          <el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click">
            <span class="el-dropdown-link">
              {{selectRanking}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click='selectRanking = "总体"'>总体</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectRanking = "事业部"'>事业部</span></el-dropdown-item>
              <el-dropdown-item><span @click='selectRanking = "分公司"'>分公司</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <table id="supplierRanking">
            <thead>
              <tr>
                <th></th>
                <th>供应商名称</th>
                <th>总供货额</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in supplierRankingData">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.sum}}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section class="purchaseRanking">
          <h4>主材各类材料采购总量排名</h4>
          <div class="title_decorate"></div>
          <table id="purchaseRanking">
            <thead>
              <tr>
                <th>材料名</th>
                <th>采购总量</th>
                <th>度量分析</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in purchaseRankingData">
                <td>{{item.name}}</td>
                <td>{{item.sum}}</td>
                <td>{{item.analysis}}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>
<script src="../../assets/js/purchase"></script>
<style lang="scss" scoped>
@import "../../assets/css/purchase"

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
