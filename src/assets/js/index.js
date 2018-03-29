import echarts from 'echarts'
import liquidFill from '../../../static/js/echarts-liquidfill.min'
import bmap from '../../../static/js/bmap.min'
export default {
    data() {
        return {
            animate: false,
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            profitAndLoss: null,
            profitAndLossData: [],
            newCustomersData: [],
            daysRemaining: 0,
            project: null,
            projectIndicators: 0,
            outPutValue: null,
            outPutValueIndicators: 0,
            steamAgain: null,
            steamAgainIndicators: 0,
            target: null,
            targetData: [],
            undertakingsIndexData: [],
            liquidFillSphere: null,
            liquidFillSphereData: [],
            map: null,
            purchaseMaterial: null,
            purchaseMaterialData: [],
            personnelComparison: null,
            personnelComparisonData: [],
            projectStatus: null,
            projectStatusData: [],
            selectText: "全部项目",
            informationData: []
        }
    },
    methods: {
        drawProfitAndLossrLine() {
            let profitAndLossData1 = [5, 3, 4, 6, 5, 4, 6, 8, 4, 6, 7, 4]
            let profitAndLossData2 = [3, 4, 6, 5, 7, 5, 6, 4, 3, 8, 4, 6]
            let profitAndLossData3 = [6, 4, 5, 3, 4, 6, 5, 7, 8, 6, 4, 8]
            this.profitAndLoss.setOption({
                xAxis: {
                    data: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月'
                    ].slice(0, profitAndLossData1.length),
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    boundaryGap: false,
                    axisLabel: {
                        interval: 0
                    }
                },
                axisLabel: {
                    color: '#fff'
                },
                legend: {
                    right: 10,
                    top: 10,
                    data: ['收入金额', '支出金额', '资金盈亏'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    x: 18,
                    x2: 18,
                    y: 50,
                    y2: 40
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b} : {c} 亿'
                },
                yAxis: {
                    name: '个',
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0)'
                        }
                    }
                },
                series: [{
                        name: '收入金额',
                        type: 'line',
                        smooth: true,
                        data: profitAndLossData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: '#53FB9D'
                            }
                        }
                    },
                    {
                        name: '支出金额',
                        type: 'line',
                        smooth: true,
                        data: profitAndLossData2,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: '#E55A08'
                            }
                        }
                    },
                    {
                        name: '资金盈亏',
                        type: 'line',
                        smooth: true,
                        data: profitAndLossData3,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: '#3388F5'
                            }
                        }
                    }
                ]
            })
        },
        drawIndicatorsPie(chartObj, Score) {
            if (chartObj) {
                let series = [{
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['66%', '100%'],
                    center: ['50%', '55%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: function() {
                                return Score
                            },
                            textStyle: {
                                fontSize: 14,
                                color: 'white'
                            }
                        }
                    },
                    data: [{
                            value: Score
                        },
                        {
                            value: 100 - Score
                        }
                    ]
                }]
                chartObj.setOption({
                    color: [
                        new echarts.graphic.LinearGradient(
                            1,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: '#5978e6'
                                },
                                {
                                    offset: 1,
                                    color: '#00ead9'
                                }
                            ],
                            false
                        ),
                        '#1c496f',
                        'orange'
                    ],
                    series: series
                })
            }
        },
        drawTargetPie() {
            this.target.setOption({
                color: ['#21a5de', '#fb4058'],
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} 个'
                },
                series: [{
                    name: '值',
                    type: 'pie',
                    clockWise: true, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    radius: [80, 80],
                    center: ['30%', '52%'],
                    startAngle: 60,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            barBorderRadius: 10
                        }
                    },
                    data: [{
                            value: 6,
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
                                            },
                                            {
                                                offset: 1,
                                                color: '#e665a1' // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        },
                        {
                            value: 3,
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
                                            },
                                            {
                                                offset: 1,
                                                color: '#fd8b4e' // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        },
                        {
                            value: 6,
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
                                            },
                                            {
                                                offset: 1,
                                                color: '#27cbd3' // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        }
                    ]
                }]
            })
        },
        drawLiquidFill() {
            this.liquidFillSphere.setOption({
                series: [{
                    type: 'liquidFill',
                    radius: '95%',
                    data: [0.5, 0.45, 0.4, 0.3],
                    label: {
                        normal: {
                            color: '#a862ff',
                            insideColor: '#f55a50',
                            fontSize: 30
                        }
                    }
                }]
            })
        },
        drawMap() {
            /****************************正在施工data**********************************/
            let constructionData = [
                { name: '第三期项目', value: [120.71, 31.3] },
                { name: '第四期项目', value: [120.72, 31.29] }
            ]
            /******************************已完成data************************************/
            let completedData = [
                { name: '第一期项目', value: [120.74, 31.31] },
                { name: '第二期项目', value: [120.75, 31.3] }
            ]
            this.map.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'top',
                    right: 10,
                    data: ['已完成项目', '正在施工项目'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                bmap: {
                    center: [120.721426,31.297349],
                    zoom: 14,
                    roam: true,
                    enableMapClick: false,
                    mapStyle: {
                        styleJson: [{
                            'featureType': 'land', //调整土地颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#081734'
                            }
                        }, {
                            'featureType': 'building', //调整建筑物颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#04406F'
                            }
                        }, {
                            'featureType': 'building', //调整建筑物标签是否可视
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'highway', //调整高速道路颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#015B99'
                            }
                        }, {
                            'featureType': 'highway', //调整高速名字是否可视
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'arterial', //调整一些干道颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#003051'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'green',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'water',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#044161'
                            }
                        }, {
                            'featureType': 'subway', //调整地铁颜色
                            'elementType': 'geometry.stroke',
                            'stylers': {
                                'color': '#003051'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'all', //调整所有的标签的边缘颜色
                            'elementType': 'labels.text.stroke',
                            'stylers': {
                                'color': '#313131'
                            }
                        }, {
                            'featureType': 'all', //调整所有标签的填充颜色
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#FFFFFF'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'geometry',
                            'stylers': {
                                'lightness': -65
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'lightness': -40
                            }
                        }, {
                            'featureType': 'boundary',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#8b8787',
                                'weight': '1',
                                'lightness': -29
                            }
                        }]
                    }
                },
                series: [{
                        type: 'lines',
                        mapType: 'china',
                        coordinateSystem: 'bmap',
                        zlevel: 1,
                        lineStyle: {
                            normal: {
                                width: '',
                                color: '#a6c84c',
                                curveness: 0
                            }
                        }
                    }, {
                        type: 'effectScatter',
                        mapType: 'china',
                        coordinateSystem: 'bmap',
                        zlevel: 3,
                        symbolSize: 20,
                        data: constructionData,
                        rippleEffect: {
                            period: 10,
                            scale: 5,
                            brushType: 'fill'
                        },
                        itemStyle: {
                            normal: {
                                color: '#d5384d'
                            }
                        }
                    },
                    {
                        type: 'scatter',
                        mapType: 'china',
                        coordinateSystem: 'bmap',
                        zlevel: 3,
                        symbolSize: 20,
                        data: completedData,
                        rippleEffect: {
                            period: 10,
                            scale: 5,
                            brushType: 'fill'
                        },
                        itemStyle: {
                            normal: {
                                color: '#d5384d'
                            }
                        }
                    }
                ]
            })
        },
        drawPurchaseMaterialLine() {
            let purchaseMaterialData1 = [
                23,
                34,
                64,
                52,
                44,
                34,
                46,
                53,
                46,
                59,
                40,
                55
            ]
            let purchaseMaterialData2 = [
                13,
                20,
                34,
                32,
                24,
                14,
                36,
                23,
                36,
                39,
                20,
                15
            ]
            /*this.purchaseMaterialData.forEach(function(element){
              if(element.customercheck_type == 1){
                purchaseMaterialData1.push(element.monthCount)
              } else {
                purchaseMaterialData2.push(element.monthCount)
              }
            });*/
            this.purchaseMaterial.setOption({
                xAxis: {
                    data: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月'
                    ].slice(0, purchaseMaterialData1.length),
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    },
                    boundaryGap: false, //从零开始
                    axisLabel: {
                        interval: 0 //强制显示所有间距
                    }
                },
                axisLabel: {
                    color: '#fff'
                },
                grid: {
                    x: 30,
                    x2: 20,
                    y: 60,
                    y2: 30
                },
                legend: {
                    left: 'right',
                    data: ['主材', '辅材'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b} : {c} 个'
                },
                yAxis: {
                    name: '个',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    }
                },
                series: [{
                        name: '主材',
                        type: 'line',
                        smooth: true,
                        data: purchaseMaterialData1,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: '#32d2c9'
                            }
                        }
                    },
                    {
                        name: '辅材',
                        type: 'line',
                        smooth: true,
                        data: purchaseMaterialData2,
                        barWidth: 15,
                        itemStyle: {
                            normal: {
                                color: '#f8a20f'
                            }
                        }
                    }
                ]
            })
        },
        drawPersonnelComparisonBar() {
            let personnelComparisonData1 = [
                465,
                564,
                645,
                666,
                671,
                846,
                621,
                765,
                901,
                647,
                745,
                831
            ]
            let personnelComparisonData2 = [
                364,
                456,
                555,
                756,
                834,
                645,
                736,
                863,
                952,
                618,
                549,
                762
            ]
            this.personnelComparison.setOption({
                xAxis: {
                    data: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月'
                    ].slice(0, personnelComparisonData1.length),
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    },
                    axisLabel: {
                        interval: 0
                    }
                },
                axisLabel: {
                    color: '#fff'
                },
                grid: {
                    x: 40,
                    y: 40,
                    x2: 10,
                    y2: 20
                },
                legend: {
                    left: 'right',
                    data: ['今年', '去年'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b}:{c} 名'
                },
                yAxis: {
                    name: '名',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    }
                },
                series: [{
                        name: '今年',
                        type: 'bar',
                        smooth: true,
                        data: personnelComparisonData1,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#16e4fe'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0185e0'
                                    }
                                ])
                            }
                        }
                    },
                    {
                        name: '去年',
                        type: 'bar',
                        smooth: true,
                        data: personnelComparisonData2,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#94f3fc'
                                    },
                                    {
                                        offset: 1,
                                        color: '#65efc6'
                                    }
                                ])
                            }
                        }
                    }
                ]
            })
        },
        drawProjectStatusBar() {
            let projectStatusData = [3821, 5164, 1023]
            this.projectStatus.setOption({
                xAxis: {
                    data: ['已竣工', '正在施工', '停工'],
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    },
                    axisLabel: {
                        interval: 0
                    }
                },
                axisLabel: {
                    color: '#fff'
                },
                grid: {
                    x: 40,
                    y: 40,
                    x2: 10,
                    y2: 20
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} 个'
                },
                yAxis: {
                    name: '个',
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    smooth: true,
                    data: projectStatusData,
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                let colorList = ['#02b6d6', '#e69108', '#d83c42']
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }]
            })
        },
        getDaysRemaining() {
            let now = new Date();
            let firstDay = new Date(now.getFullYear(), 0, 1);
            let dateDiff = now - firstDay;
            let msPerDay = 1000 * 60 * 60 * 24;
            let diffDays = Math.ceil(dateDiff / msPerDay);
            let y = new Date().getFullYear(),
                isLeap = (0 === y % 4) && (0 === y % 100) || (0 === y % 400),
                totalDays = isLeap ? 366 : 365;
            this.daysRemaining = totalDays - diffDays;
        },
        getNewCustomersData() {
            this.newCustomersData = [{
                    area: "江苏",
                    name: "苏州事业部1",
                    currentCount: 23,
                    lastCount: 20
                },
                {
                    area: "江苏",
                    name: "苏州事业部2",
                    currentCount: 32,
                    lastCount: 31
                },
                {
                    area: "江苏",
                    name: "苏州事业部3",
                    currentCount: 20,
                    lastCount: 18
                },
                {
                    area: "江苏",
                    name: "苏州事业部4",
                    currentCount: 34,
                    lastCount: 26
                },
                {
                    area: "江苏",
                    name: "苏州事业部5",
                    currentCount: 14,
                    lastCount: 10
                },
                {
                    area: "江苏",
                    name: "苏州事业部6",
                    currentCount: 16,
                    lastCount: 8
                },
                {
                    area: "江苏",
                    name: "苏州事业部7",
                    currentCount: 22,
                    lastCount: 20
                },
                {
                    area: "江苏",
                    name: "苏州事业部8",
                    currentCount: 28,
                    lastCount: 26
                }
            ]
        },
        getUndertakingsIndexData() {
            this.undertakingsIndexData = [{
                name: "苏州事业部1",
                percent: 99
            }, {
                name: "苏州事业部2",
                percent: 98
            }, {
                name: "苏州事业部3",
                percent: 97
            }, {
                name: "苏州事业部4",
                percent: 96
            }, {
                name: "苏州事业部5",
                percent: 95
            }, {
                name: "苏州事业部6",
                percent: 94
            }, {
                name: "苏州事业部7",
                percent: 93
            }, {
                name: "苏州事业部8",
                percent: 92
            }, {
                name: "苏州事业部9",
                percent: 91
            }, {
                name: "苏州事业部10",
                percent: 90
            }]
        },
        getProjectIndicators() {
            this.projectIndicators = 85
        },
        getOutPutValueIndicators() {
            this.outPutValueIndicators = 89
        },
        getSteamAgainIndicators() {
            this.steamAgainIndicators = 82
        },
        getInformationData() {
            this.informationData = [{
                name: "第一工程建设已建设已完成1",
                date: "2018-1-1"
            }, {
                name: "第一工程建设已建设已完成2",
                date: "2018-1-2"
            }, {
                name: "第一工程建设已建设已完成3",
                date: "2018-1-3"
            }, {
                name: "第一工程建设已建设已完成4",
                date: "2018-1-4"
            }, {
                name: "第一工程建设已建设已完成5",
                date: "2018-1-5"
            }, {
                name: "第一工程建设已建设已完成6",
                date: "2018-1-6"
            }, {
                name: "第一工程建设已建设已完成7",
                date: "2018-1-7"
            }, {
                name: "第一工程建设已建设已完成8",
                date: "2018-1-8"
            }, ]
        },
        scroll() {
            let con1 = this.$refs.con1;
            con1.style.marginTop = '-37px';
            this.animate = !this.animate;
            let that = this;
            setTimeout(function() {
                that.informationData.push(that.informationData[0]);
                that.informationData.shift();
                con1.style.marginTop = '0px';
                that.animate = !that.animate;
            }, 1000)
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
            this.profitAndLoss = echarts.init(document.getElementById('profitAndLoss'))
            this.drawProfitAndLossrLine()
            this.project = echarts.init(document.getElementById('project'))
            this.getProjectIndicators()
            this.outPutValue = echarts.init(document.getElementById('outPutValue'))
            this.getOutPutValueIndicators()
            this.steamAgain = echarts.init(document.getElementById('steamAgain'))
            this.getSteamAgainIndicators()
            this.target = echarts.init(document.getElementById('target'))
            this.drawTargetPie()
            this.liquidFillSphere = echarts.init(
                document.getElementById('liquidFillSphere')
            )
            this.drawLiquidFill()
            this.map = echarts.init(document.getElementById('map'))
            this.drawMap()
            this.purchaseMaterial = echarts.init(
                document.getElementById('purchaseMaterial')
            )
            this.drawPurchaseMaterialLine()
            this.personnelComparison = echarts.init(
                document.getElementById('personnelComparison')
            )
            this.drawPersonnelComparisonBar()
            this.projectStatus = echarts.init(
                document.getElementById('projectStatus')
            )
            this.drawProjectStatusBar()
            this.getNewCustomersData()
            this.getDaysRemaining()
            this.getUndertakingsIndexData()
            this.getInformationData()
        }
    },
    created() {
        window.scrollInformation = setInterval(this.scroll, 2000)
    },
    mounted() {
        window.this = this
        this.init()
        this.reload()
    },
    watch: {
        projectIndicators: function() {
            this.drawIndicatorsPie(this.project, this.projectIndicators)
        },
        outPutValueIndicators: function() {
            this.drawIndicatorsPie(this.outPutValue, this.outPutValueIndicators)
        },
        steamAgainIndicators: function() {
            this.drawIndicatorsPie(this.steamAgain, this.steamAgainIndicators)
        }
    },
    destroyed: function() {
        clearInterval(window.timeTimer)
        clearInterval(window.scrollInformation)
    }
}