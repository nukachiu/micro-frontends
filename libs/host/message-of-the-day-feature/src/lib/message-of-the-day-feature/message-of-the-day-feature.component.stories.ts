import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MessageOfTheDayFeatureComponent } from './message-of-the-day-feature.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Observable, of } from 'rxjs';
import { IMessageOfTheDayHttpService } from './services/interfaces/message-of-the-day-http-service.interface';
import { MessageOfTheDayHttpService } from './services/message-of-the-day-http.service';
import { MessageOfTheDayPollingService } from './services/message-of-the-day-polling.service';
import { MessageOfTheDayFeatureService } from './services/message-of-the-day-feature.service';

class MockMessageOfTheDayHttpService implements IMessageOfTheDayHttpService {
  getMessages(): Observable<string[]> {
    return of([
      'Mock Message 1',
      'Mock Message 2',
      'Mock Message 3',
      'Mock Message 4',
      'Mock Message 5',
      'Mock Message 6',
      'Mock Message 7',
      'Mock Message 8',
      'Mock Message 9',
      'Mock Message 10',
    ]);
  }
}

// const MESSAGE_OF_THE_DAY_HTTP_SERVICE_TOKEN =
//   new InjectionToken<IMessageOfTheDayHttpService>(
//     'IMessageOfTheDayHttpService'
//   );

const meta: Meta<MessageOfTheDayFeatureComponent> = {
  component: MessageOfTheDayFeatureComponent,
  title: 'MessageOfTheDayFeatureComponent',
  // decorators: [
  //   moduleMetadata({
  //     providers: [
  //       {
  //         provide: MessageOfTheDayHttpService,
  //         useClass: MockMessageOfTheDayHttpService,
  //       },
  //       MessageOfTheDayPollingService,
  //     ],
  //   }),
  // ],
};
export default meta;
type Story = StoryObj<MessageOfTheDayFeatureComponent>;

export const Primary: Story = {
  render: () => ({
    component: MessageOfTheDayFeatureComponent,
    moduleMetadata: {
      // Apply module metadata directly in the render method if needed
      providers: [
        {
          provide: MessageOfTheDayHttpService,
          useClass: MockMessageOfTheDayHttpService,
        },
        MessageOfTheDayPollingService,
        MessageOfTheDayFeatureService,
      ],
    },
    props: {
      // Props if your component needs any
    },
  }),
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/message-of-the-day-feature works!/gi)
    ).toBeTruthy();
  },
};
