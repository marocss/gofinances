import { act, renderHook } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from './auth'

describe('Auth hook', () => {
  it('should be able to sign in with an google account', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });
    // console.log('====================================');
    // console.log(result.current);
    // console.log('====================================');
    await act(() => result.current.signInWithGoogle())

    expect(result.current.user).toBeTruthy()
  })
})