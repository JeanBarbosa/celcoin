import Merchant from '../../lib/merchant';

describe('Class Merchant', () => {

  const merchant = new Merchant('teste', 'teste');

  it('Retrieve your balance info', async () => {
    const response = await merchant.balance();

    expect(response).toMatchObject({ balance: expect.any(Number)});

  })
})