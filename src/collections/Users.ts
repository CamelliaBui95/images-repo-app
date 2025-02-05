import type { CollectionConfig } from 'payload'

const LOCK_TIME_IN_MINUTE = 15
const MAX_ATTEMPS = 3

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    verify: true,
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: true,
    },
    tokenExpiration: 10000,
    maxLoginAttempts: MAX_ATTEMPS,
    lockTime: LOCK_TIME_IN_MINUTE * 60 * 1000,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
    },
    { name: 'firstname', type: 'text', required: true },
    { name: 'lastname', type: 'text', required: true },
  ],
}
