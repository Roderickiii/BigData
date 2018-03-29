import echarts from "echarts";
export default {
    data() {
        return {
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            purchaseMaterial: null,
            purchaseMaterialData: [],
            materialRate: null,
            materialRateData: [],
            selectMainMaterial: "全部材料",
            selectMaterialText: "全部项目",
            selectMaterialPrice: "全部材料",
            selectRanking: "总体",
            materialRankingData:[],
            supplierRankingData:[],
            purchaseRankingData:[]
        }
    },
    methods: {
        drawPurchaseMaterialLine() {
            let purchaseMaterialData1 = [23, 34, 64, 52, 44, 34, 46, 53, 46, 59, 40, 55];
            let purchaseMaterialData2 = [13, 20, 34, 32, 24, 14, 36, 23, 36, 39, 20, 15];
            this.purchaseMaterial.setOption({
                xAxis: {
                    data: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月"
                    ].slice(0, purchaseMaterialData1.length),
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    },
                    boundaryGap: false, //从零开始
                    axisLabel: {
                        interval: 0 //强制显示所有间距
                    }
                },
                axisLabel: {
                    color: "#fff"
                },
                grid: {
                    x: 30,
                    x2: 30,
                    y: 60,
                    y2: 20
                },
                legend: {
                    left: 50,
                    data: ["主材", "辅材"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 万"
                },
                yAxis: {
                    name: "万",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                },
                series: [{
                        name: "主材",
                        type: "line",
                        smooth: true,
                        data: purchaseMaterialData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#32d2c9"
                            }
                        }
                    },
                    {
                        name: "辅材",
                        type: "line",
                        smooth: true,
                        data: purchaseMaterialData2,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#f8a20f"
                            }
                        }
                    }
                ]
            });
        },
        drawMaterialRateLine() {
            let materialRateData = [34, 53, 48, 52, 64, 55, 34, 46, 58, 46, 51, 44];
            this.materialRate.setOption({
                title: {
                    text: this.selectMainMaterial + '涨跌趋势',
                    left: 'center',
                    top: 'top',
                    textStyle: {
                        color: '#ccc',
                        fontSize: 15
                    }
                },
                xAxis: {
                    data: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月"
                    ].slice(0, materialRateData.length),
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    },
                    boundaryGap: false, //从零开始
                    axisLabel: {
                        interval: 0 //强制显示所有间距
                    }
                },
                axisLabel: {
                    color: "#fff"
                },
                grid: {
                    x: 30,
                    x2: 30,
                    y: 60,
                    y2: 20
                },
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 万"
                },
                yAxis: {
                    name: "万",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                },
                series: [{
                    name: this.selectMainMaterial + "涨跌率",
                    type: "line",
                    smooth: true,
                    data: materialRateData,
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: "#32d2c9"
                        }
                    }
                }]
            });
        },
        getMaterialRankingData() {
            this.materialRankingData = [{
                    name: "苏州事业部",
                    percent: 98
                },
                {
                    name: "苏州事业部",
                    percent: 97
                },
                {
                    name: "苏州事业部",
                    percent: 95
                },
                {
                    name: "苏州事业部",
                    percent: 92
                },
                {
                    name: "苏州事业部",
                    percent: 90
                },
                {
                    name: "苏州事业部",
                    percent: 89
                },
                {
                    name: "苏州事业部",
                    percent: 88
                },
                {
                    name: "苏州事业部",
                    percent: 86
                },
                {
                    name: "苏州事业部",
                    percent: 85
                },
                {
                    name: "苏州事业部",
                    percent: 84
                }
            ]
        },
        getSupplierRankingData() {
            this.supplierRankingData = [{
                    name: "强盛建材第一分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第二分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第三分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第四分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第五分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第六分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第七分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第八分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第九分厂",
                    sum: "10,000,000"
                },
                {
                    name: "强盛建材第十分厂",
                    sum: "10,000,000"
                }
            ]
        },
        getPurchaseRankingData() {
            this.purchaseRankingData = [{
                    name: "玻璃",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "铝板",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "铝型材",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "石材",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "窗五金",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "点驳件",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "GRC板",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "钢材",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "不锈钢",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },{
                    name: "彩钢板",
                    sum: "10,000,000",
                    analysis:"玻璃幕墙，用量大，冬天易裂，损失很多玻璃"
                },
            ]
        },
        reload() {
            document.onkeydown = function(e) {
                e = e || event;
                if (e.keyCode == 122) {
                  window.location.reload()
                }
            }
        },
        init() {
            window.timeTimer = setInterval(function() {;
                (window.this.currentTime = window.this.dateUtiles.formatDate(
                    new Date(),
                    'hh:mm:ss'
                )),
                1000
            })
            this.purchaseMaterial = echarts.init(document.getElementById("purchaseMaterial"));
            this.drawPurchaseMaterialLine();
            this.materialRate = echarts.init(document.getElementById("materialRate"));
            this.drawMaterialRateLine();
            this.getMaterialRankingData()
            this.getSupplierRankingData()
            this.getPurchaseRankingData()
        }
    },
    mounted() {
        window.this = this;
        this.init();
        this.reload()
    }
}