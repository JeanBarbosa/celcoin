const Topups = require('../../lib/topups');

describe('Class Topups', () => {

  const topup = new Topups('teste', 'teste');

  it('Get a list of providers', async () => {

    const { providers } = await topup.getProviders(61);
    
    const provider = {
      category: 1,
      name: "Claro",
      providerId: 2087,
      RegionaisnameProvider: [],
      TipoRecarganameProvider: 2,
      maxValue: 0.0,
      minValue: 0.0
    };

    expect(providers).toEqual(
      expect.arrayContaining([
        expect.objectContaining(provider)
      ])
    )

  })

  it('Find Provider', async () => {
    const response = await topup.findProvider(61, '999999999');

    const expected = {
      nameProvider: "Vivo",
      providerId: 2088,
      errorCode: "000",
      message: "SUCESSO",
      status: 0
    }

    expect(response).toEqual(expected);
  })

  it('Get Value of Provider', async () => {

    const response = await topup.getProviderValues(61, 2087);

    const value = {
      properties: null,
      code: 0,
      cost: 0.0,
      detail: "",
      productName: "R$ 13,00",
      checkSum: -2147483640,
      dueProduct: 30,
      valueBonus: 0.0,
      maxValue: 13.0,
      minValue: 13.0
    };

    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          value
        )
      ])
    )
  });

  it('Topups', async () => {
    
    const body = {
      "externalTerminal": "1234567",
      "topupData": {
         "paymentMethod": "DINHEIRO",
        "pontos": 0,
        "value": 20.0,
        "originalValue": 0,
        "valueWithDiscount": 0,
        "valueWithAdditional": 0
      },
      "cpfCnpj": "11036382702",
     "signerCode":  "11415044805",
     "providerId": 2087,
     "phone": {
       "stateCode": 61,
       "countryCode": 55,
       "number": "993576555"
     }
  };

    const response = await topup.postTopups(body);

    expect(response).toMatchObject({ transactionId: expect.any(Number)});

  })

});