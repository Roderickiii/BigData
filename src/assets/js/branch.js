import echarts from "echarts";
export default {
    data() {
        return {
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            projectIndicators: null,
            projectIndicatorsData: [],
            capitalIncome: null,
            capitalIncomeData: [],
            staffChange: null,
            staffChangeData: [],
            projectYieldData: []
        }
    },
    methods: {
        drawProjectIndicatorsPie() {
            this.projectIndicators.setOption({
                color: ["#21a5de", '#fb4058'],
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{b} : {c} 个"
                },
                series: [{
                    name: '值',
                    type: 'pie',
                    clockWise: true, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [100, 100],
                    center: ["50%", "36%"],
                    startAngle: 60,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false
                            },
                            barBorderRadius: 10
                        }
                    },
                    data: [{
                        value: 600,
                        name: '未完成项目量',
                        itemStyle: {
                            normal: {
                                borderWidth: 10,
                                borderColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#7065ef' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#e665a1' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    }, {
                        value: 400,
                        name: '正在施工项目量',
                        itemStyle: {
                            normal: {
                                borderWidth: 20,
                                borderColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#fb4058' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#fd8b4e' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    }, {
                        value: 1000,
                        name: '已完成项目量',
                        itemStyle: {
                            normal: {
                                borderWidth: 30,
                                borderColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#21a5de' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#27cbd3' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    }]
                }]
            })
        },
        drawCapitalIncomeLine() {
            let capitalIncomeData = [2, 4, 6, 2, 3, 1, 2, 2, 1, 4, 3, 4];
            this.capitalIncome.setOption({
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
                    ].slice(0, capitalIncomeData.length),
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
                    x: 60,
                    x2: 60,
                    y: 60,
                    y2: 40
                },
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 亿"
                },
                yAxis: {
                    name: "亿",
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
                    name: "资金收入",
                    type: "line",
                    smooth: true,
                    symbolSize: 8,
                    data: capitalIncomeData,
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: "#32d2c9"
                        }
                    }
                }]
            });
        },
        drawStaffChangeLine() {
            let staffChangeData1 = [1250, 853, 941, 1357, 1050, 946, 1437, 1053, 1251, 868, 953, 1055];
            let staffChangeData2 = [1013, 1120, 834, 932, 1224, 1014, 1036, 823, 1436, 1239, 1320, 915];
            this.staffChange.setOption({
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
                    ].slice(0, staffChangeData1.length),
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
                    x: 60,
                    x2: 60,
                    y: 60,
                    y2: 40
                },
                legend: {
                    right: 40,
                    data: ["今年", "去年"],
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
                        name: "今年",
                        type: "line",
                        smooth: true,
                        data: staffChangeData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#32d2c9"
                            }
                        }
                    },
                    {
                        name: "去年",
                        type: "line",
                        smooth: true,
                        data: staffChangeData2,
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
        getProjectYield() {
            this.projectYieldData = [{
                    name: "信息建设大楼一部建设",
                    percent: 99
                },
                {
                    name: "信息建设大楼一设",
                    percent: 98
                },
                {
                    name: "信息建设大楼一部建设信息建",
                    percent: 97
                },
                {
                    name: "信息建楼一部建设",
                    percent: 96
                },
                {
                    name: "信息建设大楼一部建设信息建设大楼",
                    percent: 95
                },
                {
                    name: "信息建设大楼",
                    percent: 94
                },
                {
                    name: "信息建设大息建设大楼一部建设",
                    percent: 93
                },
                {
                    name: "强盛建材信息建设大楼一部建设",
                    percent: 92
                },
                {
                    name: "信息建楼一部建设",
                    percent: 91
                },
                {
                    name: "信息建设大楼一部建设",
                    percent: 90
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
            this.projectIndicators = echarts.init(document.getElementById("projectIndicators"));
            this.drawProjectIndicatorsPie();
            this.capitalIncome = echarts.init(document.getElementById("capitalIncome"));
            this.drawCapitalIncomeLine();
            this.staffChange = echarts.init(document.getElementById("staffChange"));
            this.drawStaffChangeLine();
            this.getProjectYield()
        }
    },
    mounted() {
        window.this = this;
        this.init();
    }
}