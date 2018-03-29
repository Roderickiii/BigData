import echarts from "echarts";
export default {
    data() {
        return {
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            fundAnalysis: null,
            fundAnalysisData: [],
            fundAnalysisPie: null,
            fundAnalysisPieData: [],
            operatingCosts: null,
            operatingCostsData: [],
            detail: null,
            yieldRateData: [],
            detailData: [],
            detailPieData: []
        }
    },
    methods: {
        drawFundAnalysisBar() {
            let fundAnalysisData1 = [56, 54, 65, 66, 61, 46, 61, 75, 51, 67, 75, 61];
            let fundAnalysisData2 = [34, 46, 55, 76, 74, 65, 76, 43, 52, 68, 59, 72];
            this.fundAnalysis.setOption({
                title: {
                    text: '项目用款需求',
                    left: 'center',
                    top: 'top',
                    textStyle: {
                        color: '#ccc'
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
                    ].slice(0, fundAnalysisData1.length),
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    },
                    axisLabel: {
                        interval: 0
                    }
                },
                axisLabel: {
                    color: "#fff"
                },
                grid: {
                    x: 40,
                    y: 80,
                    x2: 10,
                    y2: 60
                },
                legend: {
                    left: "right",
                    data: ["2016年", "2017年"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b}:{c} 万"
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
                        name: "2016年",
                        type: "bar",
                        smooth: true,
                        data: fundAnalysisData1,
                        barWidth: 14,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#16e4fe'
                                }, {
                                    offset: 1,
                                    color: '#0185e0'
                                }])
                            }
                        }
                    },
                    {
                        name: "2017年",
                        type: "bar",
                        smooth: true,
                        data: fundAnalysisData2,
                        barWidth: 14,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#94f3fc'
                                }, {
                                    offset: 1,
                                    color: '#65efc6'
                                }])
                            }
                        }
                    }
                ]
            });
        },
        drawFundAnalysisPie() {
            this.fundAnalysisPie.setOption({

                title: {
                    text: '可用资金池',
                    left: 'center',
                    top: 'top',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                color: ['#218BDE', '#14BFA5', '#E57B60', '#E5B53A'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} 万 ({d}%)"
                },
                series: [{
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '融资资金池' },
                        { value: 310, name: '银行存款' },
                        { value: 274, name: '可拆借资金池' },
                        { value: 235, name: '银行贷款授信额度' }
                    ].sort(function(a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#fff'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function(idx) {
                        return Math.random() * 200;
                    }
                }]
            });
        },
        drawOperatingCostsLine() {
            let operatingCostsData1 = [54, 33, 45, 68, 57, 44, 63, 82, 44, 68, 74, 41];
            let operatingCostsData2 = [35, 44, 67, 53, 75, 54, 68, 47, 35, 82, 49, 64];
            this.operatingCosts.setOption({
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
                    ].slice(0, operatingCostsData1.length),
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    },
                    boundaryGap: false,
                    axisLabel: {
                        interval: 0
                    }
                },
                axisLabel: {
                    color: "#fff"
                },
                legend: {
                    right: 30,
                    top: 10,
                    data: ["2016年", "2017年"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                grid: {
                    x: 40,
                    x2: 40,
                    y: 70,
                    y2: 20
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 亿"
                },
                yAxis: {
                    name: "个",
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0)"
                        }
                    }
                },
                series: [{
                        name: "2016年",
                        type: "line",
                        smooth: true,
                        data: operatingCostsData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#53FB9D"
                            }
                        }
                    },
                    {
                        name: "2017年",
                        type: "line",
                        smooth: true,
                        data: operatingCostsData2,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#218BDE"
                            }
                        }
                    }
                ]
            });
        },
        drawDetailPie() {
            this.detail.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} 万 ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    top: 20,
                    data: ['投资收益', '项目收入', '还款', '项目管理费', '工程收入', '其他收入'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: '收支明细',
                    type: 'pie',
                    radius: 100,
                    center: ["60%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#fff'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    data: this.detailPieData
                }]
            });
        },
        getProjectYieldData() {
            this.yieldRateData = [{
                    name: "苏州事业部",
                    percent: 98
                },
                {
                    name: "苏州事业部",
                    percent: 97
                },
                {
                    name: "苏州事业部",
                    percent: 97
                },
                {
                    name: "苏州事业部",
                    percent: 96
                },
                {
                    name: "苏州事业部",
                    percent: 94
                },
                {
                    name: "苏州事业部",
                    percent: 93
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
                    percent: 88
                },
                {
                    name: "苏州事业部",
                    percent: 87
                },
            ]
        },
        getDetailData() {
            this.detailPieData = [{
                    value: 10000000,
                    name: "投资收益"
                },
                {
                    value: 20000000,
                    name: "项目收入"
                },
                {
                    value: 30000000,
                    name: "还款"
                },
                {
                    value: 40000000,
                    name: "项目管理费"
                },
                {
                    value: 50000000,
                    name: "工程收入"
                },
                {
                    value: 60000000,
                    name: "其他收入"
                },
            ]
            this.drawDetailPie();
            this.detailPieData.forEach((elem) => {
                let b = parseInt(elem.value).toString();
                let len = b.length;
                if (len <= 3) {
                    return b;
                }
                let r = len % 3;
                let value = r > 0 ?
                        b.slice(0, r) +
                        "," +
                        b
                        .slice(r, len)
                        .match(/\d{3}/g)
                        .join(",") : b
                        .slice(r, len)
                        .match(/\d{3}/g)
                        .join(",")
                window.this.detailData.push({
                    value: value,
                    name: elem.name
                })
            })
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
            this.fundAnalysis = echarts.init(document.getElementById("fundAnalysis"));
            this.drawFundAnalysisBar();
            this.fundAnalysisPie = echarts.init(document.getElementById("fundAnalysisPie"));
            this.drawFundAnalysisPie();
            this.operatingCosts = echarts.init(document.getElementById("operatingCosts"));
            this.drawOperatingCostsLine();
            this.detail = echarts.init(document.getElementById("detail"));
            this.getProjectYieldData()
            this.getDetailData()
        }
    },
    mounted() {
        window.this = this;
        this.init();
        this.reload()
    }
}