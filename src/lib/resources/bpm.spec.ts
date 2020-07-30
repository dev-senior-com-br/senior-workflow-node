import BPM from './bpm';
import { SeniorApi } from '@seniorsistemas/senior-core';
import { ListTasksIn, StartProcessIn, ResponsePendencyIn } from '../model';

const request = jest.fn();
const getUrlPath = jest.fn().mockImplementation((path: string, anonymous = false): string => {
  return `tests/${path}/${anonymous ? 'anonymous/' : ''}`;
});

const LIST_TASKS_IN: ListTasksIn = {
  groupBy: 'CATEGORY',
  start: 0,
  limit: 100,
  kind: 'TASK',
  startTask: 0,
  limitTask: 99999
};

const START_PROCESS_IN: StartProcessIn = {
  authorization: 'auth',
  businessData: 'business',
  flowExecutionData: {
    actionToExecute: 'actionToExecute',
    nextSubject: 'nextSubject',
  },
  processId: 10,
  processInstanceID: 20,
  processVersion: 30,
  requester: 'me',
  title: 'Title'
};

const RESPONSE_PENDENCY_IN: ResponsePendencyIn = {
  authorization: 'auth',
  responseData: {
    businessData: 'business',
    flowExecutionData: {
      actionToExecute: 'action',
      nextSubject: 'subject'
    }
  },
  serviceFlowToken: {
    activityId: 10,
    processInstanceID: 20,
    step: 30
  }
};

beforeEach(() => {
  request.mockClear();
  getUrlPath.mockClear();
});

describe('BPM', () => {
  it('Should responsePendency', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.responsePendency(RESPONSE_PENDENCY_IN);
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/responsePendency/',
      method: 'POST',
      data: RESPONSE_PENDENCY_IN,
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/responsePendency');
  });
  it('Should startProcess', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.startProcess(START_PROCESS_IN);
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/startProcess/',
      method: 'POST',
      data: START_PROCESS_IN,
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/startProcess');
  });
  it('Should listTasks', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.listTasks(LIST_TASKS_IN);
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/queries/listTasks/',
      method: 'POST',
      data: LIST_TASKS_IN,
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('queries/listTasks');
  });
});
