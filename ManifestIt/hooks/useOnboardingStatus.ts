import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_COMPLETE_KEY = 'onboarding Complete';

export function useOnboardingStatus(){
    const [isLoading, setIsLoading] = useState(true);
    const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

    useEffect(() => {
        async function check(){
            try{
                const value = await AsyncStorage.getItem(ONBOARDING_COMPLETE_KEY);
                setHasCompletedOnboarding(value === "true");
            } catch (e) {
                setHasCompletedOnboarding(false);
            } finally{
                setIsLoading(false);
            }
        }
        check();
    }, []);

    const completeOnboarding = async () => {
        await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, "true");
        setHasCompletedOnboarding(true);
    };

    return {isLoading, hasCompletedOnboarding, completeOnboarding};
}