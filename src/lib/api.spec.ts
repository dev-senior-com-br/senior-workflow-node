import { PlatformAppsApi } from '../';

describe('PlatformAppsApi', () => {
  it('Should get bpm module', () => {
    //Arrange
    const api = new PlatformAppsApi();
    const spyOnBpmGet = jest.spyOn(api, 'bpm', 'get');
    //Act
    api.bpm;
    //Assert
    expect(spyOnBpmGet).toHaveBeenCalledTimes(1);
  });
});
