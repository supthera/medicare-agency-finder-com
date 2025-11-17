(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/types/agency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Database schema types for Medicare Home Health Care Agencies
__turbopack_context__.s([
    "US_STATES",
    ()=>US_STATES
]);
const US_STATES = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    DC: "District of Columbia"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/us-map-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// US Map SVG paths - accurate coordinates for all 50 states
__turbopack_context__.s([
    "STATE_LABELS",
    ()=>STATE_LABELS,
    "US_MAP_PATHS",
    ()=>US_MAP_PATHS
]);
const US_MAP_PATHS = {
    HI: {
        d: "M407.2,519.3l2.2,1.5l0.7,2.7l-1.2,0.7l-2.2-1.2l-1-2L407.2,519.3zM417.5,520.5l3.5,2l0.2,1.5l-1,0.7l-3.5-1.2L417.5,520.5zM.438.5,523.3l4.2,2.5l1,2.2l-0.2,1l-2.5,0.5l-3.7-2.7L438.5,523.3z",
        name: "Hawaii"
    },
    AK: {
        d: "M124.5,636.5l73.6,3.3l6.1,48.7l-10.6,21.3l-32.7,22.6l-10.7-1.3l-15.3-23.9l-7.9-23.9l-2.5-19.9L124.5,636.5zM147.7,722l1.3,2l2.6,1.3l2-0.7l0.7-2l-1.3-2l-2.6-0.7L147.7,722zM143.7,728l2.6,2l2.6-0.7l1.3-2.6l-1.3-2l-2.6-1.3l-2.6,0.7L143.7,728z",
        name: "Alaska"
    },
    ME: {
        d: "M893.5,90.9l1.6,7.8l-2.8,5.3l-3,0.3l-2.6,2.9l0.3,4.9l-2.3,3.4l1.6,2.8l-1.3,1.9l-4.3,0.3l-3.6-1.3l-0.7-3.1l-3.3-3.9l-1.6-5.8l0.3-3.9l-1.3-5.2l-2.6-3.4l3-4.5l4.3,0.3l3,1.9l5.9,2.6L893.5,90.9z",
        name: "Maine"
    },
    RI: {
        d: "M871.5,172.5l2.5,3l-0.5,1.5l-1.5,0.5l-2-1.5l-1.5-2l-0.5-2L871.5,172.5z",
        name: "Rhode Island"
    },
    VT: {
        d: "M854.5,120.5l1.5,3l2,5.5l-1,5.5l0.5,4l2,4.5l1,5.5l0,4l-2,0.5l-1-3.5l-3-3l-2-5l-2.5-6l-1.5-6.5l-0.5-5.5L854.5,120.5z",
        name: "Vermont"
    },
    NH: {
        d: "M865.5,120.5l1.5,4.5l1,6.5l0,5.5l-2.5,5l-1.5,5.5l-2.5,2l-1.5-2l-2-4.5l-0.5-4l1-5.5l-2-5.5l-1.5-3l1.5-2.5L865.5,120.5z",
        name: "New Hampshire"
    },
    MA: {
        d: "M860.5,155.5l2.5,3.5l3.5,2.5l7,3l4.5,0.5l2.5,2.5l-1.5,1.5l-2.5-0.5l-6-2.5l-5.5-2.5l-4-2.5l-2.5-3.5L860.5,155.5zM868,170l2,3l1.5,0.5l1-1l0.5-2l-1.5-2l-2-1L868,170z",
        name: "Massachusetts"
    },
    CT: {
        d: "M850.5,165.5l2.5,3.5l4,2.5l5.5,2.5l2.5,3.5l-0.5,2.5l-8-1.5l-7-2l-4.5-3l1-3.5L850.5,165.5z",
        name: "Connecticut"
    },
    NY: {
        d: "M790.5,150.5l4.5,1.5l6,4.5l7,5.5l7.5,3.5l8.5,4.5l3.5,3.5l-2.5,2l-10.5-1.5l-8-2l-6.5-2.5l-8.5-3.5l-7-5l-6.5-6l-0.5-4.5l3-2.5L790.5,150.5z",
        name: "New York"
    },
    NJ: {
        d: "M830.5,200.5l2.5,4l2,5l1.5,5l0.5,4.5l-2.5,2l-2-2.5l-2.5-4.5l-2-5.5l-1.5-5l1-3L830.5,200.5z",
        name: "New Jersey"
    },
    PA: {
        d: "M760.5,200.5l8,2l10.5,1.5l8.5,3.5l6.5,2.5l8,2l-1,3.5l-3,2.5l-8.5,2l-10,1.5l-10.5,0.5l-10-1.5l-8-3l-2.5-3l2.5-2.5l4-2.5L760.5,200.5z",
        name: "Pennsylvania"
    },
    DE: {
        d: "M820.5,220.5l1,3l1.5,5l-0.5,4.5l-2,2l-1.5-2.5l-1-4l-0.5-4.5l1-2.5L820.5,220.5z",
        name: "Delaware"
    },
    MD: {
        d: "M790.5,240.5l8.5,2l10,1.5l2,2.5l-1,3l-2.5,2l-3,0.5l-8.5-2l-8-2.5l-6-3l1.5-3L790.5,240.5z",
        name: "Maryland"
    },
    VA: {
        d: "M760.5,280.5l8,2.5l10,2l10.5,1.5l8.5,2l3,2.5l-1,3l-3,2.5l-10,1.5l-10-1.5l-10-2.5l-8.5-3.5l-6.5-4l1.5-3L760.5,280.5z",
        name: "Virginia"
    },
    WV: {
        d: "M740.5,270.5l6.5,3l8.5,3.5l10,2.5l6,3l-1.5,3l-6,3.5l-8,2.5l-10,1.5l-8.5-2l-6.5-3.5l-4-4l2-3.5L740.5,270.5z",
        name: "West Virginia"
    },
    OH: {
        d: "M680.5,240.5l8.5,2l10,1.5l10.5,1.5l8,2.5l3,3l-2,3.5l-8,2.5l-10,1.5l-10-1.5l-10-2l-8.5-2.5l-6-3l2-3L680.5,240.5z",
        name: "Ohio"
    },
    IN: {
        d: "M620.5,240.5l6,2l8.5,2.5l10,2l10,1.5l8,2.5l-2,3l-8,2.5l-10,1.5l-10-1.5l-8.5-2l-7-3l-4.5-3.5l2-3L620.5,240.5z",
        name: "Indiana"
    },
    IL: {
        d: "M580.5,220.5l6,2.5l8.5,3l10,3.5l10.5,4l7.5,3.5l2,3.5l-4.5,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3.5l-5-4.5l-3.5-5l2-3.5L580.5,220.5z",
        name: "Illinois"
    },
    MI: {
        d: "M640.5,160.5l6,3l8,3.5l10,3.5l10,2.5l8,2l-2,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3.5l-5-4.5l2-3.5L640.5,160.5zM620.5,140.5l4.5,2.5l6.5,2.5l2,2.5l-1.5,2l-6.5-1.5l-5-2.5l-2-2.5L620.5,140.5z",
        name: "Michigan"
    },
    WI: {
        d: "M580.5,140.5l6,2.5l8.5,3.5l10,3.5l10.5,3.5l8,3l-2,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3.5l-5-4.5l-3.5-5l2-3.5L580.5,140.5z",
        name: "Wisconsin"
    },
    MN: {
        d: "M480.5,100.5l6,2.5l10,3.5l10.5,4l10,3.5l8,3l2,3.5l-3.5,5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3.5l-5-4.5l-3.5-5l2-3.5L480.5,100.5z",
        name: "Minnesota"
    },
    IA: {
        d: "M500.5,200.5l6,2.5l10,3l10.5,3.5l10,3.5l8,3l-2,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3l-5-4l-3.5-4.5l2-3.5L500.5,200.5z",
        name: "Iowa"
    },
    MO: {
        d: "M540.5,280.5l6,2.5l10,3l10.5,3.5l10,3.5l8,3l-2,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3l-5-4l-3.5-4.5l2-3.5L540.5,280.5z",
        name: "Missouri"
    },
    AR: {
        d: "M520.5,340.5l6,2.5l10,3l10.5,3.5l10,3.5l8,3l-2,3.5l-8,2.5l-10,2l-10-1.5l-8.5-2.5l-7-3l-5-4l-3.5-4.5l2-3.5L520.5,340.5z",
        name: "Arkansas"
    },
    ND: {
        d: "M380.5,90.5l12,0.5l25,1l25,0.5l20,0.5l2,2.5l1,20l0.5,20l-1,10l-3,2l-20-0.5l-25-1l-25-0.5l-12-0.5l-2-2.5l0-20l0.5-20L380.5,90.5z",
        name: "North Dakota"
    },
    SD: {
        d: "M380.5,160.5l12,0.5l25,1l25,0.5l20,0.5l2,2.5l1,20l0.5,20l-1,10l-3,2l-20-0.5l-25-1l-25-0.5l-12-0.5l-2-2.5l0-20l0.5-20L380.5,160.5z",
        name: "South Dakota"
    },
    NE: {
        d: "M380.5,220.5l12,0.5l25,1l25,0.5l25,0.5l20,0.5l2,2.5l1,20l0.5,15l-1,10l-3,2l-20-0.5l-25-1l-25-0.5l-25-0.5l-12-0.5l-2-2.5l0-20l0.5-15L380.5,220.5z",
        name: "Nebraska"
    },
    KS: {
        d: "M400.5,280.5l12,0.5l25,1l25,0.5l25,0.5l20,0.5l2,2.5l1,15l0.5,15l-1,8l-3,2l-20-0.5l-25-1l-25-0.5l-25-0.5l-12-0.5l-2-2.5l0-15l0.5-15L400.5,280.5z",
        name: "Kansas"
    },
    OK: {
        d: "M400.5,340.5l12,0.5l25,1l25,0.5l35,1l20,0.5l2,2.5l1,15l0.5,15l-1,8l-3,2l-20-0.5l-35-1l-25-0.5l-25-1l-12-0.5l-2-2.5l0-15l0.5-15L400.5,340.5z",
        name: "Oklahoma"
    },
    LA: {
        d: "M550.5,430.5l6,2.5l10,2.5l10,2l10,2l8,2.5l4,3l-2,3.5l-8,2.5l-10,2l-10-1l-8-2l-7-2.5l-5-3l-3-3.5l2-3.5L550.5,430.5z",
        name: "Louisiana"
    },
    TX: {
        d: "M340.5,380.5l10,3l15,4.5l20,6l20,8l15,8l10,10l8,12l6,14l3,12l0,10l-2,8l-4,6l-8,4l-10,2l-10,0l-12-2l-15-5l-18-8l-20-12l-18-14l-15-14l-10-12l-6-10l-3-8l0-6l2-4l6-3L340.5,380.5z",
        name: "Texas"
    },
    KY: {
        d: "M640.5,300.5l8,2.5l10,2l10.5,2l10,2l8,2.5l3,3l-2,3l-8,2.5l-10,2l-10-1.5l-10-2l-8.5-2.5l-6-3l2-3L640.5,300.5z",
        name: "Kentucky"
    },
    TN: {
        d: "M640.5,340.5l8,2.5l10,2l10.5,2l10,2l10,2l10,2l3,3l-2,3l-10,2l-10,1.5l-10-1l-10-2l-10-2l-8.5-2.5l-6-3l2-3L640.5,340.5z",
        name: "Tennessee"
    },
    MS: {
        d: "M600.5,380.5l4,2l6,2.5l8,2.5l8,3l6,3.5l4,4l2,4.5l0,4.5l-2,4l-4,3l-6,2l-8,0.5l-8-1l-6-2.5l-4-3.5l-3-4.5l-1-5l0-4.5l1.5-4.5L600.5,380.5z",
        name: "Mississippi"
    },
    AL: {
        d: "M650.5,405.5l4,2l6,2.5l8,3l8,3.5l6,4l4,4.5l2,5l0,5l-2,4.5l-4,3.5l-6,2.5l-8,1l-8-0.5l-6-2l-4-3l-3-4l-1-4.5l0-5l1.5-5L650.5,405.5z",
        name: "Alabama"
    },
    FL: {
        d: "M700.5,450.5l4,2.5l6,4l6,5l4,6l2,7l0,8l-1,8l-3,7l-5,5l-7,3l-8,1l-8-1l-7-3l-5-5l-3-7l-1-8l0-8l2-7l4-6l6-5l6-4L700.5,450.5z",
        name: "Florida"
    },
    GA: {
        d: "M680.5,380.5l4,2l6,2.5l8,3l8,3.5l6,4l4,4.5l2,5l0,5l-2,5l-4,4l-6,3l-8,1.5l-8,0l-6-2l-4-3l-3-4l-1-5l0-5l1.5-5L680.5,380.5z",
        name: "Georgia"
    },
    SC: {
        d: "M720.5,350.5l5,2.5l8,3l8,3.5l6,4l4,4l2,4.5l-1,4.5l-4,3.5l-6,2.5l-8,1l-8-0.5l-6-2l-4-3l-2-3.5l0-4l1.5-4L720.5,350.5z",
        name: "South Carolina"
    },
    NC: {
        d: "M740.5,320.5l8,3l10,3.5l10,3.5l10,3l8,2.5l3,3l-2,3l-8,2.5l-10,2l-10-1.5l-10-2l-8-2.5l-6-3l2-3L740.5,320.5z",
        name: "North Carolina"
    },
    MT: {
        d: "M160.5,80.5l20,0.5l30,1l30,0.5l30,0.5l30,0.5l20,0.5l2,2.5l2,20l1,20l0,15l-3,2l-20-0.5l-30-0.5l-30-0.5l-30-1l-30-0.5l-20-0.5l-2-2.5l-1-15l0-20L160.5,80.5z",
        name: "Montana"
    },
    WY: {
        d: "M200.5,140.5l20,0.5l30,0.5l30,0.5l30,0.5l20,0.5l2,2.5l2,25l1,20l-3,2l-20-0.5l-30-0.5l-30-0.5l-30-0.5l-20-0.5l-2-2.5l-1-20L200.5,140.5z",
        name: "Wyoming"
    },
    CO: {
        d: "M200.5,200.5l20,0.5l30,0.5l30,0.5l30,0.5l20,0.5l2,2.5l2,30l1,25l-3,2l-20-0.5l-30-0.5l-30-0.5l-30-0.5l-20-0.5l-2-2.5l-1-25L200.5,200.5z",
        name: "Colorado"
    },
    NM: {
        d: "M200.5,320.5l20,0.5l30,0.5l30,0.5l30,0.5l20,0.5l2,2.5l2,35l1,30l-3,2l-20-0.5l-30-0.5l-30-0.5l-30-0.5l-20-0.5l-2-2.5l-1-30L200.5,320.5z",
        name: "New Mexico"
    },
    UT: {
        d: "M160.5,200.5l20,0.5l30,0.5l20,0.5l2,2.5l2,30l1,30l-3,2l-20-0.5l-30-0.5l-20-0.5l-2-2.5l-1-30L160.5,200.5z",
        name: "Utah"
    },
    AZ: {
        d: "M140.5,280.5l10,1l15,2l15,2.5l10,2.5l2,2.5l2,40l1,35l1,30l-3,2l-10-0.5l-15-1l-15-1.5l-10-1.5l-2-2.5l-1-30l-1-35L140.5,280.5z",
        name: "Arizona"
    },
    NV: {
        d: "M80.5,180.5l15,2l20,3l15,2.5l10,2.5l2,3l3,45l2,40l1,35l-3,2l-10-0.5l-15-1.5l-20-2.5l-15-2l-2-3l-2-35l-1-40L80.5,180.5z",
        name: "Nevada"
    },
    CA: {
        d: "M50.5,150.5l10,2l15,3.5l15,4l15,5l15,6l10,7l8,9l6,11l4,13l2,14l0,14l-2,13l-4,11l-6,9l-8,7l-10,5l-12,3l-14,1l-14-1l-12-3l-10-5l-8-7l-6-9l-4-11l-2-13l0-14l2-14l4-13l6-11l8-9l10-7L50.5,150.5z",
        name: "California"
    },
    OR: {
        d: "M60.5,100.5l10,2l15,3l15,4l12,5l10,6l8,8l6,10l4,11l2,12l0,12l-2,11l-4,10l-6,8l-8,6l-10,4l-12,2l-15-1l-15-3l-10-4l-8-6l-6-8l-4-10l-2-11l0-12l2-12l4-11l6-10l8-8l10-6L60.5,100.5z",
        name: "Oregon"
    },
    WA: {
        d: "M80.5,40.5l10,2l15,3l15,4l15,5l10,6l8,8l6,10l4,11l2,12l-1,12l-3,11l-5,9l-7,7l-9,5l-11,3l-13,1l-13-1l-11-3l-9-5l-7-7l-5-9l-3-11l-1-12l2-12l4-11l6-10l8-8l10-6L80.5,40.5z",
        name: "Washington"
    },
    ID: {
        d: "M120.5,80.5l10,2l15,3l15,4l12,5.5l10,7l8,9l6,11l4,13l2,15l0,15l-2,14l-4,12l-6,10l-8,8l-10,6l-12,4l-15,2l-15,0l-12-2l-10-4l-8-6l-6-8l-4-10l-2-12l0-14l2-15l4-13l6-11l8-9l10-7L120.5,80.5z",
        name: "Idaho"
    },
    DC: {
        d: "M810.5,255.5l1,1.5l1,2l-0.5,1.5l-1.5,0.5l-1-2l-0.5-2L810.5,255.5z",
        name: "District of Columbia"
    }
};
const STATE_LABELS = {
    HI: {
        x: 420,
        y: 525
    },
    AK: {
        x: 140,
        y: 680
    },
    ME: {
        x: 885,
        y: 105
    },
    RI: {
        x: 870,
        y: 174
    },
    VT: {
        x: 857,
        y: 135
    },
    NH: {
        x: 863,
        y: 135
    },
    MA: {
        x: 872,
        y: 163
    },
    CT: {
        x: 857,
        y: 173
    },
    NY: {
        x: 805,
        y: 170
    },
    NJ: {
        x: 830,
        y: 208
    },
    PA: {
        x: 780,
        y: 210
    },
    DE: {
        x: 820,
        y: 228
    },
    MD: {
        x: 800,
        y: 247
    },
    VA: {
        x: 780,
        y: 288
    },
    WV: {
        x: 745,
        y: 283
    },
    OH: {
        x: 695,
        y: 253
    },
    IN: {
        x: 630,
        y: 253
    },
    IL: {
        x: 590,
        y: 245
    },
    MI: {
        x: 650,
        y: 180
    },
    WI: {
        x: 590,
        y: 165
    },
    MN: {
        x: 500,
        y: 125
    },
    IA: {
        x: 520,
        y: 215
    },
    MO: {
        x: 560,
        y: 295
    },
    AR: {
        x: 540,
        y: 355
    },
    ND: {
        x: 460,
        y: 115
    },
    SD: {
        x: 460,
        y: 180
    },
    NE: {
        x: 460,
        y: 240
    },
    KS: {
        x: 460,
        y: 295
    },
    OK: {
        x: 460,
        y: 355
    },
    LA: {
        x: 575,
        y: 450
    },
    TX: {
        x: 380,
        y: 445
    },
    KY: {
        x: 675,
        y: 310
    },
    TN: {
        x: 680,
        y: 355
    },
    MS: {
        x: 610,
        y: 410
    },
    AL: {
        x: 665,
        y: 425
    },
    FL: {
        x: 705,
        y: 500
    },
    GA: {
        x: 690,
        y: 405
    },
    SC: {
        x: 735,
        y: 368
    },
    NC: {
        x: 765,
        y: 335
    },
    MT: {
        x: 240,
        y: 110
    },
    WY: {
        x: 240,
        y: 180
    },
    CO: {
        x: 245,
        y: 245
    },
    NM: {
        x: 245,
        y: 355
    },
    UT: {
        x: 195,
        y: 235
    },
    AZ: {
        x: 155,
        y: 345
    },
    NV: {
        x: 105,
        y: 260
    },
    CA: {
        x: 70,
        y: 260
    },
    OR: {
        x: 80,
        y: 135
    },
    WA: {
        x: 90,
        y: 70
    },
    ID: {
        x: 135,
        y: 145
    },
    DC: {
        x: 812,
        y: 258
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/USMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$agency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/agency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$map$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/us-map-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function USMap(param) {
    let { onStateClick } = param;
    _s();
    const [hoveredState, setHoveredState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleStateClick = (stateCode)=>{
        onStateClick(stateCode);
        const element = document.getElementById("state-".concat(stateCode));
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center mb-6 text-gray-800",
                children: "Select a State"
            }, void 0, false, {
                fileName: "[project]/components/USMap.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600 mb-8 min-h-[28px] font-medium",
                children: hoveredState ? "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$agency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_STATES"][hoveredState], " - Click to view agencies") : 'Hover over and click on any state to view Medicare-enrolled Home Health Care Agencies'
            }, void 0, false, {
                fileName: "[project]/components/USMap.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-b from-blue-50 to-blue-25 rounded-xl p-8 shadow-lg border border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 950 600",
                    className: "w-full h-auto max-w-5xl mx-auto",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$map$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_MAP_PATHS"]).map((param)=>{
                            let [stateCode, stateData] = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: stateData.d,
                                    fill: hoveredState === stateCode ? '#2563eb' : '#60a5fa',
                                    stroke: "#ffffff",
                                    strokeWidth: "1.5",
                                    className: "cursor-pointer transition-all duration-200",
                                    onMouseEnter: ()=>setHoveredState(stateCode),
                                    onMouseLeave: ()=>setHoveredState(null),
                                    onClick: ()=>handleStateClick(stateCode),
                                    style: {
                                        filter: hoveredState === stateCode ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' : 'none',
                                        transform: hoveredState === stateCode ? 'scale(1.02)' : 'scale(1)',
                                        transformOrigin: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                        children: stateData.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/USMap.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/USMap.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, stateCode, false, {
                                fileName: "[project]/components/USMap.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this);
                        }),
                        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$map$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATE_LABELS"]).map((param)=>{
                            let [stateCode, coords] = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: coords.x,
                                y: coords.y,
                                fontSize: "11",
                                fontWeight: "600",
                                fill: hoveredState === stateCode ? '#ffffff' : '#1e40af',
                                textAnchor: "middle",
                                className: "pointer-events-none select-none font-sans",
                                style: {
                                    textShadow: hoveredState === stateCode ? '0 1px 3px rgba(0,0,0,0.5)' : '0 1px 2px rgba(255,255,255,0.8)',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                },
                                children: stateCode
                            }, "label-".concat(stateCode), false, {
                                fileName: "[project]/components/USMap.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/USMap.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/USMap.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-gray-500 mt-4",
                children: "Click any state on the map to view Medicare-enrolled agencies"
            }, void 0, false, {
                fileName: "[project]/components/USMap.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/USMap.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(USMap, "t2G53IflysyuqmTLd6PUXcjDM8g=");
_c = USMap;
// Simplified US state SVG paths (mainland states)
const statesPaths = [
    {
        id: 'AL',
        name: 'Alabama',
        d: 'M650,405 L655,410 L660,420 L665,440 L670,455 L675,465 L670,475 L665,480 L660,485 L655,475 L650,465 L645,450 L640,435 L635,420 L640,410 Z'
    },
    {
        id: 'AZ',
        name: 'Arizona',
        d: 'M140,280 L145,285 L150,350 L155,420 L145,425 L130,430 L115,430 L100,425 L95,410 L90,350 L95,285 L110,280 Z'
    },
    {
        id: 'AR',
        name: 'Arkansas',
        d: 'M520,340 L540,345 L560,345 L580,340 L590,350 L595,370 L590,390 L580,400 L560,405 L540,405 L520,400 L510,390 L505,370 L510,350 Z'
    },
    {
        id: 'CA',
        name: 'California',
        d: 'M50,150 L55,160 L60,200 L65,250 L70,300 L75,350 L80,400 L75,420 L65,430 L50,435 L35,430 L25,410 L20,370 L15,320 L10,270 L15,220 L25,180 L35,160 Z'
    },
    {
        id: 'CO',
        name: 'Colorado',
        d: 'M200,200 L280,205 L285,210 L290,280 L285,285 L205,280 L200,275 Z'
    },
    {
        id: 'CT',
        name: 'Connecticut',
        d: 'M850,165 L860,170 L865,180 L860,185 L850,180 L845,175 Z'
    },
    {
        id: 'DE',
        name: 'Delaware',
        d: 'M820,220 L825,225 L828,235 L825,245 L820,240 L818,230 Z'
    },
    {
        id: 'FL',
        name: 'Florida',
        d: 'M700,450 L710,460 L720,480 L725,500 L720,520 L710,535 L700,545 L690,540 L685,525 L680,505 L675,485 L680,470 L690,460 Z'
    },
    {
        id: 'GA',
        name: 'Georgia',
        d: 'M680,380 L690,385 L700,400 L705,420 L700,440 L690,450 L680,445 L670,430 L665,410 L670,390 Z'
    },
    {
        id: 'ID',
        name: 'Idaho',
        d: 'M120,80 L125,85 L130,100 L135,130 L140,160 L145,190 L140,210 L130,220 L120,215 L110,200 L105,170 L100,130 L105,100 L115,85 Z'
    },
    {
        id: 'IL',
        name: 'Illinois',
        d: 'M580,220 L590,225 L595,240 L600,270 L605,300 L610,330 L605,350 L595,360 L585,355 L575,340 L570,310 L565,280 L570,250 L575,230 Z'
    },
    {
        id: 'IN',
        name: 'Indiana',
        d: 'M620,240 L630,245 L635,260 L640,280 L645,310 L640,335 L630,345 L620,340 L615,320 L610,290 L615,260 Z'
    },
    {
        id: 'IA',
        name: 'Iowa',
        d: 'M500,200 L520,205 L540,210 L560,215 L570,230 L565,250 L550,260 L530,265 L510,260 L495,250 L490,230 L495,210 Z'
    },
    {
        id: 'KS',
        name: 'Kansas',
        d: 'M400,280 L480,285 L485,290 L490,320 L485,325 L405,320 L400,315 Z'
    },
    {
        id: 'KY',
        name: 'Kentucky',
        d: 'M640,300 L660,305 L680,310 L700,315 L710,325 L705,340 L690,350 L670,345 L650,340 L635,330 L630,315 Z'
    },
    {
        id: 'LA',
        name: 'Louisiana',
        d: 'M550,430 L570,435 L590,440 L610,445 L620,460 L615,475 L600,485 L580,490 L560,485 L545,475 L540,460 L545,445 Z'
    },
    {
        id: 'ME',
        name: 'Maine',
        d: 'M880,80 L885,85 L890,100 L895,120 L890,140 L885,150 L875,155 L870,145 L865,125 L870,105 L875,90 Z'
    },
    {
        id: 'MD',
        name: 'Maryland',
        d: 'M790,240 L810,245 L820,250 L815,265 L805,270 L790,265 L785,255 Z'
    },
    {
        id: 'MA',
        name: 'Massachusetts',
        d: 'M860,155 L875,160 L885,165 L880,175 L870,180 L860,175 L855,165 Z'
    },
    {
        id: 'MI',
        name: 'Michigan',
        d: 'M640,160 L650,165 L660,180 L665,200 L670,220 L665,240 L655,250 L645,245 L635,230 L630,210 L635,190 L640,175 Z M620,140 L630,145 L635,155 L630,165 L620,160 L615,150 Z'
    },
    {
        id: 'MN',
        name: 'Minnesota',
        d: 'M480,100 L500,105 L520,110 L540,120 L550,140 L545,160 L535,180 L520,190 L500,185 L485,175 L475,155 L470,130 L475,110 Z'
    },
    {
        id: 'MS',
        name: 'Mississippi',
        d: 'M600,380 L610,385 L615,400 L620,420 L625,440 L620,455 L610,460 L600,455 L595,440 L590,420 L585,400 L590,385 Z'
    },
    {
        id: 'MO',
        name: 'Missouri',
        d: 'M540,280 L560,285 L580,290 L600,295 L610,310 L605,330 L590,345 L570,350 L550,345 L535,335 L525,315 L530,295 Z'
    },
    {
        id: 'MT',
        name: 'Montana',
        d: 'M160,80 L240,85 L320,90 L325,95 L330,140 L325,145 L245,140 L165,135 L160,130 Z'
    },
    {
        id: 'NE',
        name: 'Nebraska',
        d: 'M380,220 L460,225 L540,230 L545,235 L550,270 L545,275 L465,270 L385,265 L380,260 Z'
    },
    {
        id: 'NV',
        name: 'Nevada',
        d: 'M80,180 L85,185 L90,210 L95,250 L100,290 L105,330 L100,350 L85,360 L70,355 L60,335 L55,295 L50,250 L55,210 L65,190 Z'
    },
    {
        id: 'NH',
        name: 'New Hampshire',
        d: 'M865,120 L870,125 L875,140 L870,155 L865,150 L860,135 L860,125 Z'
    },
    {
        id: 'NJ',
        name: 'New Jersey',
        d: 'M830,200 L835,205 L840,220 L835,235 L830,230 L825,215 L825,205 Z'
    },
    {
        id: 'NM',
        name: 'New Mexico',
        d: 'M200,320 L280,325 L285,330 L290,420 L285,425 L205,420 L200,415 Z'
    },
    {
        id: 'NY',
        name: 'New York',
        d: 'M790,150 L810,155 L830,165 L850,175 L860,185 L855,200 L840,210 L820,215 L800,210 L785,200 L775,185 L780,170 L785,160 Z'
    },
    {
        id: 'NC',
        name: 'North Carolina',
        d: 'M740,320 L760,325 L780,330 L800,335 L810,345 L805,360 L790,365 L770,360 L750,355 L735,345 L730,335 Z'
    },
    {
        id: 'ND',
        name: 'North Dakota',
        d: 'M380,90 L460,95 L540,100 L545,105 L550,150 L545,155 L465,150 L385,145 L380,140 Z'
    },
    {
        id: 'OH',
        name: 'Ohio',
        d: 'M680,240 L700,245 L720,250 L730,265 L725,285 L710,295 L690,290 L675,280 L665,265 L670,250 Z'
    },
    {
        id: 'OK',
        name: 'Oklahoma',
        d: 'M400,340 L480,345 L560,350 L565,355 L570,385 L565,390 L485,385 L405,380 L400,375 Z'
    },
    {
        id: 'OR',
        name: 'Oregon',
        d: 'M60,100 L65,105 L70,120 L75,145 L80,170 L85,195 L80,210 L65,220 L50,215 L40,200 L35,175 L30,145 L35,120 L45,105 Z'
    },
    {
        id: 'PA',
        name: 'Pennsylvania',
        d: 'M760,200 L780,205 L800,210 L815,215 L820,230 L815,245 L800,250 L780,245 L760,240 L750,225 L755,210 Z'
    },
    {
        id: 'RI',
        name: 'Rhode Island',
        d: 'M870,170 L875,175 L878,183 L875,188 L870,183 L868,176 Z'
    },
    {
        id: 'SC',
        name: 'South Carolina',
        d: 'M720,350 L735,355 L750,360 L760,370 L755,385 L740,390 L725,385 L715,375 L710,365 Z'
    },
    {
        id: 'SD',
        name: 'South Dakota',
        d: 'M380,160 L460,165 L540,170 L545,175 L550,220 L545,225 L465,220 L385,215 L380,210 Z'
    },
    {
        id: 'TN',
        name: 'Tennessee',
        d: 'M640,340 L660,345 L680,350 L700,355 L720,360 L730,370 L725,380 L710,385 L690,380 L670,375 L650,370 L635,360 Z'
    },
    {
        id: 'TX',
        name: 'Texas',
        d: 'M340,380 L360,385 L380,395 L400,410 L420,440 L440,470 L450,500 L445,520 L430,530 L410,535 L390,530 L370,515 L350,490 L335,460 L320,430 L310,400 L320,385 Z'
    },
    {
        id: 'UT',
        name: 'Utah',
        d: 'M160,200 L240,205 L245,210 L250,290 L245,295 L165,290 L160,285 Z'
    },
    {
        id: 'VT',
        name: 'Vermont',
        d: 'M855,120 L860,125 L865,140 L860,155 L855,150 L850,135 L850,125 Z'
    },
    {
        id: 'VA',
        name: 'Virginia',
        d: 'M760,280 L780,285 L800,290 L820,295 L830,305 L825,320 L810,325 L790,320 L770,315 L755,305 L750,295 Z'
    },
    {
        id: 'WA',
        name: 'Washington',
        d: 'M80,40 L85,45 L90,55 L95,70 L100,90 L95,105 L85,115 L70,120 L55,115 L45,100 L40,85 L35,65 L40,50 L55,45 L70,40 Z'
    },
    {
        id: 'WV',
        name: 'West Virginia',
        d: 'M740,270 L755,275 L770,280 L780,290 L775,305 L760,310 L745,305 L735,295 L730,285 Z'
    },
    {
        id: 'WI',
        name: 'Wisconsin',
        d: 'M580,140 L600,145 L620,150 L635,165 L630,185 L620,205 L600,215 L580,210 L565,195 L560,175 L565,155 Z'
    },
    {
        id: 'WY',
        name: 'Wyoming',
        d: 'M200,140 L280,145 L285,150 L290,220 L285,225 L205,220 L200,215 Z'
    },
    // Alaska and Hawaii as insets
    {
        id: 'AK',
        name: 'Alaska',
        d: 'M50,520 L60,525 L70,535 L80,545 L85,555 L75,565 L60,570 L45,565 L35,555 L30,540 L35,525 Z'
    },
    {
        id: 'HI',
        name: 'Hawaii',
        d: 'M200,540 L205,545 L210,550 L205,555 L200,550 L195,545 Z M215,545 L220,550 L225,555 L220,560 L215,555 L210,550 Z M230,550 L235,555 L240,560 L235,565 L230,560 L225,555 Z'
    },
    {
        id: 'DC',
        name: 'District of Columbia',
        d: 'M810,255 L815,260 L818,265 L815,270 L810,265 L808,260 Z'
    }
];
var _c;
__turbopack_context__.k.register(_c, "USMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AgencyTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgencyTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function AgencyTable(param) {
    let { agencies } = param;
    if (agencies.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 text-gray-500",
            children: "No agencies found for this state."
        }, void 0, false, {
            fileName: "[project]/components/AgencyTable.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full bg-white border border-gray-300 rounded-lg shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "Provider Name"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "Address"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "City"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b",
                                children: "Quality Rating"
                            }, void 0, false, {
                                fileName: "[project]/components/AgencyTable.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AgencyTable.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AgencyTable.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-gray-200",
                    children: agencies.map((agency, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-gray-50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm font-medium text-gray-900",
                                    children: agency.providerName
                                }, void 0, false, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-700",
                                    children: agency.address
                                }, void 0, false, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-700",
                                    children: [
                                        agency.city,
                                        ", ",
                                        agency.state,
                                        " ",
                                        agency.zipCode
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-700",
                                    children: agency.phone
                                }, void 0, false, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: [
                                            agency.nursingCare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded",
                                                children: "Nursing"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            agency.physicalTherapy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-green-100 text-green-800 text-xs rounded",
                                                children: "PT"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this),
                                            agency.occupationalTherapy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded",
                                                children: "OT"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this),
                                            agency.speechPathology && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded",
                                                children: "Speech"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this),
                                            agency.homeHealthAide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded",
                                                children: "HHA"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AgencyTable.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-4 py-3 text-sm text-gray-700",
                                    children: agency.qualityRating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-yellow-600",
                                                children: agency.qualityRating
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-yellow-500",
                                                children: "★"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgencyTable.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AgencyTable.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AgencyTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/AgencyTable.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, agency.ccn || index, true, {
                            fileName: "[project]/components/AgencyTable.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/AgencyTable.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AgencyTable.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AgencyTable.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = AgencyTable;
var _c;
__turbopack_context__.k.register(_c, "AgencyTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$USMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/USMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgencyTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AgencyTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$agency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/agency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Mock data for demonstration - will be replaced with real data from API
const mockStateAgencies = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$agency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_STATES"]).map((state)=>({
        state,
        stateName: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$agency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_STATES"][state],
        count: 0,
        agencies: []
    }));
function HomePage() {
    _s();
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-blue-600 text-white py-8 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-center",
                            children: "Medicare Agency Finder"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mt-2 text-blue-100",
                            children: "Find Medicare-Enrolled Home Health Care Agencies Across the United States"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mt-1 text-sm text-blue-200",
                            children: "Data sourced from CMS.gov • Updated regularly"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$USMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onStateClick: setSelectedState
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-8 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 max-w-7xl",
                    children: mockStateAgencies.map((stateData)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "state-".concat(stateData.state),
                            className: "mb-12 scroll-mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-800",
                                                children: [
                                                    stateData.stateName,
                                                    " (",
                                                    stateData.state,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    stateData.count,
                                                    " ",
                                                    stateData.count === 1 ? 'Agency' : 'Agencies'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgencyTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        agencies: stateData.agencies
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, stateData.state, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-800 text-white py-6 mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Medicare Agency Finder. Data provided by",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://data.cms.gov/provider-data/dataset/6jpm-sxkc",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-400 hover:text-blue-300 underline",
                                children: "CMS.gov"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(HomePage, "SVmtA+WSgmhnvo9xh2suHknpjRg=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_51859e1d._.js.map