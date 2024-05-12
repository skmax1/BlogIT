import zod, { string } from "zod"

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

