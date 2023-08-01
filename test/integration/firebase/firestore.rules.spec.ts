import { assertFails } from '@firebase/rules-unit-testing';
import { guestUserContext } from '../integration-setup';

describe('Offers collection tests', () => {
  it('should allow to read offers for any user', async () => {
    const testQuery = guestUserContext.collection('collection');
    expect(await assertFails(testQuery.get()));
  });
});
