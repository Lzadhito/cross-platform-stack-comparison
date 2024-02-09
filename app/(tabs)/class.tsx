import { FlashList } from "@shopify/flash-list";
import { Image, ScrollView, View } from "tamagui";

export default function ClassScreen() {
  function getValueAtIndex(index: number) {
    return Number(
      {
        "0": "0",
        "1": "10",
        "2": "15",
        "3": "10",
        "4": "0",
        "5": "-10",
        "6": "-15",
        "7": "-10",
        "8": "0",
      }[index % 8]
    );
  }
  return (
    <ScrollView>
      <FlashList
        data={new Array(100).fill(1)}
        estimatedItemSize={100}
        renderItem={({ index }) => <RoundedStar mr={`$${getValueAtIndex(index)}`} />}
      />
    </ScrollView>
  );
}

function RoundedStar(props: any) {
  const circleSize = "$8";
  const imageSize = "$4";
  return (
    <View w="100%" alignItems="center">
      <View
        mt="$5"
        bg="green"
        w={circleSize}
        h={circleSize}
        borderRadius={100}
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
          h={imageSize}
          w={imageSize}
        />
      </View>
    </View>
  );
}
