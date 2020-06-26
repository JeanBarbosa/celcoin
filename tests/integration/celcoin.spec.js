const Celcoin = require('../../index');

describe('Class Celcoin', () => {

  const celcoin = new Celcoin('teste', 'teste');

  it('Get all Providers', async () => {

    const { providers } = await celcoin.topup.getProviders(61);

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

  it('Retrieve your balance info', async () => {
    const response = await celcoin.merchant.balance();

    expect(response).toMatchObject({ balance: expect.any(Number)});

  })
});