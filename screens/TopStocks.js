import React, { useRef } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import { data } from "../data/StockData";
import BottomSheet from "reanimated-bottom-sheet";
import Header from "../components/Header";
import { LineChart } from "react-native-chart-kit";

const TopStocks = () => {
  const Tesla = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 457,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 4,
            backgroundColor: "black",
            width: 70,
            bottom: 8,
            borderRadius: 100,
          }}
        ></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginTop: 15,
            marginLeft: 10,
            marginBottom: 7,
          }}
        >
          Here's Why
        </Text>
        <Image
          style={{
            height: 45,
            width: 45,
            resizeMode: "contain",
            borderRadius: 25,
            left: 145,
            top: 5,
          }}
          source={{
            uri: data[0].image,
          }}
        />
      </View>
      <View style={{top: 7, marginLeft: 10 }}>
        <Text style={styles.text}>
        When it comes to top gainers, Tesla is a beast. The company's revenue numbers continue to impress, and profits are expected to double on the company's next earnings call on October 20. Because the company is developing never-before-seen technology, it will be a top gainer in the long run as well.
        </Text>
      </View>
      <View style={[styles.chartTitleContainer], {marginTop: 25, marginLeft: 5}}>
        <Text style={styles.chartTitle}>{data[0].symbol}</Text>
      </View>
      <View style={[styles.chartContainer]}>
        <LineChart
          data={{
            labels: [
              data[3].price[4].chartDate,
              data[3].price[3].chartDate,
              data[3].price[2].chartDate,
              data[3].price[1].chartDate,
              data[3].price[0].chartDate,
            ],
            datasets: [
              {
                data: [
                  data[0].price[4].high,
                  data[0].price[3].high,
                  data[0].price[2].high,
                  data[0].price[1].high,
                  data[0].price[0].close,
                ],
              },
            ],
          }}
          width={410}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            propsForBackgroundLines: {
              stroke: "#ffffff",
            },
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(5, 125, 205,  ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "#FFFF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
  const Cenovus = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 457,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 4,
            backgroundColor: "black",
            width: 70,
            bottom: 8,
            borderRadius: 100,
          }}
        ></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginTop: 15,
            marginLeft: 10,
            marginBottom: 7,
          }}
        >
          Here's Why
        </Text>
        <Image
          style={{
            height: 85,
            width: 85,
            resizeMode: "contain",
            borderRadius: 25,
            left: 120,
            bottom: 10,
          }}
          source={{
            uri: data[1].image,
          }}
        />
      </View>
      <View style={{ bottom: 25, marginLeft: 10 }}>
        <Text style={styles.text}>
          Cenovus Energy has performed admirably over the last week. The
          corporation's foundations have always been sturdy, but the pandemic
          took a toll on the company, as their stock price plummeted by more
          than 70%! Since then, the world has gradually opened up, and oil/gas
          prices have skyrocketed in recent times, which is why the corporation
          is now doing so well.
        </Text>
      </View>
      <View style={styles.chartTitleContainer}>
        <Text style={styles.chartTitle}>{data[1].symbol}</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: [
              data[1].price[4].chartDate,
              data[1].price[3].chartDate,
              data[1].price[2].chartDate,
              data[1].price[1].chartDate,
              data[1].price[0].chartDate,
            ],
            datasets: [
              {
                data: [
                  data[1].price[4].high,
                  data[1].price[3].high,
                  data[1].price[2].high,
                  data[1].price[1].high,
                  data[1].price[0].close,
                ],
              },
            ],
          }}
          width={410}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            propsForBackgroundLines: {
              stroke: "#ffffff",
            },
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(5, 125, 205,  ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "#FFFF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
  const BlackBerry = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 475,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 4,
            backgroundColor: "black",
            width: 70,
            bottom: 8,
            borderRadius: 100,
          }}
        ></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginTop: 15,
            marginLeft: 10,
            marginBottom: 7,
          }}
        >
          Here's Why
        </Text>
        <Image
          style={{
            height: 45,
            width: 45,
            resizeMode: "contain",
            borderRadius: 25,
            left: 145,
            top: 5,
          }}
          source={{
            uri: data[3].image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          BlackBerry's financials are quite solid, and despite the fact that it
          no longer produces smartphones, the company continues to outperform
          the market, with a 47% rise year to date. The business is
          collaborating with Alphabet Inc. to develop the next
          generation Snapdragon Automotive Cockpit platform. This company may be
          known as a meme stock these days, but its fundamentals are
          truly strong and the company is on the right track.
        </Text>
      </View>
      <View style={{ alignItems: "flex-start", marginLeft: 15, marginTop: 28 }}>
        <Text style={styles.chartTitle}>{data[3].symbol}</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: [
              data[3].price[4].chartDate,
              data[3].price[3].chartDate,
              data[3].price[2].chartDate,
              data[3].price[1].chartDate,
              data[3].price[0].chartDate,
            ],
            datasets: [
              {
                data: [
                  data[3].price[4].high,
                  data[3].price[3].high,
                  data[3].price[2].high,
                  data[3].price[1].high,
                  data[3].price[0].close,
                ],
              },
            ],
          }}
          width={410}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            propsForBackgroundLines: {
              stroke: "#ffffff",
            },
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(5, 125, 205,  ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "#FFFF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );

  const sheetRefCenovus = useRef(null);
  const sheetRefBlackBerry = useRef(null);
  const sheetRefTesla = useRef(null);


  return (
    <View style={styles.container}>
      <Header color={"white"} logoColor={"white"} />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 0.2,
            backgroundColor: "white",
            marginTop: 15,
            width: "95%",
          }}
        ></View>
      </View>
      <Text
        style={{
          color: "white",
          marginTop: 20,
          fontSize: 30,
          fontWeight: "300",
          marginLeft: 10,
          fontFamily: "GeoramaReg",
          marginBottom: 5,
        }}
      >
        Top Performing Stocks
      </Text>
      <ScrollView style={{ marginVertical: 2 }}>
        <ListItem
          name={data[0].name}
          symbol={data[0].symbol}
          currentPrice={data[0].price[0].close}
          priceChangePercentage={data[0].percentChange}
          logoUrl={data[0].image}
          onPress={() => sheetRefTesla.current.snapTo(0)}
        />
        <ListItem
          name={data[2].name}
          symbol={data[2].symbol}
          currentPrice={data[2].price[0].close}
          priceChangePercentage={data[2].percentChange}
          logoUrl={data[2].image}
        />
        <ListItem
          name={data[1].name}
          symbol={data[1].symbol}
          currentPrice={data[1].price[0].close}
          priceChangePercentage={data[1].percentChange}
          logoUrl={data[1].image}
          onPress={() => sheetRefCenovus.current.snapTo(0)}
        />
        <ListItem
          name={data[3].name}
          symbol={data[3].symbol}
          currentPrice={data[3].price[0].close}
          priceChangePercentage={data[3].percentChange}
          logoUrl={data[3].image}
          onPress={() => sheetRefBlackBerry.current.snapTo(0)}
        />
        <ListItem
          name={data[4].name}
          symbol={data[4].symbol}
          currentPrice={data[4].price[0].close}
          priceChangePercentage={data[4].percentChange}
          logoUrl={data[4].image}
        />
        <ListItem
          name={data[5].name}
          symbol={data[5].symbol}
          currentPrice={data[5].price[0].close}
          priceChangePercentage={data[5].percentChange}
          logoUrl={data[5].image}
        />
        <ListItem
          name={data[6].name}
          symbol={data[6].symbol}
          currentPrice={data[6].price[0].close}
          priceChangePercentage={data[6].percentChange}
          logoUrl={data[6].image}
        />
        <ListItem
          name={data[7].name}
          symbol={data[7].symbol}
          currentPrice={data[7].price[0].close}
          priceChangePercentage={data[7].percentChange}
          logoUrl={data[7].image}
        />
        <ListItem
          name={data[8].name}
          symbol={data[8].symbol}
          currentPrice={data[8].price[0].close}
          priceChangePercentage={data[8].percentChange}
          logoUrl={data[8].image}
        />
        <ListItem
          name={data[9].name}
          symbol={data[9].symbol}
          currentPrice={data[9].price[0].close}
          priceChangePercentage={data[9].percentChange}
          logoUrl={data[9].image}
        />
      </ScrollView>
      <BottomSheet
        ref={sheetRefCenovus}
        snapPoints={[250, 0, 0]}
        borderRadius={26}
        renderContent={Cenovus}
      />
      <BottomSheet
        ref={sheetRefBlackBerry}
        snapPoints={[250, 0, 0]}
        borderRadius={26}
        renderContent={BlackBerry}
      />
        <BottomSheet
        ref={sheetRefTesla}
        snapPoints={[250, 0, 0]}
        borderRadius={26}
        renderContent={Tesla}
      />
    </View>
  );
};

export default TopStocks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  textContainer: {
    marginLeft: 10,
    top: 10,
  },
  text: {
    fontSize: 13,
    color: "black",
    fontWeight: "200",
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 38,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  chartTitleContainer: {
    alignItems: "flex-start",
    marginLeft: 11,
  },
});
