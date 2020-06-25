const Topups = require('../../lib/topups');

describe('Class Topups', () => {
  it('Get all Providers', async () => {

    const topup = new Topups('teste', 'teste');
    const response = await topup.getProviders(61);

    const provider = {
        category: 1,
        name: "Claro",
        providerId: 2087,
        RegionaisnameProvider: [],
        TipoRecarganameProvider: 2,
        maxValue: 0.0,
        minValue: 0.0
    };

    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining(provider)
      ])
    )

  })
});