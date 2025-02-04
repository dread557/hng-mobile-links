import { StyleSheet, Platform, Image, ScrollView } from "react-native";
import { HelloWave } from "@/components/HelloWave";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExternalLink } from "@/components/ExternalLink";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to HNG stage 0!</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Click the link below to see the project repository:
          </ThemedText>
          <ExternalLink
            href="https://github.com/dread557/hng-mobile-links"
            style={styles.link}
            accessibilityLabel="Visit the project GitHub repository"
          >
            See project GitHub repo
          </ExternalLink>
          <ExternalLink
            href="https://hng.tech/hire/react-native-developers"
            style={styles.link}
            accessibilityLabel="See React Native jobs on HNG network"
          >
            See React Native jobs on HNG network
          </ExternalLink>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  link: {
    color: "#007AFF", // iOS system blue color
    textDecorationLine: "underline",
    marginTop: 8,
  },
});
