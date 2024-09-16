import { Button, Card, Link, Separator, Text } from "lunchbox/components.ts";

export default function () {
  return (
    <div>
      <Card imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-256px-SIPI_Jelly_Beans_4.1.07.tiff.jpg">
        <Text noMargins type="heading">Standard Test Image</Text>
        <Text>
          Actual test image of jelly beans from the USC-SIPI image database.
        </Text>
        <Separator />
        <Link href="https://en.wikipedia.org/wiki/Standard_test_image">
          <Button type="panel">
            Read more...
          </Button>
        </Link>
      </Card>
      <Card imageUrl="https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png">
        <Text noMargins type="heading">Lenna (or Lena)</Text>
        <Text>
          Image of Lena Forsén used in many image processing experiments.
        </Text>
        <Separator />
        <Link href="https://en.wikipedia.org/wiki/Lenna">
          <Button type="panel">
            Read more...
          </Button>
        </Link>
      </Card>
    </div>
  );
}
