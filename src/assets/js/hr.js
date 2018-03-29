import echarts from "echarts";
export default {
    data() {
        return {
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            education: null,
            educationData: [],
            sourceArea: null,
            sourceAreaData: [],
            turnoverRate: null,
            turnoverRateData: [],
            sexRatio: null,
            sexRatioData: [],
            sexRatio: null,
            sexRatioData: [],
            ageStructure: null,
            ageStructureData: [],
            personnelComparison: null,
            personnelComparisonData: [],
            seniorityStructure: null,
            seniorityStructureData: [],
            netProfit: null,
            netProfitData: [],
            perCapitaData: []
        }
    },
    methods: {
        drawEducationLine() {
            let educationData1 = [66, 70, 64, 80, 76, 61, 78, 72, 61, 84, 66, 70];
            let educationData2 = [60, 64, 50, 77, 57, 66, 67, 54, 69, 60, 56, 68];
            let educationData3 = [50, 53, 41, 57, 50, 46, 67, 53, 51, 68, 53, 55];
            let educationData4 = [13, 20, 34, 32, 24, 14, 36, 23, 36, 39, 20, 15];
            this.education.setOption({
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
                    ].slice(0, educationData1.length),
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
                    y: 40,
                    y2: 30
                },
                legend: {
                    right: 20,
                    data: ["大专", "本科", "硕士", "博士"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} %"
                },
                yAxis: {
                    name: "%",
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
                        name: "大专",
                        type: "line",
                        smooth: true,
                        data: educationData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#32d2c9"
                            }
                        }
                    },
                    {
                        name: "本科",
                        type: "line",
                        smooth: true,
                        data: educationData2,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#f8a20f"
                            }
                        }
                    },
                    {
                        name: "硕士",
                        type: "line",
                        smooth: true,
                        data: educationData3,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#C0A1E2"
                            }
                        }
                    },
                    {
                        name: "博士",
                        type: "line",
                        smooth: true,
                        data: educationData4,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#81CBC1"
                            }
                        }
                    }
                ]
            });
        },
        drawSourceAreaBar() {
            let name = ['江苏', '上海', '浙江', '河南', '河北', '山东', '广西', '新疆', '云南', '贵州', '湖北', '湖南', '广东'];
            let value = [90, 80, 20, 32, 10, 43, 6, 24, 23, 34, 22, 10, 40];
            this.sourceArea.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} %"
                },
                grid: {
                    top: '18%',
                    left: '2%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: name,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                }],
                yAxis: [{
                    name: "%",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                }],
                series: [{
                    name: '来源地结构',
                    type: 'bar',
                    barWidth: '60%',
                    data: value,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#E07A7A'
                            }, {
                                offset: 1,
                                color: '#ab3232'
                            }])
                        }
                    }
                }]
            })
        },
        drawTurnoverRateLine() {
            let turnoverRateData = [2, 4, 6, 2, 0, 1, 2, 2, 1, 4, 3, 0];
            this.turnoverRate.setOption({
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
                    ].slice(0, turnoverRateData.length),
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
                    y: 40,
                    y2: 30
                },
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 人"
                },
                yAxis: {
                    name: "人",
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
                    name: "人员离职率",
                    type: "line",
                    smooth: true,
                    symbolSize: 8,
                    data: turnoverRateData,
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: "#32d2c9"
                        }
                    }
                }]
            });
        },
        drawSexRatioLine() {
            let sexRatioData1 = [66, 70, 64, 80, 76, 61, 78, 72, 61, 84, 66, 70];
            let sexRatioData2 = [60, 64, 50, 77, 57, 66, 67, 54, 69, 60, 56, 68];
            this.sexRatio.setOption({
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
                    ].slice(0, sexRatioData1.length),
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
                    y: 40,
                    y2: 30
                },
                legend: {
                    right: 20,
                    data: ["男", "女"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} %"
                },
                yAxis: {
                    name: "%",
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
                        name: "男",
                        type: "line",
                        smooth: true,
                        data: sexRatioData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: "#32d2c9"
                            }
                        }
                    },
                    {
                        name: "女",
                        type: "line",
                        smooth: true,
                        data: sexRatioData2,
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
        drawAgeStructureBar() {
            let name = ['20~24', '25~29', '30~34', '35~39', '40~44', '45~49', '50及以上'];
            let value = [5212, 4322, 4561, 6542, 3214, 3112, 2100];
            this.ageStructure.setOption({
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 人"
                },
                grid: {
                    top: '18%',
                    left: '2%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: name,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                }],
                yAxis: [{
                    name: "人",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.8)"
                        }
                    }
                }],
                series: [{
                    name: '年龄结构',
                    type: 'bar',
                    barWidth: 30,
                    data: value,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#43B5AB'
                            }, {
                                offset: 1,
                                color: '#188c67'
                            }])
                        }
                    }
                }]
            })
        },
        drawPersonnelComparisonBar() {
            let personnelComparisonData1 = [756, 854, 765, 966, 761, 946, 861, 775, 851, 767, 975, 761];
            let personnelComparisonData2 = [934, 746, 855, 776, 774, 965, 776, 843, 852, 768, 979, 972];
            this.personnelComparison.setOption({
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
                    ].slice(0, personnelComparisonData1.length),
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
                    top: '18%',
                    left: '2%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    right: 20,
                    data: ["今年", "去年"],
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b}:{c} 人"
                },
                yAxis: {
                    name: "人",
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
                        type: "bar",
                        smooth: true,
                        data: personnelComparisonData1,
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
                        name: "去年",
                        type: "bar",
                        smooth: true,
                        data: personnelComparisonData2,
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
        drawSeniorityStructureBar() {
            let seniorityStructureData = [89, 67, 50, 43, 20];
            this.seniorityStructure.setOption({
                color: ['#43B5AB'],
                yAxis: {
                    name: "年",
                    type: 'category',
                    data: [
                        "1~3",
                        "4~6",
                        "7~9",
                        "10~12",
                        "12以上"
                    ],
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
                    top: '18%',
                    left: '2%',
                    right: '7%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a}<br/>{b} : {c} 人"
                },
                xAxis: {
                    name: "%",
                    type: 'value',
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
                    name: "工龄结构",
                    type: "bar",
                    smooth: true,
                    data: seniorityStructureData,
                    barWidth: 18
                }]
            });
        },
        drawNetProfitLine() {
            let netProfitData1 = [50, 53, 41, 57, 50, 46, 67, 53, 51, 68, 53, 55];
            let netProfitData2 = [13, 20, 34, 32, 24, 14, 36, 23, 36, 39, 20, 15];
            this.netProfit.setOption({
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
                    ].slice(0, netProfitData1.length),
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
                    y: 40,
                    y2: 30
                },
                legend: {
                    right: 20,
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
                        data: netProfitData1,
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
                        data: netProfitData2,
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
        getPerCapitaData() {
            this.perCapitaData = [{
                    name: "苏州第一事业部",
                    percent: 99
                },
                {
                    name: "苏州第二事业部",
                    percent: 98
                },
                {
                    name: "苏州第三事业部",
                    percent: 97
                },
                {
                    name: "苏州第四事业部",
                    percent: 96
                },
                {
                    name: "苏州第五事业部",
                    percent: 95
                }
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
            this.education = echarts.init(document.getElementById("education"));
            this.drawEducationLine();
            this.sourceArea = echarts.init(document.getElementById("sourceArea"));
            this.drawSourceAreaBar();
            this.turnoverRate = echarts.init(document.getElementById("turnoverRate"));
            this.drawTurnoverRateLine();
            this.sexRatio = echarts.init(document.getElementById("sexRatio"));
            this.drawSexRatioLine();
            this.ageStructure = echarts.init(document.getElementById("ageStructure"));
            this.drawAgeStructureBar();
            this.personnelComparison = echarts.init(document.getElementById("personnelComparison"));
            this.drawPersonnelComparisonBar();
            this.seniorityStructure = echarts.init(document.getElementById("seniorityStructure"));
            this.drawSeniorityStructureBar();
            this.netProfit = echarts.init(document.getElementById("netProfit"));
            this.drawNetProfitLine();
            this.getPerCapitaData()
        }
    },
    mounted() {
        window.this = this;
        this.init();
        this.reload()
    }
}