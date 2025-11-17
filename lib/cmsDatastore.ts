import {
  CMS_DATASTORE_QUERY_POST_INDEX,
  CMS_DATASTORE_QUERY_GET_INDEX,
  CMS_DATASTORE_QUERY_POST_DIST,
  CMS_DATASTORE_QUERY_GET_DIST,
} from '../config/cmsApi';

// POST query by index
export async function postQueryByIndex(index: string, body: any) {
  const url = CMS_DATASTORE_QUERY_POST_INDEX.replace('{index}', index);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('POST query by index failed');
  return res.json();
}

// GET query by index
export async function getQueryByIndex(index: string) {
  const url = CMS_DATASTORE_QUERY_GET_INDEX.replace('{index}', index);
  const res = await fetch(url);
  if (!res.ok) throw new Error('GET query by index failed');
  return res.json();
}

// POST query by distributionId
export async function postQueryByDistributionId(distributionId: string, body: any) {
  const url = CMS_DATASTORE_QUERY_POST_DIST.replace('{distributionId}', distributionId);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('POST query by distributionId failed');
  return res.json();
}

// GET query by distributionId
export async function getQueryByDistributionId(distributionId: string) {
  const url = CMS_DATASTORE_QUERY_GET_DIST.replace('{distributionId}', distributionId);
  const res = await fetch(url);
  if (!res.ok) throw new Error('GET query by distributionId failed');
  return res.json();
}
