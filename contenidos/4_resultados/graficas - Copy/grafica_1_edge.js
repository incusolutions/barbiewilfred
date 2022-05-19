/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Montserrat, sans-serif': '<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap\" rel=\"stylesheet\">'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn_1',
                            symbolName: 'btn_1',
                            type: 'rect',
                            rect: ['81px', '11', '151', '31', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_2',
                            symbolName: 'btn_2',
                            type: 'rect',
                            rect: ['243px', '11', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_3',
                            symbolName: 'btn_3',
                            type: 'rect',
                            rect: ['405px', '11', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_4',
                            symbolName: 'btn_4',
                            type: 'rect',
                            rect: ['566px', '11', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_5',
                            symbolName: 'btn_5',
                            type: 'rect',
                            rect: ['728px', '11', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'chart',
                            type: 'rect',
                            rect: ['53px', '54px', '853px', '480px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '540px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '151px', '31px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(152,161,96,1)']
                        },
                        {
                            rect: ['28px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Pregunta 1</p>',
                            font: ['Montserrat, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '151px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(152,161,96,1)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(62,81,0,1.00)'
                        ]
                    ]
                }
            },
            "btn_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'RoundRect3',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '151px', '31px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            br: null,
                            fill: ['rgba(152,161,96,1)']
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Text',
                            t: 'text',
                            rect: ['28px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Montserrat, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Pregunta 2</p>',
                            n: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '151px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(152,161,96,1)'
                        ],
                        [
                            "eid4",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(62,81,0,1.00)'
                        ]
                    ]
                }
            },
            "btn_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'RoundRect3',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '151px', '31px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            br: null,
                            fill: ['rgba(152,161,96,1)']
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Text',
                            t: 'text',
                            rect: ['28px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Montserrat, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Pregunta 3</p>',
                            n: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '151px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_3}",
                            '0',
                            ''
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(152,161,96,1)'
                        ],
                        [
                            "eid4",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(62,81,0,1.00)'
                        ]
                    ]
                }
            },
            "btn_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'RoundRect3',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '151px', '31px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            br: null,
                            fill: ['rgba(152,161,96,1)']
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Text',
                            t: 'text',
                            rect: ['28px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Montserrat, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Pregunta 4</p>',
                            n: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '151px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_3}",
                            '0',
                            ''
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(152,161,96,1)'
                        ],
                        [
                            "eid4",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(62,81,0,1.00)'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_5}",
                            '0',
                            ''
                        ]
                    ]
                }
            },
            "btn_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'RoundRect3',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '151px', '31px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            br: null,
                            fill: ['rgba(152,161,96,1)']
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Text',
                            t: 'text',
                            rect: ['28px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Montserrat, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Pregunta 5</p>',
                            n: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '151px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_3}",
                            '0',
                            ''
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(152,161,96,1)'
                        ],
                        [
                            "eid4",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(152,161,96,1)',
                            'rgba(62,81,0,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("grafica_1_edgeActions.js");
})("EDGE-90437830");
