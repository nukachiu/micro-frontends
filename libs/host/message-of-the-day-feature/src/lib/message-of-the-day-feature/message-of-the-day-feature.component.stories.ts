import { type Meta, type StoryObj } from '@storybook/angular';
import { MessageOfTheDayFeatureComponent } from './message-of-the-day-feature.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Observable, of } from 'rxjs';
import { IMessageOfTheDayHttpService } from './services/interfaces/message-of-the-day-http-service.interface';
import { MessageOfTheDayHttpService } from './services/message-of-the-day-http.service';
import { MessageOfTheDayPollingService } from './services/message-of-the-day-polling.service';
import { MessageOfTheDayFeatureService } from './services/message-of-the-day-feature.service';

class MockMessageOfTheDayHttpService implements IMessageOfTheDayHttpService {
  private _count: number = 0;
  private firstMessageSet = [
    'Mock Message 1',
    'Mock Message 2',
    'Mock Message 3',
    'Mock Message 4',
    'Mock Message 5',
  ];
  private secondMessageSet = [
    'New Mock Message 1',
    'New Mock Message 2',
    'New Mock Message 3',
    'New Mock Message 4',
    'New Mock Message 5',
  ];

  public getMessages(): Observable<string[]> {
    console.info('The mock method is called');
    this._count ++;
    if (this._count < 2) {
          return of(this.firstMessageSet);
    } else {
      return of(this.secondMessageSet);
    }
  }
}

const meta: Meta<MessageOfTheDayFeatureComponent> = {
  component: MessageOfTheDayFeatureComponent,
  title: 'MessageOfTheDayFeatureComponent',
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
