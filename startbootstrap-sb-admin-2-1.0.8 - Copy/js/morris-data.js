$(function() {

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Submitted",
            value: 25
        }, {
            label: "Not Submitted",
            value: 13
        }],
        resize: true
    });

});

