const Celcoin = require('../../index');

describe('Class Celcoin', () => {
  it('Get all Providers', async () => {

    const celcoin = new Celcoin('teste', 'teste');
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
});