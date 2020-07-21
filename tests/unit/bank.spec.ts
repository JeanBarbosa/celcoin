import Bank from '../../lib/bank';

describe('Class Bank', () => {

  const bank = new Bank('teste', 'teste');

  it('Get all banks', async () => {
    const response = await bank.all();

    expect(response).toMatchObject({ banks: expect.any(Array)});
  })

})
