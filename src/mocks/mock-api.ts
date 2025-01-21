// This file was mocking the API call from server for implement later, use the
// static data
import { MockCopyPasta, MockCopyPasteType } from './mock-data';

export const getAllCopyPasta = async (): Promise<MockCopyPasteType[]> => {
  return new Promise((res, _rej) => {
    res(MockCopyPasta);
  });
};
