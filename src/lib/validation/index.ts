import * as z from "zod"

export const signUpValidationSchema = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "Too short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Too short" }),
  })

  export const signInValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Too short" }),
  })

  export const PostValidationSchema = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  })