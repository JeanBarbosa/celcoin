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

  it('Get a list of occurrences', async () => {
    const response = await bank.occurrency({
      startDate: '03-03-2019',
      endDate: '03-04-2019'
    })

    expect(response).toMatchObject({ occurrences: expect.any(Array)});

  })

  it('Get all Get a list of institutions', async () => {
    const response = await bank.institutions();

    expect(response).toMatchObject({ convenants: expect.any(Array)});
  })

})
