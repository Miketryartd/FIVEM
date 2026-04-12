import * as z from 'zod';

const LoginUser = z.object({
    email: z.string().email("Must be valid email"),
    password: z.string().min(6, "Password too short"),
});

export default LoginUser;