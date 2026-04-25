import { useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus';

import OnboardingStep1 from '@/components/onboarding/OnboardingStep1';
import OnboardingStep2 from '@/components/onboarding/OnboardingStep2';
import ProgressBar from '@/components/onboarding/ProgressBar';

export default function OnboardingSwiper() {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalSteps = 3;
  const { completeOnboarding } = useOnboardingStatus();

  const goToNext = () => {
    if (currentPage < totalSteps - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      // On last page, complete onboarding and go to main app
      completeOnboarding();
      router.replace('/(onboarding)');
    }
  };

  const goToBack = () => {
    if (currentPage > 0) {
      pagerRef.current?.setPage(currentPage - 1);
    }
  };

  const onPageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <LinearGradient
      colors={['#e91e620d', '#ffff']}
      start={{ x: 1, y: 0.2 }}
      end={{ x: 0, y: 0.2 }}
      style={styles.container}
    >
      <ProgressBar currentIndex={currentPage} totalSteps={totalSteps} />

      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <OnboardingStep1 />
        </View>
        <View key="2" style={styles.page}>
          <OnboardingStep2 />
        </View>

      </PagerView>

      <View style={styles.buttonRow}>
        <Pressable onPress={goToNext} style={styles.primaryButton}>
          <Text style={styles.primaryText}>
            {currentPage === totalSteps - 1 ? 'Get Started' : 'Next →'}
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
    paddingTop: 100,   // extra space for progress bar
    paddingHorizontal: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
    marginBottom: 10
  },
  primaryText: {
    color: 'black',
    fontFamily: 'ManropeBold',
    fontSize: 18,
  },
  placeholder: {
    flex: 0.5,
  },
});