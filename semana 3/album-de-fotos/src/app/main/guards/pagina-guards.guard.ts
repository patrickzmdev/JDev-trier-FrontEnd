import { CanActivateFn } from '@angular/router';

export const paginaGuardsGuard: CanActivateFn = (route, state) => {
  return true;
};
