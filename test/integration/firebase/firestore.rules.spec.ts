import { describe, it, expect } from 'vitest';
import { assertFails } from '@firebase/rules-unit-testing';
import { guestUserContext } from '../integration-setup';

describe('Offers collection tests', () => {
  it('should allow to read offers for any user', async () => {
    const testQuery = guestUserContext.collection('collection');

    const error = await assertFails(testQuery.get());

    expect(error).toBeDefined();
  });
});
