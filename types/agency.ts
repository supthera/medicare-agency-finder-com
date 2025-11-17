// Database schema types for Medicare Home Health Care Agencies

export interface Agency {
  id?: number;
  state: string;
  ccn: string; // CMS Certification Number
  providerName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  ownership: string;
  
  // Services offered (boolean flags)
  nursingCare: boolean;
  physicalTherapy: boolean;
  occupationalTherapy: boolean;
  speechPathology: boolean;
  medicalSocial: boolean;
  homeHealthAide: boolean;
  
  // Quality metrics
  qualityRating: number | null; // Star rating (1-5)
  certificationDate: string;
  
  // Metadata
  lastUpdated: Date;
}

export interface StateAgencies {
  state: string;
  stateName: string;
  agencies: Agency[];
  count: number;
}

// US States mapping
export const US_STATES: { [key: string]: string } = {
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
  DC: "District of Columbia",
};
