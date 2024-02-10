import { Card, Image, Progress, Text, View } from "tamagui";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View flex={1}>
      <FlashList data={new Array(100).fill(1)} renderItem={({ item }) => <SectionCard />} estimatedItemSize={100} />
    </View>
  );
}

function SectionCard() {
  return (
    <Link href="/class">
      <View alignItems="center" width="100%">
        <Card w="90%" my="$4">
          <Card.Header display="flex" alignItems="center" backgroundColor="#FF64BF" radiused>
            <Image
              src="https://d35aaqx5ub95lt.cloudfront.net/images/pathSections/unlocked/d335d1f15869241c02a03a52abd842e4.svg"
              width={200}
              height={200}
            />
          </Card.Header>
          <Card.Footer display="flex" flexDirection="column" gap="$5" p="$5" h={100} w="100%">
            <Text fontWeight="bold" fontSize="$7">
              Section 2
            </Text>
            <Progress size="$2" value={40} backgroundColor="lightgray">
              <Progress.Indicator backgroundColor="green" radiused />
            </Progress>
          </Card.Footer>
        </Card>
      </View>
    </Link>
  );
}
