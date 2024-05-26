import {
  Card,
  Chip,
  Header,
  Main,
  Separator,
  Text,
} from 'lunchbox/components.ts';
import { ChipSelect } from 'lunchbox/islands.ts';

export default function ChipTest() {
  return (
    <>
      <Header layout_type='focus'>
        <Text type='title'>Chip tests</Text>
      </Header>
      <Main layout_type='focus'>
        <Card>
          <Text type='subheading' noMargins>Chip</Text>
          <div class='flex gap-4'>
            <Chip content='Test Chip' />
            <Chip content='Selected Chip' selected />
          </div>
          <Separator />
          <Text type='subheading' noMargins>ChiplistSelect</Text>
          <ChipSelect
            initialChips={[
              { content: 'test chip' },
              { content: 'test 2 chip' },
            ]}
          />
        </Card>
      </Main>
    </>
  );
}
