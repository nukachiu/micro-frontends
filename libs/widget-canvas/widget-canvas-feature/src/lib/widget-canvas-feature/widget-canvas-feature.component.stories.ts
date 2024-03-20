import { type Meta, type StoryObj } from '@storybook/angular';
import { WidgetCanvasFeatureComponent } from './widget-canvas-feature.component'; // Import your component
import { within } from '@storybook/testing-library';

const meta: Meta<WidgetCanvasFeatureComponent> = {
  component: WidgetCanvasFeatureComponent,
  title: 'WidgetCanvasFeatureComponent',
};

export default meta;

type Story = StoryObj<WidgetCanvasFeatureComponent>;

export const Primary: Story = {
  render: () => ({
    component: WidgetCanvasFeatureComponent,
    props: {
      // Props if your component needs any
    },
  }),
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/widget-canvas-feature works!/gi)).toBeTruthy();
  },
};