import { Hanko } from '@teamhanko/hanko-elements'
import { useRuntimeConfig } from '#imports'

/**
 * This composable returns a Hanko instance.
 *
 * It will be `null` on the server but defined on the client.
 */
export function useHanko() {
  if (import.meta.server) {
    return null
  }

  const hankoConfig = useRuntimeConfig().public.hanko
  const hankoOptions = {
    cookieName: hankoConfig.cookieName,
    localStorageKey: hankoConfig.cookieName,
    cookieSameSite: hankoConfig.cookieSameSite,
    cookieDomain: hankoConfig.cookieDomain,
    shadow: hankoConfig.shadow,
    injectStyles: hankoConfig.injectStyles,
    enablePasskeys: hankoConfig.enablePasskeys,
    hidePasskeyButtonOnLogin: hankoConfig.hidePasskeyButtonOnLogin,
    translations: hankoConfig.translations,
    translationsLocation: hankoConfig.translationsLocation,
    fallbackLanguage: hankoConfig.fallbackLanguage,
  }
  return new Hanko(hankoConfig.apiURL, hankoOptions)
}
