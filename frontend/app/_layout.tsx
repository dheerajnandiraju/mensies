import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'expo-router';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();



  return (
    <Stack>
      {/* <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signincopy" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}