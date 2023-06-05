import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, fetch, $fetch } from '@nuxt/test-utils'

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
})

describe('ssr', async () => {
  it('redirects to the login page', async () => {
    const res = await fetch('/', { redirect: 'manual' })
    expect(res.headers.get('location')).toBe('/login')
  })

  it('respects custom elements', async () => {
    const html = await $fetch('/login')
    expect(html).toContain('<hanko-auth></hanko-auth>')
  })
})
