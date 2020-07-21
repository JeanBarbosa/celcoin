import Bank from '../../lib/bank';

describe('Class Bank', () => {

  const bank = new Bank('teste', 'teste');

  it('Get all banks', async () => {
    const response = await bank.all();

    expect(response).toMatchObject({ banks: expect.any(Array)});
  })


  it('Get a list of all pending transactions', async () => {
    const response = await bank.pendecy();
    expect(response).toMatchObject({ pendings: expect.any(Object)});
  })

})
