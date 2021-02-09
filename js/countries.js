"use strict";

const countries = {
    USA: {
        name: 'United States',
        flag: 'img/'
    },
    AUS: {
        name: 'Australia',
        flag: 'img/'
    },
    DNK: {
        name: 'Denmark',
        flag: 'img/'
    },
    RUS: {
        name: 'Russia',
        flag: 'img/'
    },
    DEU: {
        name: 'Germany',
        flag: 'img/'
    },
    TUR: {
        name: 'Turkey',
        flag: 'img/'
    },
    BRA: {
        name: 'Brazil',
        flag: 'img/'
    },
    CAN: {
        name: 'Canada',
        flag: 'img/'
    },
    UZB: {
        name: 'Uzbekistan',
        flag: 'img/'
    },
    KAZ: {
        name: 'Kazakhstan',
        flag: 'img/'
    },
    LVA: {
        name: 'Latvia',
        flag: 'img/'
    },
    BIH: {
        name: 'Bosnia and Herzegovina',
        flag: 'img/'
    },
    FRA: {
        name: 'France',
        flag: 'img/'
    },
    SRB: {
        name: 'Serbia',
        flag: 'img/'
    },
    FIN: {
        name: 'Finland',
        flag: 'img/'
    },
    JOR: {
        name: 'Jordan',
        flag: 'img/'
    },
    AIA: {
        name: 'United Kingdom',
        flag: 'img/'
    },
    SVK: {
        name: 'Slovakia',
        flag: 'img/'
    },
    EST: {
        name: 'Estonia',
        flag: 'img/'
    },
    LTU: {
        name: 'Lithuania',
        flag: 'img/'
    },
    SWE: {
        name: 'Sweden',
        flag: 'img/'
    },
    BGR: {
        name: 'Bulgaria',
        flag: 'img/'
    },
    UKR: {
        name: 'Ukraine',
        flag: 'img/'
    },
    NLD: {
        name: 'Netherlands',
        flag: 'img/'
    },
    MNE: {
        name: 'Montenegro',
        flag: 'img/'
    },
    NOR: {
        name: 'Norway',
        flag: 'img/'
    },
    ESP: {
        name: 'Spain',
        flag: 'img/'
    },
    PRT: {
        name: 'Portugal',
        flag: 'img/'
    },
    IDN: {
        name: 'Indonesia',
        flag: 'img/'
    },
    BLR: {
        name: 'Belarus',
        flag: 'img/'
    },
    CZE: {
        name: 'Czech Republic',
        flag: 'img/'
    }
};

let countryNames = [];

function putCountryFlagPath() {
    for (let ISOCodes in countries) {
        if (typeof (countries[ISOCodes]) === "object") {
            // console.log(ISOCodes, typeof (countries[ISOCodes])
            countries[ISOCodes].flag = `img/countries/${countries[ISOCodes].name}.png`;
            if (countries[ISOCodes].name == 'United States') {
                countries.USA.flag = `img/countries/United_States.png`;
                countries.AIA.flag = `img/countries/United_Kingdom.png`;
                countries.BIH.flag = `img/countries/Bosnia_and_Herzegovina.png`;
                countries.CZE.flag = `img/countries/Czech_Republic.png`;
            }
        }
    }
}

function showOnlyNameOfCountries() {
    
    for (let ISOCodes in countries) {
        countryNames.push([countries[ISOCodes].name]);
    }
    console.log(countryNames);
}

putCountryFlagPath();

showOnlyNameOfCountries();