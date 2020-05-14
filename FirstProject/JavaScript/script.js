// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,

//         toolTip: {
//             shared: true,
//             content: toolTipContent
//         },
//         data: [{
//                 type: "stackedColumn",
//                 showInLegend: true,

//                 name: "Q1",
//                 dataPoints: [{
//                         y: 6.75,
//                         x: new Date(2010, 0)
//                     },
//                     {
//                         y: 8.57,
//                         x: new Date(2011, 0)
//                     },
//                     {
//                         y: 10.64,
//                         x: new Date(2012, 0)
//                     },
//                     {
//                         y: 13.97,
//                         x: new Date(2013, 0)
//                     },
//                     {
//                         y: 15.42,
//                         x: new Date(2014, 0)
//                     },
//                     {
//                         y: 17.26,
//                         x: new Date(2015, 0)
//                     },
//                     {
//                         y: 20.26,
//                         x: new Date(2016, 0)
//                     }
//                 ]
//             },
//             {
//                 type: "stackedColumn",
//                 showInLegend: true,

//             }
//         ]
//     });
//     chart.render();

//     function toolTipContent(e) {
//         var str = "";
//         var total = 0;
//         var str2, str3;
//         for (var i = 0; i < e.entries.length; i++) {
//             var str1 = "<span style= \"color:" + e.entries[i].dataSeries.color + "\"> " + e.entries[i].dataSeries.name + "</span>: $<strong>" + e.entries[i].dataPoint.y + "</strong>bn<br/>";
//             total = e.entries[i].dataPoint.y + total;
//             str = str.concat(str1);
//         }
//         str2 = "<span style = \"><strong>" + "</span><br/>";
//         total = Math.round(total * 100) / 100;

//         return (str2.concat(str));
//     }

// }


// THIS IS THE REAPCE CONTNT METHOD TO RWEPLACED THE DATA

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "My First Chart in CanvasJS"
        },
        data: [{
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [{
                    label: "apple",
                    y: 10
                },
                {
                    label: "orange",
                    y: 15
                },
                {
                    label: "banana",
                    y: 25
                },
                {
                    label: "mango",
                    y: 30
                },
                {
                    label: "grape",
                    y: 28
                }
            ]
        }]
    });
    chart.render();
}