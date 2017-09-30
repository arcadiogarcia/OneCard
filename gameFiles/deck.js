CLOCKWORKRT.components.register([
    {
        name: "deck",
        events: [
            {
                name: "#setup", code: function () {
                    this.engine.var.fullDeck = [
                        'AaronGreenberg',
                        'AceyBongos',
                        'AgoSimonetta',
                        'AlexKipman',
                        'AndersHejlsberg',
                        'AndyWigley',
                        'BenRudolph',
                        'BillGates',
                        'BillKaragounis',
                        'BonnieRoss',
                        'BrandonLeBlanc',
                        'BryanRoper',
                        'ChrisCaposela',
                        'ChrisCharla',
                        'Clippy',
                        'Cortana',
                        'DaveCutler',
                        'DonaSarkar',
                        'EllenKilbourne',
                        'FrankShaw',
                        'GabeAul',
                        'JeffreySnover',
                        'JasonHoward',
                        'JenGentleman',
                        'JerryNixon',
                        'JoeBelfiore',
                        'JonathanSampson',
                        'JuliaWhite',
                        'JulieLarson-Green',
                        'KCLemson',
                        'KevinGallo',
                        'KudoTsunoda',
                        'LarryHyrb',
                        'MarcusAsh',
                        'MarkRussinovich',
                        'MattAkers',
                        'MikeYbarra',
                        'MiguelDeIcaza',
                        'Narhwal',
                        'NinjaCat',
                        'PanosPanay',
                        'PaulAllen',
                        'PhilSpencer',
                        'RichTurner',
                        'RodFergusson',
                        'SatyaNadella',
                        'ScottGuthrie',
                        'ScottHanselman',
                        'ShannonLoftis',
                        'SteveBallmer',
                        'SteveClayton',
                        'SteveGuggenheimer',
                        'TerryMyerson',
                        'TRex',
                        'Unicorn',
                        'YusefMehdi']
                }
            }
        ]
    },
    {
        name: "AaronGreenberg",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Aaron Greenberg" },
            { name: "$faceSrc", value: "/images/faces/AaronGreenberg.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 3,
                    community: 4,
                    hype: 0,
                    events: 4
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "AceyBongos",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Acey Bongos" },
            { name: "$faceSrc", value: "/images/faces/AceyBongos.png" },
            {
                name: "$stats", value: {
                    productivity: 1,
                    gamerscore: 3,
                    community: 4,
                    hype: 3,
                    events: 4
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "AgoSimonetta",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Ago Simonetta" },
            { name: "$faceSrc", value: "/images/faces/AgoSimonetta.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 4,
                    community: 2,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "AlexKipman",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Alex Kipman" },
            { name: "$faceSrc", value: "/images/faces/AlexKipman.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 3,
                    hype: 4,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "AndersHejlsberg",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Anders Hejlsberg" },
            { name: "$faceSrc", value: "/images/faces/AndersHejlsberg.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 2,
                    hype: 3,
                    events: 2
                }
            },
            { name: "$skill", value: ["Mobile first", "Open Sourcerer"] }
        ]
    },
    {
        name: "AndyWigley",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Andy Wigley" },
            { name: "$faceSrc", value: "/images/faces/AndyWigley.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 1,
                    community: 4,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "BenRudolph",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Ben Rudolph" },
            { name: "$faceSrc", value: "/images/faces/BenRudolph.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 1,
                    community: 4,
                    hype: 3,
                    events: 2
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "BillGates",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Bill Gates" },
            { name: "$faceSrc", value: "/images/faces/BillGates.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 2,
                    hype: 3,
                    events: 0
                }
            },
            { name: "$skill", value: ["Legacy software"] }
        ]
    },
    {
        name: "BillKaragounis",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Bill Karagounis" },
            { name: "$faceSrc", value: "/images/faces/BillKaragounis.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 2,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first", "Insider"] }
        ]
    },
    {
        name: "BonnieRoss",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Bonnie Ross" },
            { name: "$faceSrc", value: "/images/faces/BonnieRoss.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 4,
                    community: 2,
                    hype: 2,
                    events: 2
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "BrandonLeBlanc",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Brandon LeBlanc" },
            { name: "$faceSrc", value: "/images/faces/BrandonLeBlanc.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Insider"] }
        ]
    },
    {
        name: "BryanRoper",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Bryan Roper" },
            { name: "$faceSrc", value: "/images/faces/BryanRoper.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 3,
                    hype: 4,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first", "Ex-MSFT"] }
        ]
    },
    {
        name: "ChrisCaposela",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Chris Caposela" },
            { name: "$faceSrc", value: "/images/faces/ChrisCaposela.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 1,
                    hype: 3,
                    events: 3
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "ChrisCharla",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Chris Carla" },
            { name: "$faceSrc", value: "/images/faces/ChrisCharla.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 4,
                    community: 2,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "Clippy",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Clippy" },
            { name: "$faceSrc", value: "/images/faces/Clippy.png" },
            {
                name: "$stats", value: {
                    productivity: 1,
                    gamerscore: 0,
                    community: 0,
                    hype: 1,
                    events: 0
                }
            },
            { name: "$skill", value: ["Legacy software"] }
        ]
    },
    {
        name: "Cortana",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Cortana" },
            { name: "$faceSrc", value: "/images/faces/Cortana.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 2,
                    community: 4,
                    hype: 4,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "DaveCutler",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Dave Cutler" },
            { name: "$faceSrc", value: "/images/faces/DaveCutler.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 3,
                    community: 0,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "DonaSarkar",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Dona Sarkar" },
            { name: "$faceSrc", value: "/images/faces/DonaSarkar.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Insider"] }
        ]
    },
    {
        name: "EllenKilbourne",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Ellen Kilbourne" },
            { name: "$faceSrc", value: "/images/faces/EllenKilbourne.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 2,
                    community: 4,
                    hype: 3,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first", "Insider"] }
        ]
    },
    {
        name: "FrankShaw",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Frank Shaw" },
            { name: "$faceSrc", value: "/images/faces/FrankShaw.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 3,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "GabeAul",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Gabe Aul" },
            { name: "$faceSrc", value: "/images/faces/GabeAul.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 3,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first", "Insider"] }
        ]
    },
    {
        name: "JeffreySnover",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Jeffrey Snover" },
            { name: "$faceSrc", value: "/images/faces/JeffreySnover.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Cloud first", "Open Sourcerer"] }
        ]
    },
    {
        name: "JasonHoward",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Jason Howard" },
            { name: "$faceSrc", value: "/images/faces/JasonHoward.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Insider"] }
        ]
    },
    {
        name: "JenGentleman",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Jen Gentleman" },
            { name: "$faceSrc", value: "/images/faces/JenGentleman.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "JerryNixon",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Jerry Nixon" },
            { name: "$faceSrc", value: "/images/faces/JerryNixon.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 1,
                    community: 4,
                    hype: 3,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "JoeBelfiore",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Joe Belfiore" },
            { name: "$faceSrc", value: "/images/faces/JoeBelfiore.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 3,
                    events: 2
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "JonathanSampson",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Jonathan Sampson" },
            { name: "$faceSrc", value: "/images/faces/JonathanSampson.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 1,
                    community: 4,
                    hype: 2,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first", "Ex-MSFT"] }
        ]
    },
    {
        name: "JuliaWhite",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Julia White" },
            { name: "$faceSrc", value: "/images/faces/JuliaWhite.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 2,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "JulieLarson-Green",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Julie Larson-Green" },
            { name: "$faceSrc", value: "/images/faces/JulieLarson-Green.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 2,
                    hype: 3,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "KCLemson",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "KC Lemson" },
            { name: "$faceSrc", value: "/images/faces/KCLemson.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 3,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "KevinGallo",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Kevin Gallo" },
            { name: "$faceSrc", value: "/images/faces/KevinGallo.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 2,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "KudoTsunoda",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Kudo Tsunoda" },
            { name: "$faceSrc", value: "/images/faces/KudoTsunoda.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 4,
                    community: 2,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "LarryHyrb",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Larry Hyrb" },
            { name: "$faceSrc", value: "/images/faces/LarryHyrb.png" },
            {
                name: "$stats", value: {
                    productivity: 1,
                    gamerscore: 4,
                    community: 2,
                    hype: 4,
                    events: 4
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "MarcusAsh",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Marcus Ash" },
            { name: "$faceSrc", value: "/images/faces/MarcusAsh.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "MarkRussinovich",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Mark Russinovich" },
            { name: "$faceSrc", value: "/images/faces/MarkRussinovich.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 2,
                    hype: 3,
                    events: 3
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "MattAkers",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Matt Akers" },
            { name: "$faceSrc", value: "/images/faces/MattAkers.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 0
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "MikeYbarra",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Mike Ybarra" },
            { name: "$faceSrc", value: "/images/faces/MikeYbarra.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 4,
                    community: 3,
                    hype: 2,
                    events: 2
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "MiguelDeIcaza",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Miguel de Icaza" },
            { name: "$faceSrc", value: "/images/faces/MiguelDeIcaza.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 4,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first", "Open Sourcerer"] }
        ]
    },
    {
        name: "Narhwal",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Narhwal" },
            { name: "$faceSrc", value: "/images/faces/Narhwal.png" },
            {
                name: "$stats", value: {
                    productivity: 1,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 0
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "NinjaCat",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Ninja Cat" },
            { name: "$faceSrc", value: "/images/faces/NinjaCat.png" },
            {
                name: "$stats", value: {
                    productivity: 1,
                    gamerscore: 2,
                    community: 4,
                    hype: 3,
                    events: 0
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "PanosPanay",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Panos Panay" },
            { name: "$faceSrc", value: "/images/faces/PanosPanay.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 1,
                    community: 3,
                    hype: 4,
                    events: 2
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "PaulAllen",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Paul Allen" },
            { name: "$faceSrc", value: "/images/faces/PaulAllen.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 3,
                    hype: 1,
                    events: 0
                }
            },
            { name: "$skill", value: ["Legacy software", "Ex-MSFT"] }
        ]
    },
    {
        name: "PhilSpencer",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Phil Spencer" },
            { name: "$faceSrc", value: "/images/faces/PhilSpencer.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 4,
                    community: 4,
                    hype: 1,
                    events: 4
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "RichTurner",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Rich Turner" },
            { name: "$faceSrc", value: "/images/faces/RichTurner.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 2,
                    community: 3,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Open Sourcerer", "Mobile first"] }
        ]
    },
    {
        name: "RodFergusson",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Rod Fergusson" },
            { name: "$faceSrc", value: "/images/faces/RodFergusson.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 4,
                    community: 2,
                    hype: 3,
                    events: 2
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "SatyaNadella",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Satya Nadella" },
            { name: "$faceSrc", value: "/images/faces/SatyaNadella.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "ScottGuthrie",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Scott Guthrie" },
            { name: "$faceSrc", value: "/images/faces/ScottGuthrie.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 2
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "ScottHanselman",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Scott Hanselman" },
            { name: "$faceSrc", value: "/images/faces/ScottHanselman.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Cloud first", "Open Sourcerer"] }
        ]
    },
    {
        name: "ShannonLoftis",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Shannon Loftis" },
            { name: "$faceSrc", value: "/images/faces/ShannonLoftis.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 4,
                    community: 2,
                    hype: 3,
                    events: 4
                }
            },
            { name: "$skill", value: ["Team Xbox"] }
        ]
    },
    {
        name: "SteveBallmer",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Steve Ballmer" },
            { name: "$faceSrc", value: "/images/faces/SteveBallmer.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 1,
                    community: 3,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Legacy software"] }
        ]
    },
    {
        name: "SteveClayton",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Steve Clayton" },
            { name: "$faceSrc", value: "/images/faces/SteveClayton.png" },
            {
                name: "$stats", value: {
                    productivity: 3,
                    gamerscore: 2,
                    community: 4,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "SteveGuggenheimer",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Steve Guggenheimer" },
            { name: "$faceSrc", value: "/images/faces/SteveGuggenheimer.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 0,
                    community: 3,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Mobile first"] }
        ]
    },
    {
        name: "TerryMyerson",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Terry Myerson" },
            { name: "$faceSrc", value: "/images/faces/TerryMyerson.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 1,
                    community: 3,
                    hype: 2,
                    events: 3
                }
            },
            { name: "$skill", value: ["Mobile first", "Cloud first"] }
        ]
    },
    {
        name: "TRex",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "T-Rex" },
            { name: "$faceSrc", value: "/images/faces/TRex.png" },
            {
                name: "$stats", value: {
                    productivity: 2,
                    gamerscore: 0,
                    community: 4,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "Unicorn",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Unicorn" },
            { name: "$faceSrc", value: "/images/faces/Unicorn.png" },
            {
                name: "$stats", value: {
                    productivity: 0,
                    gamerscore: 2,
                    community: 4,
                    hype: 4,
                    events: 0
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    },
    {
        name: "YusefMehdi",
        inherits: "characterCard",
        vars: [
            { name: "$name", value: "Yusef Mehdi" },
            { name: "$faceSrc", value: "/images/faces/YusefMehdi.png" },
            {
                name: "$stats", value: {
                    productivity: 4,
                    gamerscore: 3,
                    community: 3,
                    hype: 2,
                    events: 1
                }
            },
            { name: "$skill", value: ["Cloud first"] }
        ]
    }
]);