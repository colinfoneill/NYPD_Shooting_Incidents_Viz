// establish link to the json data
var link = "https://data.cityofnewyork.us/resource/833y-fsy8.json";

//use promise function to return the json data to get victim race
d3.json(link).then(function(data) {
    console.log(data);
    
    // create empty arrays to store the victim's race from the data
    var black = [];
    var blackHispanic = [];
    var whiteHispanic = [];
    var white = [];
    var asian = [];
    var unknown = [];

    //create empty arrays to store each borough
    var queens = [];
    var bronx = [];
    var manhattan =[];
    var statenIsland = [];
    var brooklyn = [];

    //create empty arrays to store each perp race
    var blackPerp = [];
    var blackHispanicPerp = [];
    var whiteHispanicPerp = [];
    var whitePerp = [];
    var asianPerp = [];
    var unknownPerp = [];

    //create empty arrays to store victim ages
    var vic18 = [];
    var vic24 = [];
    var vic44 = [];
    var vic64 = [];
    var vic100 = [];
    var vicAgeUnknown = [];

    //create empty arrays to store perp ages
    var perp18 = [];
    var perp24 = [];
    var perp44 = [];
    var perp64 = [];
    var perp100 = [];
    var perpAgeUnknown = [];
    
    // loop through the json data and push each race into its corresponding array
    data.forEach(function(response) {

        // console.log(response.vic_race)
        
        if (response.vic_race == "BLACK") {
            black.push(response.vic_race)

        }

        else if (response.vic_race == "BLACK HISPANIC") {
            blackHispanic.push(response.vic_race)
        }

        else if (response.vic_race == "WHITE HISPANIC") {
            whiteHispanic.push(response.vic_race)
        }

        else if (response.vic_race == "WHITE") {
            white.push(response.vic_race)
        }

        else if (response.vic_race == "ASIAN / PACIFIC ISLANDER") {
            asian.push(response.vic_race)
        }

        else {
            unknown.push(response.vic_race)
        }
         
        //use the for each function to loop through the json data and get borough
        //Queens, Bronx, Brooklyn, Manhattan, Staten Island
        // console.log(response.boro)
        if (response.boro == "QUEENS") {
            queens.push(response.boro)
        }
        else if (response.boro == "BROOKLYN") {
            brooklyn.push(response.boro)
        }

        else if (response.boro == "MANHATTAN") {
            manhattan.push(response.boro)
        }

        else if (response.boro == "BRONX") {
            bronx.push(response.boro)
        }

        else if (response.boro == "STATEN ISLAND") {
            statenIsland.push(response.boro)
        }
        
        //use the for each function to loop through the json data and get perp race
        // console.log(response.perp_race)
        if (response.perp_race == "BLACK") {
            blackPerp.push(response.perp_race)

        }

        else if (response.perp_race == "BLACK HISPANIC") {
            blackHispanicPerp.push(response.perp_race)
        }

        else if (response.vic_race == "WHITE HISPANIC") {
            whiteHispanicPerp.push(response.perp_race)
        }

        else if (response.vic_race == "WHITE") {
            whitePerp.push(response.perp_race)
        }

        else if (response.vic_race == "ASIAN / PACIFIC ISLANDER") {
            asianPerp.push(response.perp_race)
        }

        else {
            unknownPerp.push(response.perp_race)
        }
        
        //use the for each function to loop through the json data and get victim age groups
        //<18, 18-24, 25-44, 45-64, 65+
        // console.log(response.vic_age_group)
        if (response.vic_age_group == "<18") {
            vic18.push(response.vic_age_group)
        }

        else if (response.vic_age_group == "18-24") {
            vic24.push(response.vic_age_group)
        }

        else if (response.vic_age_group == "25-44") {
            vic44.push(response.vic_age_group)
        }
        
        else if (response.vic_age_group == "45-64") {
            vic64.push(response.vic_age_group)
        }
        
        else if (response.vic_age_group == "65+") {
            vic100.push(response.vic_age_group)
        }

        else {
            vicAgeUnknown.push(response.vic_age_group)
        }

        //use the for each function to loop through the json data and get perp age groups
        //<18, 18-24, 25-44, 45-64, 65+
        // console.log(response.perp_age_group)
        if (response.perp_age_group == "<18") {
            perp18.push(response.perp_age_group)
        }

        else if (response.perp_age_group == "18-24") {
            perp24.push(response.perp_age_group)
        }

        else if (response.perp_age_group == "25-44") {
            perp44.push(response.perp_age_group)
        }
        
        else if (response.perp_age_group == "45-64") {
            perp64.push(response.perp_age_group)
        }
        
        else if (response.perp_age_group == "65+") {
            perp100.push(response.perp_age_group)
        }

        else {
            perpAgeUnknown.push(response.perp_age_group)
        }
    });

    //use the length function on each array to get a count of the races for victim race
    var blackCount = black.length;
        console.log("Black Victim Count: " + blackCount);

    var blackHispanicCount = blackHispanic.length;
        console.log("Black/His Victim Count: " + blackHispanicCount);

    var whiteHispanicCount = whiteHispanic.length;
        console.log("White/His Victim Count: " + whiteHispanicCount);

    var whiteCount = white.length;
        console.log("White Victim Count: " + whiteCount);

    var asianCount = asian.length;
        console.log("Asian Victim Count: " + asianCount);

    var unknownCount = unknown.length;
        console.log("Unknown Victim Count: " + unknownCount);

    //use length function on each borough array to get a count on boroughs
    var queensCount = queens.length;
        console.log("Queens: " + queensCount);

    var bronxCount = bronx.length;
        console.log("Bronx: " + bronxCount);

    var brooklynCount = brooklyn.length;
        console.log("Brooklyn: " + brooklynCount);

    var statenIslandCount = statenIsland.length;
        console.log("Staten Island: " + statenIslandCount);

    var manhattanCount = manhattan.length;
        console.log("Manhattan: " + manhattanCount);

    //use length function on each perp array to get a count on perp races
    var blackPerpCount = blackPerp.length;
        console.log("Black Perp Count: " + blackPerpCount);

    var blackHispanicPerpCount = blackHispanicPerp.length;
        console.log("Black/His Perp Count: " + blackHispanicPerpCount);

    var whiteHispanicPerpCount = whiteHispanicPerp.length;
        console.log("White/His Perp Count: " + whiteHispanicPerpCount);

    var whitePerpCount = whitePerp.length;
        console.log("White Perp Count: " + whitePerpCount);

    var asianPerpCount = asianPerp.length;
        console.log("Asian Perp Count: " + asianPerpCount);

    var unknownPerpCount = unknownPerp.length;
        console.log("Unknown Perp Count: " + unknownPerpCount);

    //use length function on each vicAge array to get a count on vic age groups
    var vic18Count = vic18.length
        console.log("Victim Age <18 Count: " + vic18Count)

    var vic24Count = vic24.length
        console.log("Victim Age 18-24 Count: " + vic24Count)
    
    var vic44Count = vic44.length
        console.log("Victim Age 25-44 Count: " + vic44Count)

    var vic64Count = vic64.length
        console.log("Victim Age 45-64 Count: " + vic64Count)

    var vic100Count = vic100.length
        console.log("Victim Age 65+ Count: " + vic100Count)

    var vicAgeUnknownCount = vicAgeUnknown.length
        console.log("Victim Age Unknown Count: " + vicAgeUnknownCount)

    //use length function on each perpAge array to get a count on perp age groups
    var perp18Count = perp18.length
        console.log("Perp Age <18 Count: " + perp18Count)

    var perp24Count = perp24.length
        console.log("Perp Age 18-24 Count: " + perp24Count)
    
    var perp44Count = perp44.length
        console.log("Perp Age 25-44 Count: " + perp44Count)

    var perp64Count = perp64.length
        console.log("Perp Age 45-64 Count: " + perp64Count)

    var perp100Count = perp100.length
        console.log("Perp Age 65+ Count: " + perp100Count)

    var perpAgeUnknownCount = perpAgeUnknown.length
        console.log("Perp Age Unknown Count: " + perpAgeUnknownCount)

    //plot a bar chart upon loading up the webpage
    var traceD = {
        x: ["Black", "Black Hispanic", "White Hispanic", "White", "Asian", "Unknown"],
        y: [blackCount, blackHispanicCount, whiteHispanicCount, whiteCount, asianCount, unknownCount],
        type: "bar"
    };

    var layout = {
        xaxis: {
            title: "<b>Victim Race</b>"
        },
        yaxis: {
            title: "<b>Frequency</b>"
        }
    };

    plot = [traceD]

    Plotly.newPlot("bar-plot", plot, layout)

    //add options to the dropdown menu
    options = ["Victim Race", "Victim Age", "Perpetrator Race", "Perpetrator Age", "Borough"]
    
    options.forEach(function(value) {
        
        var dropDown = d3.select("#selAttribute")
        var selection = dropDown.append("option");
        selection.attr("value", value);
        selection.text(value);

    });
    
    
    //write a function to display different graphs upon change of the dropdown menu selection
    function optionChanged() {
        //use d3 to select the drop down menu
        var dropDownMenu = d3.select("#selAttribute");

        //assign the value of the drop down menu selection to a variable
        var selection = dropDownMenu.property("value");

        //check which dataset matches the selection using an if statement
        if (selection == "Victim Age") {
            var traceVA = {
                x: ["<18", "18-24", "25-44", "45-64", "65+", "Unknown"],
                y: [vic18Count, vic24Count, vic44Count, vic64Count, vic100Count, vicAgeUnknownCount],
                type: "bar"
            };

            var layoutVA = {
                xaxis: {
                    title: "<b>Victim Age</b>"
                },
                yaxis: {
                    title: "<b>Frequency</b>"
                }
            };
        
            plotVA = [traceVA]
        
            Plotly.newPlot("bar-plot", plotVA, layoutVA)
        }

        else if (selection == "Victim Race") {
            var traceVR = {
                x: ["Black", "Black Hispanic", "White Hispanic", "White", "Asian", "Unknown"],
                y: [blackCount, blackHispanicCount, whiteHispanicCount, whiteCount, asianCount, unknownCount],
                type: "bar"
            };

            var layoutVR = {
                xaxis: {
                    title: "<b>Victim Race</b>"
                },
                yaxis: {
                    title: "<b>Frequency</b>"
                }
            };
        
            plotVR = [traceVR]
        
            Plotly.newPlot("bar-plot", plotVR, layoutVR)
        }

        else if (selection == "Perpetrator Race") {
            var tracePR = {
                x: ["Black", "Black Hispanic", "White Hispanic", "White", "Asian", "Unknown"],
                y: [blackPerpCount, blackHispanicPerpCount, whiteHispanicPerpCount, whitePerpCount, asianPerpCount, unknownPerpCount],
                type: "bar"
            };

            var layoutPR = {
                xaxis: {
                    title: "<b>Perpetrator Race</b>"
                },
                yaxis: {
                    title: "<b>Frequency</b>"
                }
            };
        
            plotPR = [tracePR]
        
            Plotly.newPlot("bar-plot", plotPR, layoutPR)
        }

        else if (selection == "Perpetrator Age") {
            var tracePA = {
                x: ["<18", "18-24", "25-44", "45-64", "65+", "Unknown"],
                y: [perp18Count, perp24Count, perp44Count, perp64Count, perp100Count, perpAgeUnknownCount],
                type: "bar"
            };

            var layoutPA = {
                xaxis: {
                    title: "<b>Perpetrator Age</b>"
                },
                yaxis: {
                    title: "<b>Frequency</b>"
                }
            };
        
            plotPA = [tracePA]
        
            Plotly.newPlot("bar-plot", plotPA, layoutPA) 
        }

        else {
            var traceB = {
                x: ["Queens", "Bronx", "Brooklyn", "Staten Island", "Manhattan"],
                y: [queensCount, bronxCount, brooklynCount, statenIslandCount, manhattanCount],
                type: "bar"
            };

            var layoutB = {
                xaxis: {
                    title: "<b>Borough</b>"
                },
                yaxis: {
                    title: "<b>Frequency</b>"
                }
            };

        
            plotB = [traceB]
        
            Plotly.newPlot("bar-plot", plotB, layoutB)  
        }
    };

    // select the drop down menu to call a function to chart the option selected
    d3.selectAll("#selAttribute").on("change", optionChanged);
});







