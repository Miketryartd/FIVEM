import * as z from 'zod';

const User = z.object({
    firstName: z.string().min(1, "First name required").max(50, "50 characters only allowed"),
    middleName: z.string().min(1, "Middle name required").max(50, "50 characters only allowed"),
    lastName: z.string().min(1, "Last name required").max(50, "50 characters only allowed"),
    suffix: z.string().optional(),
    birthdate: z.string().date(),
    email: z.string().email("Must be valid email"),
    contact: z.string().min(1, "Contact is allowed").max(11, "Valid phone number"),
    address: z.string().min(1, "Address required").max(200, "200 characters only allowed"),
    password: z.string().min(6, "Password too short"),
});

export default User;