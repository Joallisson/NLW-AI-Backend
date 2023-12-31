import {fastify} from 'fastify'
import { getAllPromptRoute } from './routes/get-all-prompts'
import { uploadVideoLoad } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'
import { fastifyCors } from '@fastify/cors'

const app = fastify()

app.register(
    fastifyCors,
    {
        origin: '*'
    }
)

app.register(getAllPromptRoute)
app.register(uploadVideoLoad)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running on port: 3333')
})