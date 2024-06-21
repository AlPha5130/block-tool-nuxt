import { NuxtAuthHandler } from '#auth'
import type { AuthConfig } from '@auth/core'
import ZhMinecraftWiki from '~/server/utils/provider'

const runtimeConfig = useRuntimeConfig()

export const authConfig: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [ZhMinecraftWiki],
  basePath: '/api/auth'
}

export default NuxtAuthHandler(authConfig, runtimeConfig)
