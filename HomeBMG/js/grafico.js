   var ctx = document.getElementsByClassName("bmg-chart");
   var myChart = new Chart(ctx, {
    type: 'bar',    
    data:
    {  
        labels: ["POUPANÇA", "CDB"],
        fontFamily: "Roboto",
        datasets: 
        [{
            data: [15.794, 22.253],           
            backgroundColor: 
            [
            "#6edfd1",
            "#e6842c"
            ],
            hoverBackgroundColor: 
            [
            "#6edfd1",
            "#e6842c"
            ]

        }]
    },
    options: 
    {   
        tooltips: false,
        scales: {
            xAxes:[{   
                gridLines: {
                    display: false,
                },
                ticks: { 
                    fontFamily: "Roboto",
                    fontSize: 20,
                    fontStyle: "bold",  
                    beginAtZero: true
                }        
            }],
            yAxes:[{    
                gridLines: {
                    display: false,
                },
                display:false,
                ticks: { 
                    beginAtZero: true
                } 
            }]
        },

        legend: 
        {
            display:true, 
            labels:
            {
                fontColor: 'black'
            },


            display: false
        },
            // cutoutPercentage: 85

            hover: {
                animationDuration: 0
            },
            animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function () {
                    var ctx = this.chart.ctx; 
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';


                    var fontSize = 20;
                    var fontStyle = 'bold';
                    var fontFamily = 'Roboto';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);


                    this.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                            scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                            ctx.fillStyle = '#fff';
                            var y_pos = model.y + 25;
                                    // Make sure data value does not get overflown and hidden
                                    // when the bar's value is too close to max value of scale
                                    // Note: The y value is reverse, it counts from top down
                                    if ((scale_max - model.y) / scale_max >= 0.93)
                                        y_pos = model.y + 25; 
                                    ctx.fillText("R$ "+dataset.data[i], model.x, y_pos);

                                }
                            });               
                }
            }

        }

    });

