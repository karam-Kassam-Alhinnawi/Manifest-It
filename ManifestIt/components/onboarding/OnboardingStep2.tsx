import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function OnboardingStep2(){
    return(
        <View>
         <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.text1}>You Talk.</Text>
            <Text style={styles.text2}>We Curate</Text>
            <Text style={styles.paragraph}>
                Type a feeling like 'Cozy Winter Cabin'. Our AI Searches on Multiple Platforms, and Builds Your Gallery! 
            </Text>
         </View>

         <View style={styles.container}>
            {/* Step 1*/}
            <View style={styles.stepRow}>
               <View style={styles.timelineColumn}>
                 <View style={styles.circle}>
                   <View style={styles.innerCircle}>
                     <Ionicons name="sparkles" size={28} color="#b80049" />
                      
                   </View>
                 </View>
                 <View style={styles.lineAfter}/>
               </View>
               <View style={styles.labelContainer}>
                <Text style={styles.circleTitle}>Name Your Vibe</Text>
                <Text style={styles.circleSubtitle}>Type a Mood, Felling, or Aesthetic</Text>
               </View>
            </View>

             {/* Step 2 */}
             <View style={styles.stepRow}>
                <View style={styles.timelineColumn}>
                  <View style={styles.circle}>
                     <View style={styles.innerCircle2}>
                       <Ionicons name="search" size={28} color="white" />
                     </View>
                  </View>
                  <View style={styles.lineAfter}/>
                </View>
                <View style={styles.labelContainer}>
                  <Text style={styles.circleTitle}>AI Searches Everywhere</Text>
                  <Text style={styles.circleSubtitle}>We Scan Over 5 Sites to Give You The Best Results</Text>
                </View>
             </View>

              {/* Step 3 */}
              <View style={styles.stepRow}>
                <View style={styles.timelineColumn}>
                  <View style={styles.circle}>
                    <View style={styles.innerCircle}>
                        <Ionicons name="grid" size={28} color="#b80049" />
                    </View>
                  </View>
                </View>
                <View style={styles.labelContainer}>
                   <Text style={styles.circleTitle}>Your Gallery is Built</Text>
                   <Text style={styles.circleSubtitle}>Curated Just for Your Vision</Text>
                </View>
              </View>
     


        </View>


        </View>
    )
}

const styles = StyleSheet.create({
  text1: {
    fontFamily: "EpilogueBlack",
    color: "black",
    fontSize: 38,
    lineHeight: 38,
    marginTop: 24,
    width: "100%",
    textAlign: "center",
  },

  text2: {
    fontFamily: "EpilogueBlack",
    color: "#b80049",
    fontSize: 38,
    width: "100%",
    textAlign: "center",
  },

  paragraph: {
    fontFamily: "ManropeRegular",
    color: "#949393",
    fontSize: 18,
    marginTop: 24,
    textAlign: "center",
    height: 80,
  },

  container:{
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  timelineColumn: {
    alignItems: "center",
    width: 90,
  },

  circle: {
    width: 90, 
    height: 90, 
    borderRadius: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  labelContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 22,
  },

  circleTitle: {
    fontFamily: "ManropeSemiBold",
    fontSize: 18,
    color: "black"
  },

  circleSubtitle: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
    color: "#949393",
    marginTop: 4,
  },

  innerCircle: {
    width: "70%",
    height: "70%",
    backgroundColor: "#f5f2f2",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  innerCircle2: {
    width: "70%",
    height: "70%",
    backgroundColor: "#b80049",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  lineAfter:{
     position: "absolute",
     top: 90,
     left: "50%",
     marginLeft: -1,
     width: 2,
     height: 50,
     backgroundColor: "#b8004a4c",
     zIndex: -1
  },

  circleText1: {
    position: "absolute",
    top: 120,
    backgroundColor: "white",
    width: 200,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    zIndex: 3,
    fontFamily: "ManropeSemiBold"
  }

});
