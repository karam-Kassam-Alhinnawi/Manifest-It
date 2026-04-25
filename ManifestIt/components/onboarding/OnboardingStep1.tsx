import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH - 48;

export default function OnboardingStep1() {
  return (
    <View>
      {/* Headlines */}
      <Text
        style={{
          fontSize: 44,
          fontFamily: "EpilogueBlack",
          color: "Black",
          lineHeight: 48,
        }}
      >
        Don't Just{"\n"}
        <Text
          style={{
            fontSize: 44,
            fontFamily: "EpilogueBlack",
            color: "Black",
          }}
        >
          dream It.
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 44,
          fontFamily: "EpilogueBlack",
          color: "#b80049",
          marginBottom: 8,
        }}
      >
        Manifest It.
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontFamily: "ManropeRegular",
          marginTop: 14,
          color: "#b1b1b1",
          marginBottom: 50,
        }}
      >
        The fastest way to turn your goals into a visual roadmap. No more messy
        Pinterest boards or Canva struggles
      </Text>

      {/* Card with gradient overlay and content */}
      <View style={styles.card}>
        {/* Grid (two columns) */}
        <View style={styles.grid}>
          {/* Left column */}
          <View style={styles.leftColumn}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9KQ3sqQCe1LkfNgqWkJfCRrqPR8G8Rvfp2qEFSsAK6DbPqqPuv7WKtddbFyY7X5l1fasl7Y3DlXKadeeSDzJjRbdpXdomj7n08AEC5w_yGFLNG1qM9ZCGn41Bc6VUlMINtlQhHFVm_eaGAl_VjjgH8Q77tlfiI_9rw469ZamX3_i9bhlJnrVXK_EMcnzu1-epxbsmYNs1FhFnrHNS2kYx3ml0VNDJvAVp_eBzVousoCFFEnGo7Si0Bg4Y8b6oSqoMpJ12uBZ_BDA",
                }}
                style={styles.image}
                accessibilityLabel="Soft aesthetic photograph of a minimalist modern home interior with warm morning light"
              />
            </View>
            {/* Skeleton lines */}
            <View style={[styles.skeleton, { width: "75%" }]} />
            <View style={[styles.skeleton, { width: "50%" }]} />
          </View>

          {/* Right column */}
          <View style={styles.rightColumn}>
            <View style={styles.travelBadge}>
              <Text style={styles.travelText}>TRAVEL</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuApMeHrg69ZeLxOLzk7nHMCiBdWObFQP4yC0oSbMclpvQg1CdyRbQIkodfLtOrcENaR1yenSvdvKB7M8SvXSVJHWNCtCcBiRweUyPfTv9iD_dYUkjI0Y2ARaGSidI_w3EgkqbcPCBY9u8pc7azF0kDjIivDyO2Kv4tP45DpzGeY1MXKZWaZNYug8vHkrS5FRWwEj4Z-Z1wasc3mafh_E4bKTTZFD11V0a5fzaVyfMGhHfxrV8vJIDjY_eaeznfTDoAKGhUOu8vKOjw",
                }}
                style={styles.image}
                accessibilityLabel="Serene tropical beach with white sand and clear turquoi"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    alignSelf: "center",
    borderRadius: 32,
    backgroundColor: "#F5F5F5",
    shadowColor: "#1A1C1C",
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.06,
    shadowRadius: 80,
    elevation: 10,
    padding: 16,
    transform: [{ rotate: "-2deg" }],
    marginBottom: 48,
    overflow: "hidden",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
    zIndex: 1,
  },
  grid: {
    flexDirection: "row",
    gap: 12,
    height: 256,
    borderRadius: 12,
    overflow: "hidden",
  },
  leftColumn: {
    flex: 1,
    gap: 8,
  },
  rightColumn: {
    flex: 1,
    gap: 12,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#ECECEC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  skeleton: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 999,   // fully rounded (was 2, but 999 gives pill shape)
    marginTop: 4,
  },
  travelBadge: {
    backgroundColor: "rgba(233, 30, 98, 0.1)",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  travelText: {
    fontFamily: "EpilogueBold",
    color: "#E91E63",
    fontSize: 20,
    letterSpacing: -0.5,
  },
  watermarkContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-12deg" }],
    opacity: 0.1,
    zIndex: 2,
  },
  watermarkText: {
    fontFamily: "EpilogueBlack",
    fontWeight: "900",
    fontSize: 60,
    color: "#1A1A1A",
  },
});