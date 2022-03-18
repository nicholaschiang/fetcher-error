import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  throw new Error('Fake Error');
};
