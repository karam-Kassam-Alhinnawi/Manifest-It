import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, useSegments, useRootNavigationState } from 'expo-router';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus';
import { useAppFonts } from '@/hooks/useFonts';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();
  const { isLoading, hasCompletedOnboarding } = useOnboardingStatus();
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    // Ensure navigation is ready and fonts/status are loaded
    if (!navigationState?.key || !fontsLoaded || isLoading) return;

    const inOnboardingGroup = segments[0] === '(onboarding)';

    if (!hasCompletedOnboarding && !inOnboardingGroup) {
      router.replace('/(onboarding)');
    } else if (hasCompletedOnboarding && inOnboardingGroup) {
      router.replace('/(onboarding)');
    }
  }, [navigationState?.key, hasCompletedOnboarding, isLoading, fontsLoaded]);

  // Always render a navigator – never null
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}