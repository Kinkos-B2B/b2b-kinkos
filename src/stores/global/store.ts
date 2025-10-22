import { createStoreContext, withSetter } from '@toktokhan-dev/zustand-react'

import { immer } from 'zustand/middleware/immer'

export type GlobalStore = {
  // Intro 관련 상태
  isIntroCompleted: boolean
  setIntroCompleted: (completed: boolean) => void
}

/**
 * zustand와 withSetter + context + immer 사용 예제입니다.
 *
 * Nextjs 와 같은 SSR 환경에선, 서버에서의 상태변경이 일어날 경우 각기 다른 클라이언트에서 서버상태를 공유하게 되는 이슈가 생길 수 있기 때문에, zustand 를 context 와 함께 사용하는 것을 권장합니다.
 * @see [zustand-with-Next.js] https://zustand.docs.pmnd.rs/guides/nextjs
 *
 * @see [Tokdocs] https://toktokhan-dev-docs.vercel.app/docs/zustand/overview#zustand
 * @see [zustand-immer] https://zustand.docs.pmnd.rs/integrations/immer-middleware
 */
export const {
  Provider: GlobalStoreProvider,
  useContext: useGlobalStore,
  withProvider: withGlobalProvider,
} = createStoreContext(
  withSetter(
    immer<GlobalStore>((set, get, store) => ({
      // Intro 관련 상태 초기화
      isIntroCompleted: false,
      setIntroCompleted: (completed: boolean) =>
        set((state) => {
          state.isIntroCompleted = completed
        }),
    })),
  ),
)
