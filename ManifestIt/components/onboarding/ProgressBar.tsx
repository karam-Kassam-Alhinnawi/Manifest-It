import {View, StyleSheet} from "react-native";

interface Props {
    currentIndex: number;
    totalSteps: number;
}

export default function ProgressBar({currentIndex, totalSteps} : Props) {
    const progressWidth = `${((currentIndex + 1) / totalSteps) * 100}%`;

    return (
        <View style={styles.container}>
            <View style={styles.track}>
                <View style={[styles.fill, {width: progressWidth}]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 60,
        left: 24,
        right: 24,
    },

    track: {
        height: 4,
        backgroundColor: "#E0E0E0",
        borderRadius: 2,
    },

    fill: {
        height: 4,
        backgroundColor: "#b80049",
        borderRadius: 2,
    }
})