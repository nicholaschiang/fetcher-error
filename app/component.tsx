import { useFetcher } from 'remix';
import { useEffect } from 'react';

export default function Component() {
  const fetcher = useFetcher();
  useEffect(() => {
    if (fetcher.type === 'init') fetcher.load('/api');
  }, [fetcher]);
  return <></>;
}
