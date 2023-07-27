import Person from './types/Person';

export const loadPeople = async (): Promise<Person[]> => {
  const response = await fetch('/api/people');
  const data = await response.json();
  return data;
};
