import { supabase } from './configuration';

export interface SignInProps {
  email: string;
  password: string;
}

const signin = async ({ email, password }: SignInProps) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.error('Error at signin function: ', error);
    throw error
  }
};

export default signin;
