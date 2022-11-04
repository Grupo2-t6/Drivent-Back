import sessionRepository from '@/repositories/session-repository';
import userRepository from '@/repositories/user-repository';
import { exclude } from '@/utils/prisma-utils';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from './errors';

import axios from 'axios';
import qs from 'query-string';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(userId: any) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<User, 'email' | 'password'>;

type SignInResult = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};

type GetUserOrFailResult = Pick<User, 'id' | 'email' | 'password'>;


export async function singInOauthPost(code: string){
  
  const token = await exchangeCodeForAccessToken(code);
  const dataUser = await fetchUser(token)
  
  const isUser = await userRepository.findyUserById(dataUser.id)
  if(!isUser){
    await userRepository.create({id: dataUser.id, email:dataUser.email, password: 'passFake' })
  }
  console.log(dataUser)
  console.log(dataUser.id)
  return await createSession(dataUser.id)

  async function exchangeCodeForAccessToken(code: string) {
    console.log(code)
    const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
    const { REDIRECT_URL, CLIENT_ID, CLIENT_SECRET } = process.env;
    const params = {
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URL,
      client_id: '8ffd828e28e1aa67ba4f',
      client_secret: '2c1ec8c59ed461003aa3a0578b02a7c9b88791da'
    };
  
    const { data } = await axios.post(GITHUB_ACCESS_TOKEN_URL, params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const parsedData = qs.parse(data);
    return parsedData.access_token;
  }

  async function fetchUser(token: any) {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data
  }
}

const authenticationService = {
  signIn,
  singInOauthPost
};

export default authenticationService;
export * from './errors';
