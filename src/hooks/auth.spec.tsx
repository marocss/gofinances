import { act, renderHook } from "@testing-library/react-hooks";
import fetchMock from 'jest-fetch-mock'
import { mocked } from "ts-jest/utils";
import { startAsync } from 'expo-auth-session'
import { AuthProvider, useAuth } from './auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('expo-auth-session')

fetchMock.enableMocks()

const userTest = {
  id: 'any_id',
  email: 'john.doe@email.com',
  name: 'John Doe',
  photo: 'any_photo.png'
};

describe('Auth hook', () => {
  beforeEach(async () => {
     const userCollectionKey = '@gofinances:user'
     await AsyncStorage.removeItem(userCollectionKey)
  })

  it('should be able to sign in with an google account', async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      params: {
        access_token: 'any_token',
      }
    });

    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle())

    expect(result.current.user.email)
      .toBe(userTest.email);
  })

  it('should fail to connect if process was cancelled', async () => {
    const googleMocked = mocked(startAsync as any)
    googleMocked.mockReturnValueOnce({
      type: 'cancel',
      params: {
        access_token: null,
      }
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle())

    expect(result.current.user).not.toHaveProperty('id')
  })
})