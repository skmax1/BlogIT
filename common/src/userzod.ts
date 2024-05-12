import zod from "zod"

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



//export types
export type SignupInput = zod.infer<typeof signUpBody>
export type SiginInput = zod.infer<typeof signInBody>