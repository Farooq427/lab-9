// app/layout.tsx
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function Layout() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Redirect based on user role
        if (user.email === 'admin@example.com') {
          router.push('/AdminPanel');
        } else {
          router.push('/Dashboard');
        }
      } else {
        router.push('/index'); // Redirect to login screen if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  return null; // This component doesn’t render anything
}
