export const du = {
  '025': [25, 32, 40],
  '077': [25, 32, 40],
  '13': [50, 65],
  '18': [50, 65],
  '16-5': [80],
  '28': [65],
  '45': [100, 125],
  '52': [150],
  '65': [50, 65],
  '82': [150],
  '95': [200, 250],
  '116': [200, 250],
}

export const portType = {
  '025': ['shtu'],
  '077': ['shtu'],
  '13': ['sthu', 'gost'],
  '18': ['shtu', 'gost']
}

export const apparats = [
    { 
      pto : 'ti-025', 
      du: [25, 35],
      shpilka: [
        [0, 15],
        [16, 32],
        [33, 75],
        [76, 126]
      ]
    },
    { 
      pto : 'ti-077', 
      du: [25, 35],
      shpilka: [
        [0, 15],
        [16, 32],
        [33, 75],
        [76, 126]
      ]
    }

  ]

  export const items = [
  { 
    id: 1,
    type: 'plast',
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    potok: ['h', 'l'],
    otv: ['1234', '0230', '1004', '0000'],
    /*не влияет на отрисовку*/
    material: ['aisi304', 'aisi316'],
    thickness: ['0.4', '0.5', '0.6'],
  }, 
  { 
    id: 2,
    type: 'uplot',
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    position: ['center', 'start', 'end'],
    /*не влияет на отрисовку*/
    material: ['epdm', 'fkm', 'nbr'],
  }, 
  { 
    id: 3,
    type: 'stanina',
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    otv: ['1200', '1234'],
  }, 
  {
    id: 4,
    type: 'plita', 
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
    otv: ['0000', '1200','0034'],
  },
  {
    id: 5,
    type: 'styazhka',
    vid: ['niz', 'verh'],
    /* c 28 идут балки */
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
  },
  {
    id: 6,
    type: 'shpilka',
    d: {
      m16: [180, 280, 410, 630],
      m24: [250, 350, 450, 500, 600, 750,850, 1000, 1150, 1250,1350,1450, 1650,1750,2100,2500],
      m36: [500, 600, 750, 1000, 1250, 1400, 1500, 1700],
    },
    pto: ['025', '077', '13', '16,5', '18', '28', '45', '52', '65', '82', '95', '116'],
  },
  {
    id: 7,
    type: 'opora',
  }
]; 

export const pricesWithId = [
  {
    id: "plast-025-0000-H-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 0000H AISI316 0.4mm",
  },
  {
    id: "plast-025-0000-L-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 0000L AISI316 0.4mm",
  },
  {
    id: "plast-025-1234-H-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 1234H AISI316 0.4mm",
  },
  {
    id: "plast-025-1234-L-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 1234L AISI316 0.4mm",
  },
  {
    id: "plast-025-1004-H-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 1004H AISI316 0.4mm",
  },
  {
    id: "plast-025-1004-L-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 1004L AISI316 0.4mm",
  },
  {
    id: "plast-025-0230-H-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 0230H AISI316 0.4mm",
  },
  {
    id: "plast-025-0230-L-AISI316-0.4",
    price: "316.10",
    alias: "Пластина ТИ025 0230L AISI316 0.4mm",
  },
  {
    id: "plast-025-0000-H-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 0000H AISI316 0.5mm",
  },
  {
    id: "plast-025-0000-L-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 0000L AISI316 0.5mm",
  },
  {
    id: "plast-025-1234-H-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 1234H AISI316 0.5mm",
  },
  {
    id: "plast-025-1234-L-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 1234L AISI316 0.5mm",
  },
  {
    id: "plast-025-1004-H-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 1004H AISI316 0.5mm",
  },
  {
    id: "plast-025-1004-L-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 1004L AISI316 0.5mm",
  },
  {
    id: "plast-025-0230-H-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 0230H AISI316 0.5mm",
  },
  {
    id: "plast-025-0230-L-AISI316-0.5",
    price: "372.51",
    alias: "Пластина ТИ025 0230L AISI316 0.5mm",
  },
  {
    id: "plast-025-0000-H-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 0000H AISI316 0.6mm",
  },
  {
    id: "plast-025-0000-L-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 0000L AISI316 0.6mm",
  },
  {
    id: "plast-025-1234-H-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 1234H AISI316 0.6mm",
  },
  {
    id: "plast-025-1234-L-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 1234L AISI316 0.6mm",
  },
  {
    id: "plast-025-1004-H-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 1004H AISI316 0.6mm",
  },
  {
    id: "plast-025-1004-L-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 1004L AISI316 0.6mm",
  },
  {
    id: "plast-025-0230-H-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 0230H AISI316 0.6mm",
  },
  {
    id: "plast-025-0230-L-AISI316-0.6",
    price: "385.23",
    alias: "Пластина ТИ025 0230L AISI316 0.6mm",
  },
  {
    id: "plast-025-0000-H-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 0000H AISI304 0.4mm",
  },
  {
    id: "plast-025-0000-L-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 0000L AISI304 0.4mm",
  },
  {
    id: "plast-025-1234-H-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 1234H AISI304 0.4mm",
  },
  {
    id: "plast-025-1234-L-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 1234L AISI304 0.4mm",
  },
  {
    id: "plast-025-1004-H-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 1004H AISI304 0.4mm",
  },
  {
    id: "plast-025-1004-L-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 1004L AISI304 0.4mm",
  },
  {
    id: "plast-025-0230-H-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 0230H AISI304 0.4mm",
  },
  {
    id: "plast-025-0230-L-AISI304-0.4",
    price: "263.15",
    alias: "Пластина ТИ025 0230L AISI304 0.4mm",
  },
  {
    id: "plast-025-0000-H-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 0000H AISI304 0.5mm",
  },
  {
    id: "plast-025-0000-L-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 0000L AISI304 0.5mm",
  },
  {
    id: "plast-025-1234-H-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 1234H AISI304 0.5mm",
  },
  {
    id: "plast-025-1234-L-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 1234L AISI304 0.5mm",
  },
  {
    id: "plast-025-1004-H-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 1004H AISI304 0.5mm",
  },
  {
    id: "plast-025-1004-L-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 1004L AISI304 0.5mm",
  },
  {
    id: "plast-025-0230-H-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 0230H AISI304 0.5mm",
  },
  {
    id: "plast-025-0230-L-AISI304-0.5",
    price: "302.95",
    alias: "Пластина ТИ025 0230L AISI304 0.5mm",
  },
  {
    id: "plast-025-0000-H-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 0000H AISI304 0.6mm",
  },
  {
    id: "plast-025-0000-L-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 0000L AISI304 0.6mm",
  },
  {
    id: "plast-025-1234-H-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 1234H AISI304 0.6mm",
  },
  {
    id: "plast-025-1234-L-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 1234L AISI304 0.6mm",
  },
  {
    id: "plast-025-1004-H-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 1004H AISI304 0.6mm",
  },
  {
    id: "plast-025-1004-L-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 1004L AISI304 0.6mm",
  },
  {
    id: "plast-025-0230-H-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 0230H AISI304 0.6mm",
  },
  {
    id: "plast-025-0230-L-AISI304-0.6",
    price: "340.77",
    alias: "Пластина ТИ025 0230L AISI304 0.6mm",
  },
  {
    id: "plast-077-0000-H-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 0000H AISI316 0.4mm",
  },
  {
    id: "plast-077-0000-L-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 0000L AISI316 0.4mm",
  },
  {
    id: "plast-077-1234-H-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 1234H AISI316 0.4mm",
  },
  {
    id: "plast-077-1234-L-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 1234L AISI316 0.4mm",
  },
  {
    id: "plast-077-1004-H-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 1004H AISI316 0.4mm",
  },
  {
    id: "plast-077-1004-L-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 1004L AISI316 0.4mm",
  },
  {
    id: "plast-077-0230-H-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 0230H AISI316 0.4mm",
  },
  {
    id: "plast-077-0230-L-AISI316-0.4",
    price: "543.95",
    alias: "Пластина ТИ077 0230L AISI316 0.4mm",
  },
  {
    id: "plast-077-0000-H-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 0000H AISI316 0.5mm",
  },
  {
    id: "plast-077-0000-L-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 0000L AISI316 0.5mm",
  },
  {
    id: "plast-077-1234-H-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 1234H AISI316 0.5mm",
  },
  {
    id: "plast-077-1234-L-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 1234L AISI316 0.5mm",
  },
  {
    id: "plast-077-1004-H-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 1004H AISI316 0.5mm",
  },
  {
    id: "plast-077-1004-L-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 1004L AISI316 0.5mm",
  },
  {
    id: "plast-077-0230-H-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 0230H AISI316 0.5mm",
  },
  {
    id: "plast-077-0230-L-AISI316-0.5",
    price: "638.36",
    alias: "Пластина ТИ077 0230L AISI316 0.5mm",
  },
  {
    id: "plast-077-0000-H-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 0000H AISI316 0.6mm",
  },
  {
    id: "plast-077-0000-L-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 0000L AISI316 0.6mm",
  },
  {
    id: "plast-077-1234-H-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 1234H AISI316 0.6mm",
  },
  {
    id: "plast-077-1234-L-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 1234L AISI316 0.6mm",
  },
  {
    id: "plast-077-1004-H-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 1004H AISI316 0.6mm",
  },
  {
    id: "plast-077-1004-L-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 1004L AISI316 0.6mm",
  },
  {
    id: "plast-077-0230-H-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 0230H AISI316 0.6mm",
  },
  {
    id: "plast-077-0230-L-AISI316-0.6",
    price: "656.03",
    alias: "Пластина ТИ077 0230L AISI316 0.6mm",
  },
  {
    id: "plast-077-0000-H-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 0000H AISI304 0.4mm",
  },
  {
    id: "plast-077-0000-L-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 0000L AISI304 0.4mm",
  },
  {
    id: "plast-077-1234-H-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 1234H AISI304 0.4mm",
  },
  {
    id: "plast-077-1234-L-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 1234L AISI304 0.4mm",
  },
  {
    id: "plast-077-1004-H-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 1004H AISI304 0.4mm",
  },
  {
    id: "plast-077-1004-L-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 1004L AISI304 0.4mm",
  },
  {
    id: "plast-077-0230-H-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 0230H AISI304 0.4mm",
  },
  {
    id: "plast-077-0230-L-AISI304-0.4",
    price: "436.97",
    alias: "Пластина ТИ077 0230L AISI304 0.4mm",
  },
  {
    id: "plast-077-0000-H-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 0000H AISI304 0.5mm",
  },
  {
    id: "plast-077-0000-L-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 0000L AISI304 0.5mm",
  },
  {
    id: "plast-077-1234-H-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 1234H AISI304 0.5mm",
  },
  {
    id: "plast-077-1234-L-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 1234L AISI304 0.5mm",
  },
  {
    id: "plast-077-1004-H-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 1004H AISI304 0.5mm",
  },
  {
    id: "plast-077-1004-L-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 1004L AISI304 0.5mm",
  },
  {
    id: "plast-077-0230-H-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 0230H AISI304 0.5mm",
  },
  {
    id: "plast-077-0230-L-AISI304-0.5",
    price: "502.92",
    alias: "Пластина ТИ077 0230L AISI304 0.5mm",
  },
  {
    id: "plast-077-0000-H-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 0000H AISI304 0.6mm",
  },
  {
    id: "plast-077-0000-L-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 0000L AISI304 0.6mm",
  },
  {
    id: "plast-077-1234-H-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 1234H AISI304 0.6mm",
  },
  {
    id: "plast-077-1234-L-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 1234L AISI304 0.6mm",
  },
  {
    id: "plast-077-1004-H-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 1004H AISI304 0.6mm",
  },
  {
    id: "plast-077-1004-L-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 1004L AISI304 0.6mm",
  },
  {
    id: "plast-077-0230-H-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 0230H AISI304 0.6mm",
  },
  {
    id: "plast-077-0230-L-AISI304-0.6",
    price: "570.62",
    alias: "Пластина ТИ077 0230L AISI304 0.6mm",
  },
  {
    id: "plast-13-0000-H-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 0000H AISI316 0.4mm",
  },
  {
    id: "plast-13-0000-L-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 0000L AISI316 0.4mm",
  },
  {
    id: "plast-13-1234-H-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 1234H AISI316 0.4mm",
  },
  {
    id: "plast-13-1234-L-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 1234L AISI316 0.4mm",
  },
  {
    id: "plast-13-1004-H-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 1004H AISI316 0.4mm",
  },
  {
    id: "plast-13-1004-L-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 1004L AISI316 0.4mm",
  },
  {
    id: "plast-13-0230-H-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 0230H AISI316 0.4mm",
  },
  {
    id: "plast-13-0230-L-AISI316-0.4",
    price: "972.67",
    alias: "Пластина ТИ13 0230L AISI316 0.4mm",
  },
  {
    id: "plast-13-0000-H-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 0000H AISI316 0.5mm",
  },
  {
    id: "plast-13-0000-L-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 0000L AISI316 0.5mm",
  },
  {
    id: "plast-13-1234-H-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 1234H AISI316 0.5mm",
  },
  {
    id: "plast-13-1234-L-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 1234L AISI316 0.5mm",
  },
  {
    id: "plast-13-1004-H-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 1004H AISI316 0.5mm",
  },
  {
    id: "plast-13-1004-L-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 1004L AISI316 0.5mm",
  },
  {
    id: "plast-13-0230-H-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 0230H AISI316 0.5mm",
  },
  {
    id: "plast-13-0230-L-AISI316-0.5",
    price: "1151.38",
    alias: "Пластина ТИ13 0230L AISI316 0.5mm",
  },
  {
    id: "plast-13-0000-H-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 0000H AISI316 0.6mm",
  },
  {
    id: "plast-13-0000-L-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 0000L AISI316 0.6mm",
  },
  {
    id: "plast-13-1234-H-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 1234H AISI316 0.6mm",
  },
  {
    id: "plast-13-1234-L-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 1234L AISI316 0.6mm",
  },
  {
    id: "plast-13-1004-H-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 1004H AISI316 0.6mm",
  },
  {
    id: "plast-13-1004-L-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 1004L AISI316 0.6mm",
  },
  {
    id: "plast-13-0230-H-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 0230H AISI316 0.6mm",
  },
  {
    id: "plast-13-0230-L-AISI316-0.6",
    price: "1199.92",
    alias: "Пластина ТИ13 0230L AISI316 0.6mm",
  },
  {
    id: "plast-13-0000-H-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 0000H AISI304 0.4mm",
  },
  {
    id: "plast-13-0000-L-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 0000L AISI304 0.4mm",
  },
  {
    id: "plast-13-1234-H-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 1234H AISI304 0.4mm",
  },
  {
    id: "plast-13-1234-L-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 1234L AISI304 0.4mm",
  },
  {
    id: "plast-13-1004-H-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 1004H AISI304 0.4mm",
  },
  {
    id: "plast-13-1004-L-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 1004L AISI304 0.4mm",
  },
  {
    id: "plast-13-0230-H-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 0230H AISI304 0.4mm",
  },
  {
    id: "plast-13-0230-L-AISI304-0.4",
    price: "761.03",
    alias: "Пластина ТИ13 0230L AISI304 0.4mm",
  },
  {
    id: "plast-13-0000-H-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 0000H AISI304 0.5mm",
  },
  {
    id: "plast-13-0000-L-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 0000L AISI304 0.5mm",
  },
  {
    id: "plast-13-1234-H-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 1234H AISI304 0.5mm",
  },
  {
    id: "plast-13-1234-L-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 1234L AISI304 0.5mm",
  },
  {
    id: "plast-13-1004-H-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 1004H AISI304 0.5mm",
  },
  {
    id: "plast-13-1004-L-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 1004L AISI304 0.5mm",
  },
  {
    id: "plast-13-0230-H-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 0230H AISI304 0.5mm",
  },
  {
    id: "plast-13-0230-L-AISI304-0.5",
    price: "885.59",
    alias: "Пластина ТИ13 0230L AISI304 0.5mm",
  },
  {
    id: "plast-13-0000-H-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 0000H AISI304 0.6mm",
  },
  {
    id: "plast-13-0000-L-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 0000L AISI304 0.6mm",
  },
  {
    id: "plast-13-1234-H-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 1234H AISI304 0.6mm",
  },
  {
    id: "plast-13-1234-L-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 1234L AISI304 0.6mm",
  },
  {
    id: "plast-13-1004-H-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 1004H AISI304 0.6mm",
  },
  {
    id: "plast-13-1004-L-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 1004L AISI304 0.6mm",
  },
  {
    id: "plast-13-0230-H-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 0230H AISI304 0.6mm",
  },
  {
    id: "plast-13-0230-L-AISI304-0.6",
    price: "1030.08",
    alias: "Пластина ТИ13 0230L AISI304 0.6mm",
  },
  {
    id: "plast-18-0000-H-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 0000H AISI316 0.4mm",
  },
  {
    id: "plast-18-0000-L-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 0000L AISI316 0.4mm",
  },
  {
    id: "plast-18-1234-H-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 1234H AISI316 0.4mm",
  },
  {
    id: "plast-18-1234-L-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 1234L AISI316 0.4mm",
  },
  {
    id: "plast-18-1004-H-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 1004H AISI316 0.4mm",
  },
  {
    id: "plast-18-1004-L-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 1004L AISI316 0.4mm",
  },
  {
    id: "plast-18-0230-H-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 0230H AISI316 0.4mm",
  },
  {
    id: "plast-18-0230-L-AISI316-0.4",
    price: "1277.90",
    alias: "Пластина ТИ18 0230L AISI316 0.4mm",
  },
  {
    id: "plast-18-0000-H-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 0000H AISI316 0.5mm",
  },
  {
    id: "plast-18-0000-L-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 0000L AISI316 0.5mm",
  },
  {
    id: "plast-18-1234-H-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 1234H AISI316 0.5mm",
  },
  {
    id: "plast-18-1234-L-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 1234L AISI316 0.5mm",
  },
  {
    id: "plast-18-1004-H-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 1004H AISI316 0.5mm",
  },
  {
    id: "plast-18-1004-L-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 1004L AISI316 0.5mm",
  },
  {
    id: "plast-18-0230-H-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 0230H AISI316 0.5mm",
  },
  {
    id: "plast-18-0230-L-AISI316-0.5",
    price: "1485.62",
    alias: "Пластина ТИ18 0230L AISI316 0.5mm",
  },
  {
    id: "plast-18-0000-H-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 0000H AISI316 0.6mm",
  },
  {
    id: "plast-18-0000-L-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 0000L AISI316 0.6mm",
  },
  {
    id: "plast-18-1234-H-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 1234H AISI316 0.6mm",
  },
  {
    id: "plast-18-1234-L-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 1234L AISI316 0.6mm",
  },
  {
    id: "plast-18-1004-H-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 1004H AISI316 0.6mm",
  },
  {
    id: "plast-18-1004-L-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 1004L AISI316 0.6mm",
  },
  {
    id: "plast-18-0230-H-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 0230H AISI316 0.6mm",
  },
  {
    id: "plast-18-0230-L-AISI316-0.6",
    price: "1550.03",
    alias: "Пластина ТИ18 0230L AISI316 0.6mm",
  },
  {
    id: "plast-18-0000-H-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 0000H AISI304 0.4mm",
  },
  {
    id: "plast-18-0000-L-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 0000L AISI304 0.4mm",
  },
  {
    id: "plast-18-1234-H-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 1234H AISI304 0.4mm",
  },
  {
    id: "plast-18-1234-L-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 1234L AISI304 0.4mm",
  },
  {
    id: "plast-18-1004-H-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 1004H AISI304 0.4mm",
  },
  {
    id: "plast-18-1004-L-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 1004L AISI304 0.4mm",
  },
  {
    id: "plast-18-0230-H-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 0230H AISI304 0.4mm",
  },
  {
    id: "plast-18-0230-L-AISI304-0.4",
    price: "989.64",
    alias: "Пластина ТИ18 0230L AISI304 0.4mm",
  },
  {
    id: "plast-18-0000-H-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 0000H AISI304 0.5mm",
  },
  {
    id: "plast-18-0000-L-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 0000L AISI304 0.5mm",
  },
  {
    id: "plast-18-1234-H-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 1234H AISI304 0.5mm",
  },
  {
    id: "plast-18-1234-L-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 1234L AISI304 0.5mm",
  },
  {
    id: "plast-18-1004-H-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 1004H AISI304 0.5mm",
  },
  {
    id: "plast-18-1004-L-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 1004L AISI304 0.5mm",
  },
  {
    id: "plast-18-0230-H-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 0230H AISI304 0.5mm",
  },
  {
    id: "plast-18-0230-L-AISI304-0.5",
    price: "1133.05",
    alias: "Пластина ТИ18 0230L AISI304 0.5mm",
  },
  {
    id: "plast-18-0000-H-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 0000H AISI304 0.6mm",
  },
  {
    id: "plast-18-0000-L-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 0000L AISI304 0.6mm",
  },
  {
    id: "plast-18-1234-H-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 1234H AISI304 0.6mm",
  },
  {
    id: "plast-18-1234-L-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 1234L AISI304 0.6mm",
  },
  {
    id: "plast-18-1004-H-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 1004H AISI304 0.6mm",
  },
  {
    id: "plast-18-1004-L-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 1004L AISI304 0.6mm",
  },
  {
    id: "plast-18-0230-H-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 0230H AISI304 0.6mm",
  },
  {
    id: "plast-18-0230-L-AISI304-0.6",
    price: "1324.74",
    alias: "Пластина ТИ18 0230L AISI304 0.6mm",
  },
  {
    id: "plast-16.5-0000-H-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000H AISI316 0.4mm",
  },
  {
    id: "plast-16.5-0000-L-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000L AISI316 0.4mm",
  },
  {
    id: "plast-16.5-1234-H-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234H AISI316 0.4mm",
  },
  {
    id: "plast-16.5-1234-L-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234L AISI316 0.4mm",
  },
  {
    id: "plast-16.5-1004-H-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004H AISI316 0.4mm",
  },
  {
    id: "plast-16.5-1004-L-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004L AISI316 0.4mm",
  },
  {
    id: "plast-16.5-0230-H-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230H AISI316 0.4mm",
  },
  {
    id: "plast-16.5-0230-L-AISI316-0.4",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230L AISI316 0.4mm",
  },
  {
    id: "plast-16.5-0000-H-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000H AISI316 0.5mm",
  },
  {
    id: "plast-16.5-0000-L-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000L AISI316 0.5mm",
  },
  {
    id: "plast-16.5-1234-H-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234H AISI316 0.5mm",
  },
  {
    id: "plast-16.5-1234-L-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234L AISI316 0.5mm",
  },
  {
    id: "plast-16.5-1004-H-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004H AISI316 0.5mm",
  },
  {
    id: "plast-16.5-1004-L-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004L AISI316 0.5mm",
  },
  {
    id: "plast-16.5-0230-H-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230H AISI316 0.5mm",
  },
  {
    id: "plast-16.5-0230-L-AISI316-0.5",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230L AISI316 0.5mm",
  },
  {
    id: "plast-16.5-0000-H-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000H AISI316 0.6mm",
  },
  {
    id: "plast-16.5-0000-L-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0000L AISI316 0.6mm",
  },
  {
    id: "plast-16.5-1234-H-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234H AISI316 0.6mm",
  },
  {
    id: "plast-16.5-1234-L-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1234L AISI316 0.6mm",
  },
  {
    id: "plast-16.5-1004-H-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004H AISI316 0.6mm",
  },
  {
    id: "plast-16.5-1004-L-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 1004L AISI316 0.6mm",
  },
  {
    id: "plast-16.5-0230-H-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230H AISI316 0.6mm",
  },
  {
    id: "plast-16.5-0230-L-AISI316-0.6",
    price: "1640.62",
    alias: "Пластина ТИ16.5 0230L AISI316 0.6mm",
  },
  {
    id: "plast-16.5-0000-H-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000H AISI304 0.4mm",
  },
  {
    id: "plast-16.5-0000-L-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000L AISI304 0.4mm",
  },
  {
    id: "plast-16.5-1234-H-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234H AISI304 0.4mm",
  },
  {
    id: "plast-16.5-1234-L-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234L AISI304 0.4mm",
  },
  {
    id: "plast-16.5-1004-H-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004H AISI304 0.4mm",
  },
  {
    id: "plast-16.5-1004-L-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004L AISI304 0.4mm",
  },
  {
    id: "plast-16.5-0230-H-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230H AISI304 0.4mm",
  },
  {
    id: "plast-16.5-0230-L-AISI304-0.4",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230L AISI304 0.4mm",
  },
  {
    id: "plast-16.5-0000-H-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000H AISI304 0.5mm",
  },
  {
    id: "plast-16.5-0000-L-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000L AISI304 0.5mm",
  },
  {
    id: "plast-16.5-1234-H-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234H AISI304 0.5mm",
  },
  {
    id: "plast-16.5-1234-L-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234L AISI304 0.5mm",
  },
  {
    id: "plast-16.5-1004-H-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004H AISI304 0.5mm",
  },
  {
    id: "plast-16.5-1004-L-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004L AISI304 0.5mm",
  },
  {
    id: "plast-16.5-0230-H-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230H AISI304 0.5mm",
  },
  {
    id: "plast-16.5-0230-L-AISI304-0.5",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230L AISI304 0.5mm",
  },
  {
    id: "plast-16.5-0000-H-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000H AISI304 0.6mm",
  },
  {
    id: "plast-16.5-0000-L-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0000L AISI304 0.6mm",
  },
  {
    id: "plast-16.5-1234-H-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234H AISI304 0.6mm",
  },
  {
    id: "plast-16.5-1234-L-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1234L AISI304 0.6mm",
  },
  {
    id: "plast-16.5-1004-H-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004H AISI304 0.6mm",
  },
  {
    id: "plast-16.5-1004-L-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 1004L AISI304 0.6mm",
  },
  {
    id: "plast-16.5-0230-H-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230H AISI304 0.6mm",
  },
  {
    id: "plast-16.5-0230-L-AISI304-0.6",
    price: "1254.23",
    alias: "Пластина ТИ16.5 0230L AISI304 0.6mm",
  },
  {
    id: "plast-28-0000-H-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 0000H AISI316 0.4mm",
  },
  {
    id: "plast-28-0000-L-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 0000L AISI316 0.4mm",
  },
  {
    id: "plast-28-1234-H-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 1234H AISI316 0.4mm",
  },
  {
    id: "plast-28-1234-L-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 1234L AISI316 0.4mm",
  },
  {
    id: "plast-28-1004-H-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 1004H AISI316 0.4mm",
  },
  {
    id: "plast-28-1004-L-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 1004L AISI316 0.4mm",
  },
  {
    id: "plast-28-0230-H-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 0230H AISI316 0.4mm",
  },
  {
    id: "plast-28-0230-L-AISI316-0.4",
    price: "2342.54",
    alias: "Пластина ТИ28 0230L AISI316 0.4mm",
  },
  {
    id: "plast-28-0000-H-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 0000H AISI316 0.5mm",
  },
  {
    id: "plast-28-0000-L-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 0000L AISI316 0.5mm",
  },
  {
    id: "plast-28-1234-H-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 1234H AISI316 0.5mm",
  },
  {
    id: "plast-28-1234-L-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 1234L AISI316 0.5mm",
  },
  {
    id: "plast-28-1004-H-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 1004H AISI316 0.5mm",
  },
  {
    id: "plast-28-1004-L-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 1004L AISI316 0.5mm",
  },
  {
    id: "plast-28-0230-H-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 0230H AISI316 0.5mm",
  },
  {
    id: "plast-28-0230-L-AISI316-0.5",
    price: "2753.41",
    alias: "Пластина ТИ28 0230L AISI316 0.5mm",
  },
  {
    id: "plast-28-0000-H-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 0000H AISI316 0.6mm",
  },
  {
    id: "plast-28-0000-L-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 0000L AISI316 0.6mm",
  },
  {
    id: "plast-28-1234-H-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 1234H AISI316 0.6mm",
  },
  {
    id: "plast-28-1234-L-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 1234L AISI316 0.6mm",
  },
  {
    id: "plast-28-1004-H-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 1004H AISI316 0.6mm",
  },
  {
    id: "plast-28-1004-L-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 1004L AISI316 0.6mm",
  },
  {
    id: "plast-28-0230-H-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 0230H AISI316 0.6mm",
  },
  {
    id: "plast-28-0230-L-AISI316-0.6",
    price: "2877.97",
    alias: "Пластина ТИ28 0230L AISI316 0.6mm",
  },
  {
    id: "plast-28-0000-H-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 0000H AISI304 0.4mm",
  },
  {
    id: "plast-28-0000-L-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 0000L AISI304 0.4mm",
  },
  {
    id: "plast-28-1234-H-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 1234H AISI304 0.4mm",
  },
  {
    id: "plast-28-1234-L-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 1234L AISI304 0.4mm",
  },
  {
    id: "plast-28-1004-H-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 1004H AISI304 0.4mm",
  },
  {
    id: "plast-28-1004-L-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 1004L AISI304 0.4mm",
  },
  {
    id: "plast-28-0230-H-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 0230H AISI304 0.4mm",
  },
  {
    id: "plast-28-0230-L-AISI304-0.4",
    price: "1842.79",
    alias: "Пластина ТИ28 0230L AISI304 0.4mm",
  },
  {
    id: "plast-28-0000-H-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 0000H AISI304 0.5mm",
  },
  {
    id: "plast-28-0000-L-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 0000L AISI304 0.5mm",
  },
  {
    id: "plast-28-1234-H-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 1234H AISI304 0.5mm",
  },
  {
    id: "plast-28-1234-L-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 1234L AISI304 0.5mm",
  },
  {
    id: "plast-28-1004-H-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 1004H AISI304 0.5mm",
  },
  {
    id: "plast-28-1004-L-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 1004L AISI304 0.5mm",
  },
  {
    id: "plast-28-0230-H-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 0230H AISI304 0.5mm",
  },
  {
    id: "plast-28-0230-L-AISI304-0.5",
    price: "2128.74",
    alias: "Пластина ТИ28 0230L AISI304 0.5mm",
  },
  {
    id: "plast-28-0000-H-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 0000H AISI304 0.6mm",
  },
  {
    id: "plast-28-0000-L-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 0000L AISI304 0.6mm",
  },
  {
    id: "plast-28-1234-H-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 1234H AISI304 0.6mm",
  },
  {
    id: "plast-28-1234-L-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 1234L AISI304 0.6mm",
  },
  {
    id: "plast-28-1004-H-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 1004H AISI304 0.6mm",
  },
  {
    id: "plast-28-1004-L-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 1004L AISI304 0.6mm",
  },
  {
    id: "plast-28-0230-H-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 0230H AISI304 0.6mm",
  },
  {
    id: "plast-28-0230-L-AISI304-0.6",
    price: "2477.15",
    alias: "Пластина ТИ28 0230L AISI304 0.6mm",
  },
  {
    id: "plast-45-0000-H-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 0000H AISI316 0.4mm",
  },
  {
    id: "plast-45-0000-L-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 0000L AISI316 0.4mm",
  },
  {
    id: "plast-45-1234-H-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 1234H AISI316 0.4mm",
  },
  {
    id: "plast-45-1234-L-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 1234L AISI316 0.4mm",
  },
  {
    id: "plast-45-1004-H-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 1004H AISI316 0.4mm",
  },
  {
    id: "plast-45-1004-L-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 1004L AISI316 0.4mm",
  },
  {
    id: "plast-45-0230-H-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 0230H AISI316 0.4mm",
  },
  {
    id: "plast-45-0230-L-AISI316-0.4",
    price: "3280.97",
    alias: "Пластина ТИ45 0230L AISI316 0.4mm",
  },
  {
    id: "plast-45-0000-H-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 0000H AISI316 0.5mm",
  },
  {
    id: "plast-45-0000-L-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 0000L AISI316 0.5mm",
  },
  {
    id: "plast-45-1234-H-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 1234H AISI316 0.5mm",
  },
  {
    id: "plast-45-1234-L-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 1234L AISI316 0.5mm",
  },
  {
    id: "plast-45-1004-H-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 1004H AISI316 0.5mm",
  },
  {
    id: "plast-45-1004-L-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 1004L AISI316 0.5mm",
  },
  {
    id: "plast-45-0230-H-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 0230H AISI316 0.5mm",
  },
  {
    id: "plast-45-0230-L-AISI316-0.5",
    price: "3879.85",
    alias: "Пластина ТИ45 0230L AISI316 0.5mm",
  },
  {
    id: "plast-45-0000-H-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 0000H AISI316 0.6mm",
  },
  {
    id: "plast-45-0000-L-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 0000L AISI316 0.6mm",
  },
  {
    id: "plast-45-1234-H-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 1234H AISI316 0.6mm",
  },
  {
    id: "plast-45-1234-L-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 1234L AISI316 0.6mm",
  },
  {
    id: "plast-45-1004-H-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 1004H AISI316 0.6mm",
  },
  {
    id: "plast-45-1004-L-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 1004L AISI316 0.6mm",
  },
  {
    id: "plast-45-0230-H-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 0230H AISI316 0.6mm",
  },
  {
    id: "plast-45-0230-L-AISI316-0.6",
    price: "4061.41",
    alias: "Пластина ТИ45 0230L AISI316 0.6mm",
  },
  {
    id: "plast-45-0000-H-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 0000H AISI304 0.4mm",
  },
  {
    id: "plast-45-0000-L-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 0000L AISI304 0.4mm",
  },
  {
    id: "plast-45-1234-H-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 1234H AISI304 0.4mm",
  },
  {
    id: "plast-45-1234-L-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 1234L AISI304 0.4mm",
  },
  {
    id: "plast-45-1004-H-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 1004H AISI304 0.4mm",
  },
  {
    id: "plast-45-1004-L-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 1004L AISI304 0.4mm",
  },
  {
    id: "plast-45-0230-H-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 0230H AISI304 0.4mm",
  },
  {
    id: "plast-45-0230-L-AISI304-0.4",
    price: "2552.59",
    alias: "Пластина ТИ45 0230L AISI304 0.4mm",
  },
  {
    id: "plast-45-0000-H-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 0000H AISI304 0.5mm",
  },
  {
    id: "plast-45-0000-L-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 0000L AISI304 0.5mm",
  },
  {
    id: "plast-45-1234-H-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 1234H AISI304 0.5mm",
  },
  {
    id: "plast-45-1234-L-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 1234L AISI304 0.5mm",
  },
  {
    id: "plast-45-1004-H-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 1004H AISI304 0.5mm",
  },
  {
    id: "plast-45-1004-L-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 1004L AISI304 0.5mm",
  },
  {
    id: "plast-45-0230-H-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 0230H AISI304 0.5mm",
  },
  {
    id: "plast-45-0230-L-AISI304-0.5",
    price: "2969.36",
    alias: "Пластина ТИ45 0230L AISI304 0.5mm",
  },
  {
    id: "plast-45-0000-H-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 0000H AISI304 0.6mm",
  },
  {
    id: "plast-45-0000-L-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 0000L AISI304 0.6mm",
  },
  {
    id: "plast-45-1234-H-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 1234H AISI304 0.6mm",
  },
  {
    id: "plast-45-1234-L-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 1234L AISI304 0.6mm",
  },
  {
    id: "plast-45-1004-H-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 1004H AISI304 0.6mm",
  },
  {
    id: "plast-45-1004-L-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 1004L AISI304 0.6mm",
  },
  {
    id: "plast-45-0230-H-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 0230H AISI304 0.6mm",
  },
  {
    id: "plast-45-0230-L-AISI304-0.6",
    price: "3477.21",
    alias: "Пластина ТИ45 0230L AISI304 0.6mm",
  },
  {
    id: "plast-65-0000-H-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 0000H AISI316 0.4mm",
  },
  {
    id: "plast-65-0000-L-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 0000L AISI316 0.4mm",
  },
  {
    id: "plast-65-1234-H-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 1234H AISI316 0.4mm",
  },
  {
    id: "plast-65-1234-L-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 1234L AISI316 0.4mm",
  },
  {
    id: "plast-65-1004-H-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 1004H AISI316 0.4mm",
  },
  {
    id: "plast-65-1004-L-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 1004L AISI316 0.4mm",
  },
  {
    id: "plast-65-0230-H-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 0230H AISI316 0.4mm",
  },
  {
    id: "plast-65-0230-L-AISI316-0.4",
    price: "4321.36",
    alias: "Пластина ТИ65 0230L AISI316 0.4mm",
  },
  {
    id: "plast-65-0000-H-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 0000H AISI316 0.5mm",
  },
  {
    id: "plast-65-0000-L-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 0000L AISI316 0.5mm",
  },
  {
    id: "plast-65-1234-H-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 1234H AISI316 0.5mm",
  },
  {
    id: "plast-65-1234-L-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 1234L AISI316 0.5mm",
  },
  {
    id: "plast-65-1004-H-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 1004H AISI316 0.5mm",
  },
  {
    id: "plast-65-1004-L-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 1004L AISI316 0.5mm",
  },
  {
    id: "plast-65-0230-H-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 0230H AISI316 0.5mm",
  },
  {
    id: "plast-65-0230-L-AISI316-0.5",
    price: "5109.64",
    alias: "Пластина ТИ65 0230L AISI316 0.5mm",
  },
  {
    id: "plast-65-0000-H-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 0000H AISI316 0.6mm",
  },
  {
    id: "plast-65-0000-L-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 0000L AISI316 0.6mm",
  },
  {
    id: "plast-65-1234-H-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 1234H AISI316 0.6mm",
  },
  {
    id: "plast-65-1234-L-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 1234L AISI316 0.6mm",
  },
  {
    id: "plast-65-1004-H-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 1004H AISI316 0.6mm",
  },
  {
    id: "plast-65-1004-L-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 1004L AISI316 0.6mm",
  },
  {
    id: "plast-65-0230-H-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 0230H AISI316 0.6mm",
  },
  {
    id: "plast-65-0230-L-AISI316-0.6",
    price: "5348.62",
    alias: "Пластина ТИ65 0230L AISI316 0.6mm",
  },
  {
    id: "plast-65-0000-H-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 0000H AISI304 0.4mm",
  },
  {
    id: "plast-65-0000-L-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 0000L AISI304 0.4mm",
  },
  {
    id: "plast-65-1234-H-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 1234H AISI304 0.4mm",
  },
  {
    id: "plast-65-1234-L-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 1234L AISI304 0.4mm",
  },
  {
    id: "plast-65-1004-H-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 1004H AISI304 0.4mm",
  },
  {
    id: "plast-65-1004-L-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 1004L AISI304 0.4mm",
  },
  {
    id: "plast-65-0230-H-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 0230H AISI304 0.4mm",
  },
  {
    id: "plast-65-0230-L-AISI304-0.4",
    price: "3362.64",
    alias: "Пластина ТИ65 0230L AISI304 0.4mm",
  },
  {
    id: "plast-65-0000-H-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 0000H AISI304 0.5mm",
  },
  {
    id: "plast-65-0000-L-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 0000L AISI304 0.5mm",
  },
  {
    id: "plast-65-1234-H-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 1234H AISI304 0.5mm",
  },
  {
    id: "plast-65-1234-L-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 1234L AISI304 0.5mm",
  },
  {
    id: "plast-65-1004-H-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 1004H AISI304 0.5mm",
  },
  {
    id: "plast-65-1004-L-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 1004L AISI304 0.5mm",
  },
  {
    id: "plast-65-0230-H-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 0230H AISI304 0.5mm",
  },
  {
    id: "plast-65-0230-L-AISI304-0.5",
    price: "3911.21",
    alias: "Пластина ТИ65 0230L AISI304 0.5mm",
  },
  {
    id: "plast-65-0000-H-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 0000H AISI304 0.6mm",
  },
  {
    id: "plast-65-0000-L-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 0000L AISI304 0.6mm",
  },
  {
    id: "plast-65-1234-H-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 1234H AISI304 0.6mm",
  },
  {
    id: "plast-65-1234-L-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 1234L AISI304 0.6mm",
  },
  {
    id: "plast-65-1004-H-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 1004H AISI304 0.6mm",
  },
  {
    id: "plast-65-1004-L-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 1004L AISI304 0.6mm",
  },
  {
    id: "plast-65-0230-H-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 0230H AISI304 0.6mm",
  },
  {
    id: "plast-65-0230-L-AISI304-0.6",
    price: "4579.64",
    alias: "Пластина ТИ65 0230L AISI304 0.6mm",
  },
  {
    id: "plast-52-0000-H-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 0000H AISI316 0.4mm",
  },
  {
    id: "plast-52-0000-L-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 0000L AISI316 0.4mm",
  },
  {
    id: "plast-52-1234-H-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 1234H AISI316 0.4mm",
  },
  {
    id: "plast-52-1234-L-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 1234L AISI316 0.4mm",
  },
  {
    id: "plast-52-1004-H-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 1004H AISI316 0.4mm",
  },
  {
    id: "plast-52-1004-L-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 1004L AISI316 0.4mm",
  },
  {
    id: "plast-52-0230-H-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 0230H AISI316 0.4mm",
  },
  {
    id: "plast-52-0230-L-AISI316-0.4",
    price: "3979.23",
    alias: "Пластина ТИ52 0230L AISI316 0.4mm",
  },
  {
    id: "plast-52-0000-H-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 0000H AISI316 0.5mm",
  },
  {
    id: "plast-52-0000-L-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 0000L AISI316 0.5mm",
  },
  {
    id: "plast-52-1234-H-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 1234H AISI316 0.5mm",
  },
  {
    id: "plast-52-1234-L-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 1234L AISI316 0.5mm",
  },
  {
    id: "plast-52-1004-H-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 1004H AISI316 0.5mm",
  },
  {
    id: "plast-52-1004-L-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 1004L AISI316 0.5mm",
  },
  {
    id: "plast-52-0230-H-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 0230H AISI316 0.5mm",
  },
  {
    id: "plast-52-0230-L-AISI316-0.5",
    price: "4689.31",
    alias: "Пластина ТИ52 0230L AISI316 0.5mm",
  },
  {
    id: "plast-52-0000-H-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 0000H AISI316 0.6mm",
  },
  {
    id: "plast-52-0000-L-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 0000L AISI316 0.6mm",
  },
  {
    id: "plast-52-1234-H-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 1234H AISI316 0.6mm",
  },
  {
    id: "plast-52-1234-L-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 1234L AISI316 0.6mm",
  },
  {
    id: "plast-52-1004-H-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 1004H AISI316 0.6mm",
  },
  {
    id: "plast-52-1004-L-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 1004L AISI316 0.6mm",
  },
  {
    id: "plast-52-0230-H-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 0230H AISI316 0.6mm",
  },
  {
    id: "plast-52-0230-L-AISI316-0.6",
    price: "4846.90",
    alias: "Пластина ТИ52 0230L AISI316 0.6mm",
  },
  {
    id: "plast-52-0000-H-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 0000H AISI304 0.4mm",
  },
  {
    id: "plast-52-0000-L-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 0000L AISI304 0.4mm",
  },
  {
    id: "plast-52-1234-H-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 1234H AISI304 0.4mm",
  },
  {
    id: "plast-52-1234-L-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 1234L AISI304 0.4mm",
  },
  {
    id: "plast-52-1004-H-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 1004H AISI304 0.4mm",
  },
  {
    id: "plast-52-1004-L-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 1004L AISI304 0.4mm",
  },
  {
    id: "plast-52-0230-H-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 0230H AISI304 0.4mm",
  },
  {
    id: "plast-52-0230-L-AISI304-0.4",
    price: "3115.56",
    alias: "Пластина ТИ52 0230L AISI304 0.4mm",
  },
  {
    id: "plast-52-0000-H-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 0000H AISI304 0.5mm",
  },
  {
    id: "plast-52-0000-L-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 0000L AISI304 0.5mm",
  },
  {
    id: "plast-52-1234-H-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 1234H AISI304 0.5mm",
  },
  {
    id: "plast-52-1234-L-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 1234L AISI304 0.5mm",
  },
  {
    id: "plast-52-1004-H-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 1004H AISI304 0.5mm",
  },
  {
    id: "plast-52-1004-L-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 1004L AISI304 0.5mm",
  },
  {
    id: "plast-52-0230-H-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 0230H AISI304 0.5mm",
  },
  {
    id: "plast-52-0230-L-AISI304-0.5",
    price: "3609.74",
    alias: "Пластина ТИ52 0230L AISI304 0.5mm",
  },
  {
    id: "plast-52-0000-H-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 0000H AISI304 0.6mm",
  },
  {
    id: "plast-52-0000-L-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 0000L AISI304 0.6mm",
  },
  {
    id: "plast-52-1234-H-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 1234H AISI304 0.6mm",
  },
  {
    id: "plast-52-1234-L-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 1234L AISI304 0.6mm",
  },
  {
    id: "plast-52-1004-H-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 1004H AISI304 0.6mm",
  },
  {
    id: "plast-52-1004-L-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 1004L AISI304 0.6mm",
  },
  {
    id: "plast-52-0230-H-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 0230H AISI304 0.6mm",
  },
  {
    id: "plast-52-0230-L-AISI304-0.6",
    price: "4163.46",
    alias: "Пластина ТИ52 0230L AISI304 0.6mm",
  },
  {
    id: "plast-82-0000-H-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 0000H AISI316 0.4mm",
  },
  {
    id: "plast-82-0000-L-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 0000L AISI316 0.4mm",
  },
  {
    id: "plast-82-1234-H-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 1234H AISI316 0.4mm",
  },
  {
    id: "plast-82-1234-L-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 1234L AISI316 0.4mm",
  },
  {
    id: "plast-82-1004-H-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 1004H AISI316 0.4mm",
  },
  {
    id: "plast-82-1004-L-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 1004L AISI316 0.4mm",
  },
  {
    id: "plast-82-0230-H-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 0230H AISI316 0.4mm",
  },
  {
    id: "plast-82-0230-L-AISI316-0.4",
    price: "5148.72",
    alias: "Пластина ТИ82 0230L AISI316 0.4mm",
  },
  {
    id: "plast-82-0000-H-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 0000H AISI316 0.5mm",
  },
  {
    id: "plast-82-0000-L-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 0000L AISI316 0.5mm",
  },
  {
    id: "plast-82-1234-H-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 1234H AISI316 0.5mm",
  },
  {
    id: "plast-82-1234-L-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 1234L AISI316 0.5mm",
  },
  {
    id: "plast-82-1004-H-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 1004H AISI316 0.5mm",
  },
  {
    id: "plast-82-1004-L-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 1004L AISI316 0.5mm",
  },
  {
    id: "plast-82-0230-H-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 0230H AISI316 0.5mm",
  },
  {
    id: "plast-82-0230-L-AISI316-0.5",
    price: "6093.08",
    alias: "Пластина ТИ82 0230L AISI316 0.5mm",
  },
  {
    id: "plast-82-0000-H-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 0000H AISI316 0.6mm",
  },
  {
    id: "plast-82-0000-L-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 0000L AISI316 0.6mm",
  },
  {
    id: "plast-82-1234-H-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 1234H AISI316 0.6mm",
  },
  {
    id: "plast-82-1234-L-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 1234L AISI316 0.6mm",
  },
  {
    id: "plast-82-1004-H-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 1004H AISI316 0.6mm",
  },
  {
    id: "plast-82-1004-L-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 1004L AISI316 0.6mm",
  },
  {
    id: "plast-82-0230-H-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 0230H AISI316 0.6mm",
  },
  {
    id: "plast-82-0230-L-AISI316-0.6",
    price: "6302.62",
    alias: "Пластина ТИ82 0230L AISI316 0.6mm",
  },
  {
    id: "plast-82-0000-H-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 0000H AISI304 0.4mm",
  },
  {
    id: "plast-82-0000-L-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 0000L AISI304 0.4mm",
  },
  {
    id: "plast-82-1234-H-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 1234H AISI304 0.4mm",
  },
  {
    id: "plast-82-1234-L-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 1234L AISI304 0.4mm",
  },
  {
    id: "plast-82-1004-H-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 1004H AISI304 0.4mm",
  },
  {
    id: "plast-82-1004-L-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 1004L AISI304 0.4mm",
  },
  {
    id: "plast-82-0230-H-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 0230H AISI304 0.4mm",
  },
  {
    id: "plast-82-0230-L-AISI304-0.4",
    price: "4000.18",
    alias: "Пластина ТИ82 0230L AISI304 0.4mm",
  },
  {
    id: "plast-82-0000-H-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 0000H AISI304 0.5mm",
  },
  {
    id: "plast-82-0000-L-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 0000L AISI304 0.5mm",
  },
  {
    id: "plast-82-1234-H-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 1234H AISI304 0.5mm",
  },
  {
    id: "plast-82-1234-L-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 1234L AISI304 0.5mm",
  },
  {
    id: "plast-82-1004-H-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 1004H AISI304 0.5mm",
  },
  {
    id: "plast-82-1004-L-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 1004L AISI304 0.5mm",
  },
  {
    id: "plast-82-0230-H-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 0230H AISI304 0.5mm",
  },
  {
    id: "plast-82-0230-L-AISI304-0.5",
    price: "4657.38",
    alias: "Пластина ТИ82 0230L AISI304 0.5mm",
  },
  {
    id: "plast-82-0000-H-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 0000H AISI304 0.6mm",
  },
  {
    id: "plast-82-0000-L-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 0000L AISI304 0.6mm",
  },
  {
    id: "plast-82-1234-H-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 1234H AISI304 0.6mm",
  },
  {
    id: "plast-82-1234-L-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 1234L AISI304 0.6mm",
  },
  {
    id: "plast-82-1004-H-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 1004H AISI304 0.6mm",
  },
  {
    id: "plast-82-1004-L-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 1004L AISI304 0.6mm",
  },
  {
    id: "plast-82-0230-H-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 0230H AISI304 0.6mm",
  },
  {
    id: "plast-82-0230-L-AISI304-0.6",
    price: "5393.74",
    alias: "Пластина ТИ82 0230L AISI304 0.6mm",
  },
  {
    id: "plast-95-0000-H-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 0000H AISI316 0.4mm",
  },
  {
    id: "plast-95-0000-L-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 0000L AISI316 0.4mm",
  },
  {
    id: "plast-95-1234-H-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 1234H AISI316 0.4mm",
  },
  {
    id: "plast-95-1234-L-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 1234L AISI316 0.4mm",
  },
  {
    id: "plast-95-1004-H-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 1004H AISI316 0.4mm",
  },
  {
    id: "plast-95-1004-L-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 1004L AISI316 0.4mm",
  },
  {
    id: "plast-95-0230-H-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 0230H AISI316 0.4mm",
  },
  {
    id: "plast-95-0230-L-AISI316-0.4",
    price: "7582.46",
    alias: "Пластина ТИ95 0230L AISI316 0.4mm",
  },
  {
    id: "plast-95-0000-H-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 0000H AISI316 0.5mm",
  },
  {
    id: "plast-95-0000-L-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 0000L AISI316 0.5mm",
  },
  {
    id: "plast-95-1234-H-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 1234H AISI316 0.5mm",
  },
  {
    id: "plast-95-1234-L-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 1234L AISI316 0.5mm",
  },
  {
    id: "plast-95-1004-H-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 1004H AISI316 0.5mm",
  },
  {
    id: "plast-95-1004-L-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 1004L AISI316 0.5mm",
  },
  {
    id: "plast-95-0230-H-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 0230H AISI316 0.5mm",
  },
  {
    id: "plast-95-0230-L-AISI316-0.5",
    price: "7582.46",
    alias: "Пластина ТИ95 0230L AISI316 0.5mm",
  },
  {
    id: "plast-95-0000-H-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 0000H AISI316 0.6mm",
  },
  {
    id: "plast-95-0000-L-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 0000L AISI316 0.6mm",
  },
  {
    id: "plast-95-1234-H-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 1234H AISI316 0.6mm",
  },
  {
    id: "plast-95-1234-L-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 1234L AISI316 0.6mm",
  },
  {
    id: "plast-95-1004-H-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 1004H AISI316 0.6mm",
  },
  {
    id: "plast-95-1004-L-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 1004L AISI316 0.6mm",
  },
  {
    id: "plast-95-0230-H-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 0230H AISI316 0.6mm",
  },
  {
    id: "plast-95-0230-L-AISI316-0.6",
    price: "7943.69",
    alias: "Пластина ТИ95 0230L AISI316 0.6mm",
  },
  {
    id: "plast-95-0000-H-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 0000H AISI304 0.4mm",
  },
  {
    id: "plast-95-0000-L-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 0000L AISI304 0.4mm",
  },
  {
    id: "plast-95-1234-H-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 1234H AISI304 0.4mm",
  },
  {
    id: "plast-95-1234-L-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 1234L AISI304 0.4mm",
  },
  {
    id: "plast-95-1004-H-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 1004H AISI304 0.4mm",
  },
  {
    id: "plast-95-1004-L-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 1004L AISI304 0.4mm",
  },
  {
    id: "plast-95-0230-H-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 0230H AISI304 0.4mm",
  },
  {
    id: "plast-95-0230-L-AISI304-0.4",
    price: "5770.90",
    alias: "Пластина ТИ95 0230L AISI304 0.4mm",
  },
  {
    id: "plast-95-0000-H-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 0000H AISI304 0.5mm",
  },
  {
    id: "plast-95-0000-L-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 0000L AISI304 0.5mm",
  },
  {
    id: "plast-95-1234-H-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 1234H AISI304 0.5mm",
  },
  {
    id: "plast-95-1234-L-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 1234L AISI304 0.5mm",
  },
  {
    id: "plast-95-1004-H-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 1004H AISI304 0.5mm",
  },
  {
    id: "plast-95-1004-L-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 1004L AISI304 0.5mm",
  },
  {
    id: "plast-95-0230-H-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 0230H AISI304 0.5mm",
  },
  {
    id: "plast-95-0230-L-AISI304-0.5",
    price: "5770.90",
    alias: "Пластина ТИ95 0230L AISI304 0.5mm",
  },
  {
    id: "plast-95-0000-H-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 0000H AISI304 0.6mm",
  },
  {
    id: "plast-95-0000-L-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 0000L AISI304 0.6mm",
  },
  {
    id: "plast-95-1234-H-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 1234H AISI304 0.6mm",
  },
  {
    id: "plast-95-1234-L-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 1234L AISI304 0.6mm",
  },
  {
    id: "plast-95-1004-H-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 1004H AISI304 0.6mm",
  },
  {
    id: "plast-95-1004-L-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 1004L AISI304 0.6mm",
  },
  {
    id: "plast-95-0230-H-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 0230H AISI304 0.6mm",
  },
  {
    id: "plast-95-0230-L-AISI304-0.6",
    price: "6781.31",
    alias: "Пластина ТИ95 0230L AISI304 0.6mm",
  },
  {
    id: "plast-116-0000-H-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 0000H AISI316 0.4mm",
  },
  {
    id: "plast-116-0000-L-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 0000L AISI316 0.4mm",
  },
  {
    id: "plast-116-1234-H-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 1234H AISI316 0.4mm",
  },
  {
    id: "plast-116-1234-L-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 1234L AISI316 0.4mm",
  },
  {
    id: "plast-116-1004-H-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 1004H AISI316 0.4mm",
  },
  {
    id: "plast-116-1004-L-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 1004L AISI316 0.4mm",
  },
  {
    id: "plast-116-0230-H-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 0230H AISI316 0.4mm",
  },
  {
    id: "plast-116-0230-L-AISI316-0.4",
    price: "9154.46",
    alias: "Пластина ТИ116 0230L AISI316 0.4mm",
  },
  {
    id: "plast-116-0000-H-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 0000H AISI316 0.5mm",
  },
  {
    id: "plast-116-0000-L-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 0000L AISI316 0.5mm",
  },
  {
    id: "plast-116-1234-H-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 1234H AISI316 0.5mm",
  },
  {
    id: "plast-116-1234-L-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 1234L AISI316 0.5mm",
  },
  {
    id: "plast-116-1004-H-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 1004H AISI316 0.5mm",
  },
  {
    id: "plast-116-1004-L-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 1004L AISI316 0.5mm",
  },
  {
    id: "plast-116-0230-H-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 0230H AISI316 0.5mm",
  },
  {
    id: "plast-116-0230-L-AISI316-0.5",
    price: "9154.46",
    alias: "Пластина ТИ116 0230L AISI316 0.5mm",
  },
  {
    id: "plast-116-0000-H-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 0000H AISI316 0.6mm",
  },
  {
    id: "plast-116-0000-L-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 0000L AISI316 0.6mm",
  },
  {
    id: "plast-116-1234-H-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 1234H AISI316 0.6mm",
  },
  {
    id: "plast-116-1234-L-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 1234L AISI316 0.6mm",
  },
  {
    id: "plast-116-1004-H-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 1004H AISI316 0.6mm",
  },
  {
    id: "plast-116-1004-L-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 1004L AISI316 0.6mm",
  },
  {
    id: "plast-116-0230-H-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 0230H AISI316 0.6mm",
  },
  {
    id: "plast-116-0230-L-AISI316-0.6",
    price: "9595.00",
    alias: "Пластина ТИ116 0230L AISI316 0.6mm",
  },
  {
    id: "plast-116-0000-H-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 0000H AISI304 0.4mm",
  },
  {
    id: "plast-116-0000-L-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 0000L AISI304 0.4mm",
  },
  {
    id: "plast-116-1234-H-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 1234H AISI304 0.4mm",
  },
  {
    id: "plast-116-1234-L-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 1234L AISI304 0.4mm",
  },
  {
    id: "plast-116-1004-H-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 1004H AISI304 0.4mm",
  },
  {
    id: "plast-116-1004-L-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 1004L AISI304 0.4mm",
  },
  {
    id: "plast-116-0230-H-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 0230H AISI304 0.4mm",
  },
  {
    id: "plast-116-0230-L-AISI304-0.4",
    price: "6945.23",
    alias: "Пластина ТИ116 0230L AISI304 0.4mm",
  },
  {
    id: "plast-116-0000-H-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 0000H AISI304 0.5mm",
  },
  {
    id: "plast-116-0000-L-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 0000L AISI304 0.5mm",
  },
  {
    id: "plast-116-1234-H-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 1234H AISI304 0.5mm",
  },
  {
    id: "plast-116-1234-L-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 1234L AISI304 0.5mm",
  },
  {
    id: "plast-116-1004-H-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 1004H AISI304 0.5mm",
  },
  {
    id: "plast-116-1004-L-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 1004L AISI304 0.5mm",
  },
  {
    id: "plast-116-0230-H-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 0230H AISI304 0.5mm",
  },
  {
    id: "plast-116-0230-L-AISI304-0.5",
    price: "6945.23",
    alias: "Пластина ТИ116 0230L AISI304 0.5mm",
  },
  {
    id: "plast-116-0000-H-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 0000H AISI304 0.6mm",
  },
  {
    id: "plast-116-0000-L-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 0000L AISI304 0.6mm",
  },
  {
    id: "plast-116-1234-H-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 1234H AISI304 0.6mm",
  },
  {
    id: "plast-116-1234-L-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 1234L AISI304 0.6mm",
  },
  {
    id: "plast-116-1004-H-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 1004H AISI304 0.6mm",
  },
  {
    id: "plast-116-1004-L-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 1004L AISI304 0.6mm",
  },
  {
    id: "plast-116-0230-H-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 0230H AISI304 0.6mm",
  },
  {
    id: "plast-116-0230-L-AISI304-0.6",
    price: "8177.46",
    alias: "Пластина ТИ116 0230L AISI304 0.6mm",
  },
  {
    id: "uplot-025-EPDM-start",
    price: "151.17",
    alias: "Уплотнение ТИ025 EPDM start",
  },
  {
    id: "uplot-025-EPDM-end",
    price: "151.17",
    alias: "Уплотнение ТИ025 EPDM end",
  },
  {
    id: "uplot-025-EPDM-center",
    price: "151.17",
    alias: "Уплотнение ТИ025 EPDM",
  },
  {
    id: "uplot-025-NBR-start",
    price: "151.17",
    alias: "Уплотнение ТИ025 NBR start",
  },
  {
    id: "uplot-025-NBR-end",
    price: "151.17",
    alias: "Уплотнение ТИ025 NBR end",
  },
  {
    id: "uplot-025-NBR-center",
    price: "151.17",
    alias: "Уплотнение ТИ025 NBR",
  },
  {
    id: "uplot-077-EPDM-start",
    price: "227.79",
    alias: "Уплотнение ТИ077 EPDM start",
  },
  {
    id: "uplot-077-EPDM-end",
    price: "227.79",
    alias: "Уплотнение ТИ077 EPDM end",
  },
  {
    id: "uplot-077-EPDM-center",
    price: "227.79",
    alias: "Уплотнение ТИ077 EPDM",
  },
  {
    id: "uplot-077-NBR-start",
    price: "227.79",
    alias: "Уплотнение ТИ077 NBR start",
  },
  {
    id: "uplot-077-NBR-end",
    price: "227.79",
    alias: "Уплотнение ТИ077 NBR end",
  },
  {
    id: "uplot-077-NBR-center",
    price: "227.79",
    alias: "Уплотнение ТИ077 NBR",
  },
  {
    id: "uplot-13-EPDM-start",
    price: "247.46",
    alias: "Уплотнение ТИ13 EPDM start",
  },
  {
    id: "uplot-13-EPDM-end",
    price: "247.46",
    alias: "Уплотнение ТИ13 EPDM end",
  },
  {
    id: "uplot-13-EPDM-center",
    price: "247.46",
    alias: "Уплотнение ТИ13 EPDM",
  },
  {
    id: "uplot-13-NBR-start",
    price: "247.46",
    alias: "Уплотнение ТИ13 NBR start",
  },
  { id: "uplot-13-NBR-end", price: "247.46", alias: "Уплотнение ТИ13 NBR end" },
  { id: "uplot-13-NBR-center", price: "247.46", alias: "Уплотнение ТИ13 NBR" },
  {
    id: "uplot-18-EPDM-start",
    price: "290.95",
    alias: "Уплотнение ТИ18 EPDM start",
  },
  {
    id: "uplot-18-EPDM-end",
    price: "290.95",
    alias: "Уплотнение ТИ18 EPDM end",
  },
  {
    id: "uplot-18-EPDM-center",
    price: "290.95",
    alias: "Уплотнение ТИ18 EPDM",
  },
  {
    id: "uplot-18-NBR-start",
    price: "290.95",
    alias: "Уплотнение ТИ18 NBR start",
  },
  { id: "uplot-18-NBR-end", price: "290.95", alias: "Уплотнение ТИ18 NBR end" },
  { id: "uplot-18-NBR-center", price: "290.95", alias: "Уплотнение ТИ18 NBR" },
  {
    id: "uplot-16.5-EPDM-start",
    price: "516.28",
    alias: "Уплотнение ТИ16.5 EPDM start",
  },
  {
    id: "uplot-16.5-EPDM-end",
    price: "516.28",
    alias: "Уплотнение ТИ16.5 EPDM end",
  },
  {
    id: "uplot-16.5-EPDM-center",
    price: "516.28",
    alias: "Уплотнение ТИ16.5 EPDM",
  },
  {
    id: "uplot-16.5-NBR-start",
    price: "602.74",
    alias: "Уплотнение ТИ16.5 NBR start",
  },
  {
    id: "uplot-16.5-NBR-end",
    price: "602.74",
    alias: "Уплотнение ТИ16.5 NBR end",
  },
  {
    id: "uplot-16.5-NBR-center",
    price: "602.74",
    alias: "Уплотнение ТИ16.5 NBR",
  },
  {
    id: "uplot-28-EPDM-start",
    price: "636.77",
    alias: "Уплотнение ТИ28 EPDM start",
  },
  {
    id: "uplot-28-EPDM-end",
    price: "636.77",
    alias: "Уплотнение ТИ28 EPDM end",
  },
  {
    id: "uplot-28-EPDM-center",
    price: "636.77",
    alias: "Уплотнение ТИ28 EPDM",
  },
  {
    id: "uplot-28-NBR-start",
    price: "636.77",
    alias: "Уплотнение ТИ28 NBR start",
  },
  { id: "uplot-28-NBR-end", price: "636.77", alias: "Уплотнение ТИ28 NBR end" },
  { id: "uplot-28-NBR-center", price: "636.77", alias: "Уплотнение ТИ28 NBR" },
  {
    id: "uplot-45-EPDM-start",
    price: "789.59",
    alias: "Уплотнение ТИ45 EPDM start",
  },
  {
    id: "uplot-45-EPDM-end",
    price: "789.59",
    alias: "Уплотнение ТИ45 EPDM end",
  },
  {
    id: "uplot-45-EPDM-center",
    price: "789.59",
    alias: "Уплотнение ТИ45 EPDM",
  },
  {
    id: "uplot-45-NBR-start",
    price: "770.34",
    alias: "Уплотнение ТИ45 NBR start",
  },
  { id: "uplot-45-NBR-end", price: "770.34", alias: "Уплотнение ТИ45 NBR end" },
  { id: "uplot-45-NBR-center", price: "770.34", alias: "Уплотнение ТИ45 NBR" },
  {
    id: "uplot-65-EPDM-start",
    price: "1225.91",
    alias: "Уплотнение ТИ65 EPDM start",
  },
  {
    id: "uplot-65-EPDM-end",
    price: "1225.91",
    alias: "Уплотнение ТИ65 EPDM end",
  },
  {
    id: "uplot-65-EPDM-center",
    price: "1225.91",
    alias: "Уплотнение ТИ65 EPDM",
  },
  {
    id: "uplot-65-NBR-start",
    price: "1225.91",
    alias: "Уплотнение ТИ65 NBR start",
  },
  {
    id: "uplot-65-NBR-end",
    price: "1225.91",
    alias: "Уплотнение ТИ65 NBR end",
  },
  { id: "uplot-65-NBR-center", price: "1225.91", alias: "Уплотнение ТИ65 NBR" },
  {
    id: "uplot-52-EPDM-start",
    price: "933.93",
    alias: "Уплотнение ТИ52 EPDM start",
  },
  {
    id: "uplot-52-EPDM-end",
    price: "933.93",
    alias: "Уплотнение ТИ52 EPDM end",
  },
  {
    id: "uplot-52-EPDM-center",
    price: "933.93",
    alias: "Уплотнение ТИ52 EPDM",
  },
  {
    id: "uplot-52-NBR-start",
    price: "909.08",
    alias: "Уплотнение ТИ52 NBR start",
  },
  { id: "uplot-52-NBR-end", price: "909.08", alias: "Уплотнение ТИ52 NBR end" },
  { id: "uplot-52-NBR-center", price: "909.08", alias: "Уплотнение ТИ52 NBR" },
  {
    id: "uplot-82-EPDM-start",
    price: "1333.59",
    alias: "Уплотнение ТИ82 EPDM start",
  },
  {
    id: "uplot-82-EPDM-end",
    price: "1333.59",
    alias: "Уплотнение ТИ82 EPDM end",
  },
  {
    id: "uplot-82-EPDM-center",
    price: "1333.59",
    alias: "Уплотнение ТИ82 EPDM",
  },
  {
    id: "uplot-82-NBR-start",
    price: "1333.59",
    alias: "Уплотнение ТИ82 NBR start",
  },
  {
    id: "uplot-82-NBR-end",
    price: "1333.59",
    alias: "Уплотнение ТИ82 NBR end",
  },
  { id: "uplot-82-NBR-center", price: "1333.59", alias: "Уплотнение ТИ82 NBR" },
  {
    id: "uplot-95-EPDM-start",
    price: "2053.19",
    alias: "Уплотнение ТИ95 EPDM start",
  },
  {
    id: "uplot-95-EPDM-end",
    price: "2053.19",
    alias: "Уплотнение ТИ95 EPDM end",
  },
  {
    id: "uplot-95-EPDM-center",
    price: "2053.19",
    alias: "Уплотнение ТИ95 EPDM",
  },
  {
    id: "uplot-95-NBR-start",
    price: "2053.19",
    alias: "Уплотнение ТИ95 NBR start",
  },
  {
    id: "uplot-95-NBR-end",
    price: "2053.19",
    alias: "Уплотнение ТИ95 NBR end",
  },
  { id: "uplot-95-NBR-center", price: "2053.19", alias: "Уплотнение ТИ95 NBR" },
  {
    id: "uplot-116-EPDM-start",
    price: "3415.78",
    alias: "Уплотнение ТИ116 EPDM start",
  },
  {
    id: "uplot-116-EPDM-end",
    price: "3415.78",
    alias: "Уплотнение ТИ116 EPDM end",
  },
  {
    id: "uplot-116-EPDM-center",
    price: "3415.78",
    alias: "Уплотнение ТИ116 EPDM",
  },
  {
    id: "uplot-116-NBR-start",
    price: "3415.78",
    alias: "Уплотнение ТИ116 NBR start",
  },
  {
    id: "uplot-116-NBR-end",
    price: "3415.78",
    alias: "Уплотнение ТИ116 NBR end",
  },
  {
    id: "uplot-116-NBR-center",
    price: "3415.78",
    alias: "Уплотнение ТИ116 NBR",
  },
];