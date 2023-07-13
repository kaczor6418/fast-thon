import { AuthErrorCodes } from '@firebase/auth';

export type AuthErrorCode = (typeof AuthErrorCodes)[keyof typeof AuthErrorCodes];

export class AuthError extends Error {
  readonly code: AuthErrorCode | string;

  constructor(message: string, errorCode: AuthErrorCode | string) {
    super(`${message}\n`);
    this.code = errorCode;
    this.name = AuthError.name;
  }
}
