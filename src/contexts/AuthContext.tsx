import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string | null;
  email: string | null;
};

type AuthContext = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmailAndPassword: (username: string, email: string, password: string) => Promise<void>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName) {
          throw new Error("Falta conta do Google");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Falta conta do Google");
      }

      await setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email
      })
    }
  }

  async function signUpWithEmailAndPassword(username: string, email: string, password: string) {
    const result = await auth.createUserWithEmailAndPassword(email, password)

    if (result.user) {
      await result.user.updateProfile({ displayName: username })
      const { displayName, uid, email, photoURL } = result.user;

      if (!displayName) {
        throw new Error("Falta conta do Google");
      }
    }
  }

  async function signInWithEmailAndPassword(email: string, password: string) {
    const result = await auth.signInWithEmailAndPassword(email, password)

    if (result.user) {
      const { displayName, uid, email, photoURL } = result.user;

      if (!displayName) {
        throw new Error("Falta conta do Google");
      }

      await setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signUpWithEmailAndPassword, signInWithEmailAndPassword }}>
      {props.children}
    </AuthContext.Provider>
  );
}
