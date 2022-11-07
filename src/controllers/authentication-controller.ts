import authenticationService, { SignInParams } from '@/services/authentication-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  const result = await authenticationService.signIn({ email, password });
  console.log(result)
  res.status(httpStatus.OK).send(result);
}


export async function singInOauthPost(req: Request, res: Response) {
  const code = req.body.code;
  const result = await authenticationService.singInOauthPost(code);
  console.log(result)

  res.status(httpStatus.OK).send(result);
}