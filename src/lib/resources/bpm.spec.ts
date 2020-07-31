import BPM from './bpm';
import { SeniorApi } from '@seniorsistemas/senior-core';
import {
  StartProcessIn,
  ResponsePendencyIn,
  CommitAttachmentIn,
  LinkAttachmentsIn,
  NewAttachmentIn,
} from '../model';

const request = jest.fn();
const getUrlPath = jest.fn().mockImplementation((path: string, anonymous = false): string => {
  return `tests/${path}/${anonymous ? 'anonymous/' : ''}`;
});

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
  title: 'Title',
};

const RESPONSE_PENDENCY_IN: ResponsePendencyIn = {
  authorization: 'auth',
  responseData: {
    businessData: 'business',
    flowExecutionData: {
      actionToExecute: 'action',
      nextSubject: 'subject',
    },
  },
  serviceFlowToken: {
    activityId: 10,
    processInstanceID: 20,
    step: 30,
  },
};

const COMMIT_ATTACHMENT_IN: CommitAttachmentIn = {
  id: 'my_id',
};

const LINK_ATTACHMENTS_IN: LinkAttachmentsIn = {
  ids: ['my_id'],
  processInstance: 10,
};

const NEW_ATTACHMENT_IN: NewAttachmentIn = {
  name: 'my_file_name',
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
    bpm.responsePendency({ ...RESPONSE_PENDENCY_IN });
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/responsePendency/',
      method: 'POST',
      data: { ...RESPONSE_PENDENCY_IN },
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
    bpm.startProcess({ ...START_PROCESS_IN });
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/startProcess/',
      method: 'POST',
      data: { ...START_PROCESS_IN },
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/startProcess');
  });
  it('Should searchTasks', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.searchTasks();
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/queries/searchTasks/',
      method: 'POST',
      data: {},
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('queries/searchTasks');
  });
  it('Should commitAttachment', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.commitAttachment({ ...COMMIT_ATTACHMENT_IN });
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/commitAttachment/',
      method: 'POST',
      data: { ...COMMIT_ATTACHMENT_IN },
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/commitAttachment');
  });
  it('Should linkAttachments', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.linkAttachments({ ...LINK_ATTACHMENTS_IN });
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/linkAttachments/',
      method: 'POST',
      data: { ...LINK_ATTACHMENTS_IN },
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/linkAttachments');
  });
  it('Should newAttachment', () => {
    //Arrange
    const bpm = new BPM(new SeniorApi());
    bpm.request = request;
    bpm.getUrlPath = getUrlPath;
    //Act
    bpm.newAttachment({ ...NEW_ATTACHMENT_IN });
    //Assert
    expect(request).toHaveBeenCalledWith({
      url: 'tests/actions/newAttachment/',
      method: 'POST',
      data: { ...NEW_ATTACHMENT_IN },
      headers: {
        authorization: null,
      },
    });
    expect(getUrlPath).toHaveBeenCalledWith('actions/newAttachment');
  });
});
