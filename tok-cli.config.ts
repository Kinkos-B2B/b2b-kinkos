import { RootConfig } from '@toktokhan-dev/cli'
import { commit } from '@toktokhan-dev/cli-plugin-commit'
import { genApi } from '@toktokhan-dev/cli-plugin-gen-api-react-query'
import { genIcon } from '@toktokhan-dev/cli-plugin-gen-icon-chakra'
import { genImg } from '@toktokhan-dev/cli-plugin-gen-img'
import { genTheme } from '@toktokhan-dev/cli-plugin-gen-theme-chakra'

const config: RootConfig<{
  plugins: [
    typeof genImg,
    typeof genApi,
    typeof genTheme,
    typeof genIcon,
    typeof commit,
  ]
}> = {
  plugins: [genImg, genApi, genTheme, genIcon, commit],
  'gen:img': {
    input: 'public/images',
    oneDepth: true,
    basePath: '/images',
  },
  'gen:api': {
    swaggerSchemaUrl:
      'https://b2bdevapi.kinkos.co.kr/v3/api-docs/1.%20%EC%9D%BC%EB%B0%98%20API',
    httpClientType: 'fetch',
    instancePath: '@/configs/fetch/fetch-extend',
  },
  'gen:theme': {
    tokenModes: {
      colors: {
        light: 'light',
        dark: 'dark',
      },
      textStyles: {
        base: 'mobile',
        sm: 'tablet',
        lg: 'desktop',
      },
    },
    version: 'v3',
  },
  'gen:icon': {
    input: 'public/icons',
    version: 'v3',
  },
}
export default config
