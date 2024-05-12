import zod, { string } from "zod"

export const signUpBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
                                                                                         
})


export const signInBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const createPostBody = zod.object({
    title: zod.string(),
    writeup: zod.string()
})


export const updatePostBody = zod.object({
    id: string(),
    title: string(),
    writeup: string()
})

//export types
export type createPostInput = zod.infer<typeof createPostBody>
export type updatePostInput = zod.infer<typeof updatePostBody>

//export types
export type SignupInput = zod.infer<typeof signUpBody>
export type SiginInput = zod.infer<typeof signInBody>