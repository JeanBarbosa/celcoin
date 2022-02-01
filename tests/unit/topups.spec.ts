import Topups from '../../lib/topups';

describe('Class Topups', () => {
  const topup = new Topups('teste', 'teste');

  it('Get a list of providers', async () => {
    const { providers } = await topup.getProviders({ stateCode: 61 });

    const provider = {
      category: 1,
      name: 'Claro',
      providerId: 2087,
      RegionaisnameProvider: [],
      TipoRecarganameProvider: 2,
      maxValue: 0.0,
      minValue: 0.0,
    };

    expect(providers).toEqual(
      expect.arrayContaining([expect.objectContaining(provider)]),
    );
  });

  it('Find Provider', async () => {
    const response = await topup.findProvider({ stateCode: 61, phoneNumber: '999999999' });

    const expected = {
      nameProvider: 'Vivo',
      providerId: 2088,
      errorCode: '000',
      message: 'SUCESSO',
      status: 0,
    };

    expect(response).toEqual(expected);
  });

  it('Retrieve a list of Providers and its values', async () => {
    const response = await topup.getProviderValues(61, 2087);

    const { value } = response;

    const expected = {
      "checkSum": -2147483640,
      "code": 0,
      "cost": 0,
      "detail": "",
      "dueProduct": 20200724,
      "maxValue": 13,
      "minValue": 13,
      "productName": "13,00",
      "properties": null,
      "valueBonus": 0
    };

    expect(value).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)]),
    );
  });

  /*
  it('Topups', async () => {
    const body = {
      externalTerminal: '1234567',
      topupData: {
        paymentMethod: 'DINHEIRO',
        pontos: 0,
        value: 20.0,
        originalValue: 0,
        valueWithDiscount: 0,
        valueWithAdditional: 0,
      },
      cpfCnpj: '11036382702',
      signerCode: '11415044805',
      providerId: 2087,
      phone: {
        stateCode: 61,
        countryCode: 55,
        number: '993576555',
      },
    };

    const response = await topup.new(body);

    expect(response).toMatchObject({ transactionId: expect.any(Number) });
  });
 */
  /*
  it('Capture a posted topup transaction', async () => {
    const response = await topup.capture(3830743);

    const expected = {
      errorCode: '061',
      message: 'Transacao nao esta pendente'
    }

    expect(response).toEqual(expected);

  }) */
});
