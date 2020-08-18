var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-door",
      "name": "Front Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9916206965971526,
        "pitch": 0.1805200543660419,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.396047748236529,
          "pitch": 0.512193342359998,
          "rotation": 6.283185307179586,
          "target": "1-enter-hallway"
        },
        {
          "yaw": 1.5155195917057842,
          "pitch": 0.7330419692773784,
          "rotation": 5.497787143782138,
          "target": "14-living-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-enter-hallway",
      "name": "Enter Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1184949198673095,
        "pitch": 0.22724469143176407,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.098713475213838,
          "pitch": 0.6851681891143002,
          "rotation": 0.7853981633974483,
          "target": "2-hallway-1"
        },
        {
          "yaw": 3.0824064855927595,
          "pitch": 0.3689893914205111,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 0.03571246503966563,
          "pitch": 0.45720994693623496,
          "rotation": 0,
          "target": "0-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway-1",
      "name": "Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.044441434695658,
        "pitch": 0.20992541158249267,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.393959991866728,
          "pitch": 0.8583208836895455,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 2.4209536549794572,
          "pitch": 0.46981609062024354,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": -2.084156163940392,
          "pitch": 0.3299435790551435,
          "rotation": 0,
          "target": "5-dining-2"
        },
        {
          "yaw": -3.048311080839241,
          "pitch": 0.6024174789898087,
          "rotation": 0,
          "target": "4-dining-1"
        },
        {
          "yaw": -3.056106556148375,
          "pitch": 0.32620693282771995,
          "rotation": 0,
          "target": "6-enter-kitchen"
        },
        {
          "yaw": -0.6682421216829262,
          "pitch": 0.2859618582207659,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": -0.6923226095651138,
          "pitch": 0.7311839319210591,
          "rotation": 0,
          "target": "1-enter-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway-2",
      "name": "Hallway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15976811912056554,
        "pitch": 0.0837464169739448,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.02138880042999247,
          "pitch": 0.7134445739055231,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": 0.00030645064673606726,
          "pitch": 0.5280231598695728,
          "rotation": 0,
          "target": "12-hall-closet"
        },
        {
          "yaw": 0.0002849955952886063,
          "pitch": 0.3659825156952152,
          "rotation": 0,
          "target": "13-hall-bathroom"
        },
        {
          "yaw": -3.016041466632796,
          "pitch": 0.8632641311037101,
          "rotation": 0,
          "target": "2-hallway-1"
        },
        {
          "yaw": -3.0307132056116224,
          "pitch": 0.24377643157161977,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": -3.0321536532200746,
          "pitch": 0.4338724895311046,
          "rotation": 0,
          "target": "1-enter-hallway"
        },
        {
          "yaw": 2.151265171185445,
          "pitch": 0.24343885624103478,
          "rotation": 0,
          "target": "5-dining-2"
        },
        {
          "yaw": -1.6049755937507122,
          "pitch": 0.6515622987432863,
          "rotation": 0,
          "target": "17-living-room-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-1",
      "name": "Dining 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.05977642718376508,
        "pitch": 0.44492096236918144,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.169648998912427,
          "pitch": 0.6563887153233114,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 0.3315646523029798,
          "pitch": 0.4604540826096919,
          "rotation": 0,
          "target": "5-dining-2"
        },
        {
          "yaw": -1.6949160679979673,
          "pitch": 0.7064852025050108,
          "rotation": 0,
          "target": "6-enter-kitchen"
        },
        {
          "yaw": -1.6729139765799879,
          "pitch": 0.35645871459012746,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-2",
      "name": "Dining 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.556044750506233,
        "pitch": 0.14059246970777295,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.5989630992378494,
          "pitch": 0.403258711633411,
          "rotation": 0,
          "target": "4-dining-1"
        },
        {
          "yaw": 2.9329380406031538,
          "pitch": 0.4081546715906388,
          "rotation": 0,
          "target": "6-enter-kitchen"
        },
        {
          "yaw": 1.955247643398721,
          "pitch": 0.383740680119228,
          "rotation": 0,
          "target": "3-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-enter-kitchen",
      "name": "Enter Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.48207932402398,
        "pitch": 0.24160567615881945,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.5639755427714093,
          "pitch": 0.5282216042244858,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.3978894564080768,
          "pitch": 0.3909010590667137,
          "rotation": 0,
          "target": "5-dining-2"
        },
        {
          "yaw": -0.06876737854588377,
          "pitch": 0.8840744034688175,
          "rotation": 0,
          "target": "4-dining-1"
        },
        {
          "yaw": -0.06608225661973854,
          "pitch": 0.46720335008742353,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 1.1232404774281939,
          "pitch": 0.3811901507048283,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": 2.170023351428487,
          "pitch": 0.16758927792308853,
          "rotation": 0,
          "target": "8-exit-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0407162748734855,
        "pitch": 0.37749513038991545,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.7596499356796045,
          "pitch": 0.4966011456417405,
          "rotation": 0,
          "target": "8-exit-kitchen"
        },
        {
          "yaw": -0.4490274508363008,
          "pitch": 0.7228717603254537,
          "rotation": 0,
          "target": "6-enter-kitchen"
        },
        {
          "yaw": -0.37389644199960514,
          "pitch": 0.42621493791372345,
          "rotation": 0,
          "target": "4-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-exit-kitchen",
      "name": "Exit Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.08995158452585983,
        "pitch": 0.634611737513648,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.25265211158655987,
          "pitch": 0.9179947580567536,
          "rotation": 1.5707963267948966,
          "target": "9-out-back-door"
        },
        {
          "yaw": -2.9756371773491725,
          "pitch": 0.6204807426098125,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -2.2206785138062095,
          "pitch": 0.42734474441307846,
          "rotation": 0,
          "target": "8-exit-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-out-back-door",
      "name": "Out Back Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.0805914215439465,
        "pitch": 0.38058093935935844,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.089697862350002,
          "pitch": 0.6143455432381089,
          "rotation": 0,
          "target": "8-exit-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hallway-3",
      "name": "Hallway 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1919758072984585,
        "pitch": 0.30364662497564865,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.0892652162195375,
          "pitch": 0.887642210753528,
          "rotation": 0,
          "target": "12-hall-closet"
        },
        {
          "yaw": -1.9446898970719815,
          "pitch": 0.5621990237185841,
          "rotation": 0,
          "target": "13-hall-bathroom"
        },
        {
          "yaw": -3.0692628353497913,
          "pitch": 0.4503709735958292,
          "rotation": 0,
          "target": "11-study-room-1"
        },
        {
          "yaw": -0.2083417155401044,
          "pitch": 0.48482908399703106,
          "rotation": 4.71238898038469,
          "target": "6-enter-kitchen"
        },
        {
          "yaw": 1.333542430167423,
          "pitch": 0.7305415983127279,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 1.3102314374075732,
          "pitch": 0.16147535203631946,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": 1.3097288542169583,
          "pitch": 0.4478642119694811,
          "rotation": 0,
          "target": "2-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-study-room-1",
      "name": "Study Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0172475695353054,
        "pitch": 0.36395336094140873,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.4258036269116694,
          "pitch": 0.7098318359450175,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": 0.917012716357906,
          "pitch": 0.6208908817108103,
          "rotation": 0,
          "target": "17-living-room-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hall-closet",
      "name": "Hall Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9886176094152592,
        "pitch": 0.057180317217571996,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.950520436150679,
          "pitch": 0.740261550025517,
          "rotation": 0,
          "target": "13-hall-bathroom"
        },
        {
          "yaw": -0.00818580471060315,
          "pitch": 0.9198573752666075,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": 0.06501885844447841,
          "pitch": 0.5322319370166682,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 0.1127351487224022,
          "pitch": 0.1395750227912842,
          "rotation": 0,
          "target": "0-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-hall-bathroom",
      "name": "Hall Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.0501063776027415,
        "pitch": 0.4326347980578227,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.46669155308926946,
          "pitch": 0.878703802056819,
          "rotation": 0,
          "target": "12-hall-closet"
        },
        {
          "yaw": 0.39345269313922593,
          "pitch": 0.6085174406831602,
          "rotation": 0,
          "target": "10-hallway-3"
        },
        {
          "yaw": 0.32555909999845056,
          "pitch": 0.12509857081314024,
          "rotation": 0,
          "target": "0-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-living-room-1",
      "name": "Living Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.0845813406735747,
        "pitch": 0.17493695990111746,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.9223347173488357,
          "pitch": 0.45967477761251274,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": 0.499239504718739,
          "pitch": 0.6333854527555811,
          "rotation": 6.283185307179586,
          "target": "15-living-room-2"
        },
        {
          "yaw": 0.7504369696546416,
          "pitch": 0.34607418673044776,
          "rotation": 6.283185307179586,
          "target": "17-living-room-4"
        },
        {
          "yaw": 0.3417373960507142,
          "pitch": 0.16088477821195113,
          "rotation": 6.283185307179586,
          "target": "18-living-room-5"
        },
        {
          "yaw": 1.0445930625473157,
          "pitch": 0.13521614146295668,
          "rotation": 1.5707963267948966,
          "target": "3-hallway-2"
        },
        {
          "yaw": 0.9048860891108994,
          "pitch": 0.09858779235837645,
          "rotation": 0,
          "target": "11-study-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-living-room-2",
      "name": "Living Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5584056409233877,
        "pitch": 0.4980412733715447,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.7996106926941913,
          "pitch": 0.4188172292882193,
          "rotation": 5.497787143782138,
          "target": "0-front-door"
        },
        {
          "yaw": -1.4559589422420736,
          "pitch": 0.560451121152056,
          "rotation": 0,
          "target": "14-living-room-1"
        },
        {
          "yaw": -0.6025911173819356,
          "pitch": 0.38820608027446823,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": 2.262115369281431,
          "pitch": 0.4525799473845957,
          "rotation": 0,
          "target": "17-living-room-4"
        },
        {
          "yaw": 1.5245744106643428,
          "pitch": 0.22405579829320033,
          "rotation": 0,
          "target": "18-living-room-5"
        },
        {
          "yaw": 2.8142468385429584,
          "pitch": 0.19087085109405422,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 2.398723844344298,
          "pitch": 0.07548689881885018,
          "rotation": 0,
          "target": "11-study-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-living-room-3",
      "name": "Living Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.585528312884467,
        "pitch": 0.22027845434358184,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.74742782957831,
          "pitch": 0.4123397229090582,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": -2.094154712319586,
          "pitch": 0.4808228627069546,
          "rotation": 0,
          "target": "14-living-room-1"
        },
        {
          "yaw": -2.435165196940023,
          "pitch": 0.37846613084991176,
          "rotation": 0,
          "target": "15-living-room-2"
        },
        {
          "yaw": -2.81942507275523,
          "pitch": 0.1686905917542454,
          "rotation": 0,
          "target": "17-living-room-4"
        },
        {
          "yaw": 3.0984391791160792,
          "pitch": 0.1394287089255517,
          "rotation": 0,
          "target": "18-living-room-5"
        },
        {
          "yaw": -2.5172780227922775,
          "pitch": 0.035135040136315965,
          "rotation": 1.5707963267948966,
          "target": "3-hallway-2"
        },
        {
          "yaw": -2.730853387042213,
          "pitch": 0.038137934309773414,
          "rotation": 0,
          "target": "11-study-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-living-room-4",
      "name": "Living Room 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5351557178129305,
        "pitch": 0.3343420057819433,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.5986194704594805,
          "pitch": 0.07549570915296222,
          "rotation": 4.71238898038469,
          "target": "0-front-door"
        },
        {
          "yaw": -1.9361195913618001,
          "pitch": 0.12632893674720336,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": -2.3124985154319404,
          "pitch": 0.4497259580571473,
          "rotation": 0,
          "target": "15-living-room-2"
        },
        {
          "yaw": -2.283678573234864,
          "pitch": 0.23344341255792145,
          "rotation": 0,
          "target": "14-living-room-1"
        },
        {
          "yaw": -0.5040658287019699,
          "pitch": 0.5648064420469794,
          "rotation": 0,
          "target": "18-living-room-5"
        },
        {
          "yaw": 1.0876288650465877,
          "pitch": 0.4840392563564073,
          "rotation": 0,
          "target": "11-study-room-1"
        },
        {
          "yaw": 2.4203911135871365,
          "pitch": 0.6057588217956003,
          "rotation": 0,
          "target": "3-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-living-room-5",
      "name": "Living Room 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.849737728311581,
        "pitch": 0.20333423468876788,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.893495448589052,
          "pitch": 0.40611684239811474,
          "rotation": 0,
          "target": "15-living-room-2"
        },
        {
          "yaw": -2.172047328153699,
          "pitch": 0.09769398950768604,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": -2.64654663199072,
          "pitch": 0.2539429492601464,
          "rotation": 0,
          "target": "14-living-room-1"
        },
        {
          "yaw": -2.814443388135274,
          "pitch": 0.07171400565304076,
          "rotation": 0,
          "target": "0-front-door"
        },
        {
          "yaw": 2.6238714825170275,
          "pitch": 0.35872325788462334,
          "rotation": 0,
          "target": "3-hallway-2"
        },
        {
          "yaw": 2.0770612356860036,
          "pitch": 0.18723496566878062,
          "rotation": 4.71238898038469,
          "target": "11-study-room-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Volunteer House - 1st Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
