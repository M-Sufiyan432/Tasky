import z from 'zod';

const nameSchema = z
.string()
.max(40,{message:"The name should be below 100 character "})
.trim()
.min(3,{message:"The name should be above 3 character "})

const userNameSchema = z
.string()
.max(40,{message:"The name should be below 100 character "})
.trim()
.min(3,{message:"The name should be above 3 character "})

const emailSchema = z.string()
.email({message:"Please Enter Valid Email"});

export const SignupUserSchema = z.object({
    email : emailSchema,
    name : nameSchema,
    username : userNameSchema,
    password : z
    .string()
    .trim()
    .max(100,{message:"The password must be below 100 character"})
    .min(6,{message:"The password must be above 6 character"}),

})
export const SignInUserSchema = z.object({


    email : emailSchema,
    
    password : z
    .string()
    .trim()
    .max(100,{message:"The password must be below 100 character"})
    .min(6,{message:"The password must be above 6 character"}),

})