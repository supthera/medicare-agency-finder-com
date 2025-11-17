import { CMS_HHA_DATASET_URL } from '../config/cmsApi';

export async function fetchCmsHhaDataset() {
  const res = await fetch(CMS_HHA_DATASET_URL);
  if (!res.ok) throw new Error('Failed to fetch CMS Home Health Agency dataset');
  return res.json();
}
