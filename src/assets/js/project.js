import echarts from "echarts";
import bmap from '../../../static/js/bmap.min'
export default {
    data() {
        return {
            animate: false,
            filterText1: '',
            filterText2: '',
            filterText3: '',
            currentTime: this.dateUtiles.formatDate(new Date(), 'hh:mm:ss'),
            currentDate: this.dateUtiles.formatDate(new Date()),
            activeIndex: -1,
            map: null,
            activeName: 'first',
            TabData1: [],
            TabData2: [],
            TabData3: [],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            informationData: [],
            projectData: [],
            shutdownProjectData: [],
            completedProjectData: [],
            constructionProjectData: [],
            winningRateData: []
        }
    },
    methods: {
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
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
                    center: [120.71, 31.3],
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
        getProjectData() {
            this.projectData = [{
                    projectName: "苏州市第一期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 20,
                    status: ""
                },
                {
                    projectName: "苏州市第二期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 60,
                    status: ""
                },
                {
                    projectName: "苏州市第三期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 100,
                    status: "success"
                },
                {
                    projectName: "苏州市第四期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 80,
                    status: "exception"
                },
                {
                    projectName: "苏州市第五期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 40,
                    status: ""
                },
                {
                    projectName: "苏州市第六期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 60,
                    status: ""
                },
                {
                    projectName: "苏州市第七期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 100,
                    status: "success"
                },
                {
                    projectName: "苏州市第八期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 80,
                    status: "exception"
                },
                {
                    projectName: "苏州市第九期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 60,
                    status: ""
                },
                {
                    projectName: "苏州市第十期建设工程",
                    title: "苏州事业部",
                    leadingOfficial: "苏州一建",
                    implementationTeam: "苏州一建",
                    customerName: "万达集团",
                    quota: "30,000,000",
                    percent: 80,
                    status: "exception"
                }
            ]
        },
        getTabData() {
            this.TabData1 = [{
                    label: '装修项目 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    label: '装修项目 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    label: '装修项目 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }, {
                            label: '三级 3-2-2'
                        }]
                    }]
                }
            ]
            this.TabData2 = [{
                    label: '设计项目 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    label: '设计项目 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    label: '设计项目 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }, {
                            label: '三级 3-2-2'
                        }]
                    }]
                }
            ]
            this.TabData3 = [{
                    label: '金融项目 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    label: '金融项目 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    label: '金融项目 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }, {
                            label: '三级 3-2-2'
                        }]
                    }]
                }
            ]
        },
        getShutdownProjectData() {
            this.shutdownProjectData = [{
                    name: "苏州事业部",
                    reason: "材料价格上涨"
                },
                {
                    name: "苏州事业部",
                    reason: "事故"
                },
                {
                    name: "苏州事业部",
                    reason: "资金"
                },
                {
                    name: "苏州事业部",
                    reason: "工期"
                },
                {
                    name: "苏州事业部",
                    reason: "天气"
                }
            ]
        },
        getCompletedProjectData() {
            this.completedProjectData = [{
                name: "信息化大楼一期信息化大楼建设",
                budgetaryCost: "20,000,000",
                actualCost: "30,000,000",
                projectProfitCost: "20,000,000",
                projectSatisfaction: 94
            }, {
                name: "信息化大楼一期建设",
                budgetaryCost: "20,000,000",
                actualCost: "30,000,000",
                projectProfitCost: "20,000,000",
                projectSatisfaction: 91
            }, {
                name: "信息化信息化大楼建设",
                budgetaryCost: "20,000,000",
                actualCost: "10,000,000",
                projectProfitCost: "20,000,000",
                projectSatisfaction: 96
            }, {
                name: "大楼一期建设",
                budgetaryCost: "20,000,000",
                actualCost: "30,000,000",
                projectProfitCost: "20,000,000",
                projectSatisfaction: 98
            }, {
                name: "信息化大楼一期信息化大楼建设",
                budgetaryCost: "20,000,000",
                actualCost: "30,000,000",
                projectProfitCost: "20,000,000",
                projectSatisfaction: 89
            }, ]
        },
        getConstructionProjectData() {
            this.constructionProjectData = [{
                    name: "信息化大楼一期建设",
                    percent: 98
                },
                {
                    name: "大楼一期建设",
                    percent: 96
                },
                {
                    name: "信息化大楼一期信息大楼建设",
                    percent: 95
                },
                {
                    name: "信息化大楼一期信息化大楼建设",
                    percent: 92
                },
                {
                    name: "信息化信息化大楼建设",
                    percent: 90
                }
            ]
        },
        getWinningRateData() {
            this.winningRateData = [{
                    name: "事业部",
                    percent: 99
                },
                {
                    name: "事业部",
                    percent: 96
                },
                {
                    name: "事业部",
                    percent: 95
                },
                {
                    name: "事业部",
                    percent: 92
                },
                {
                    name: "事业部",
                    percent: 89
                }
            ]
        },
        scroll() {
            let con1 = this.$refs.con1;
            con1.style.marginTop = '-39px';
            this.animate = !this.animate;
            let that = this;
            setTimeout(function() {
                that.informationData.push(that.informationData[0]);
                that.informationData.shift();
                con1.style.marginTop = '0px';
                that.animate = !that.animate;
            }, 1000)
        },
        toArticleDetail(index) {
            this.activeIndex = index;
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
            this.map = echarts.init(document.getElementById('map'))
            this.drawMap()
            this.getInformationData()
            this.getProjectData()
            this.getTabData()
            this.getShutdownProjectData()
            this.getCompletedProjectData()
            this.getConstructionProjectData()
            this.getWinningRateData()
        }
    },
    created() {
        window.scrollRealInformation = setInterval(this.scroll, 2000)
    },
    mounted() {
        window.this = this;
        this.init();
        this.reload()
    },
    watch: {
        filterText1(val) {
            this.$refs.tree1.filter(val);
        },
        filterText2(val) {
            this.$refs.tree2.filter(val);
        },
        filterText3(val) {
            this.$refs.tree3.filter(val);
        }
    },
    destroyed: function() {
        clearInterval(window.timeTimer)
        clearInterval(window.scrollRealInformation)
    }
}