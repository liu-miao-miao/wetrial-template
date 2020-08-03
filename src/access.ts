import { IKeyValue } from '@wetrial/core';
import { Permissions } from '@config/routes';
import { IGlobalProps } from '@/services/global.d';

export default function (initialState: IGlobalProps) {
  const { currentUser } = initialState;
  const allPermissions = {
    ...Permissions,
  };
  const flatPermissions = dgFlatPermissions(allPermissions, currentUser?.permissions);
  console.log(flatPermissions);
  return flatPermissions;
}

function dgFlatPermissions(
  allPermissions: IKeyValue,
  curPermissions: string[] = [],
): IKeyValue<boolean> {
  let result: IKeyValue<boolean> = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        result[allPermissions[key]] = curPermissions.indexOf(allPermissions[key]) !== -1;
      } else {
        const subResult = dgFlatPermissions(allPermissions[key], curPermissions);
        result = {
          ...result,
          ...subResult,
        };
      }
    }
  }
  return result;
}
